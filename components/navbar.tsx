"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils";

interface NavItem {
    name: string;
    href: string;
}

interface NavbarProps {
    navItems?: NavItem[];
    brandName?: string;
    brandSubtext?: string;
    ctaText?: string;
    ctaHref?: string;
}

const defaultNavItems: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Resources", href: "/resources" },
];

export function Navbar({
    navItems = defaultNavItems,
    brandName = "DB Mainaly",
    brandSubtext = "& Associates",
    ctaText = "Book a Consultation",
    ctaHref = "/contact",
}: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    // Helper to determine if a link is active
    const isActive = (path: string) =>
        pathname === path || (path !== "/" && pathname.startsWith(path));

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [isOpen]);

    return (
        <>
            <header className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-[0_20px_40px_rgba(0,35,111,0.04)] font-sans antialiased tracking-tight transition-all duration-300">
                <nav className="flex justify-between items-center max-w-[1440px] mx-auto px-6 md:px-12 py-5 md:py-6">
                    {/* Brand Logo */}
                    <Link href="/" className="text-xl font-extrabold tracking-tighter text-blue-900 whitespace-nowrap">
                        {brandName} <span className="text-blue-900/70 font-semibold">{brandSubtext}</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-10">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "relative font-semibold text-sm uppercase tracking-wider transition-colors duration-300 py-1",
                                    isActive(item.href) ? "text-blue-900" : "text-gray-600 hover:text-blue-900"
                                )}
                            >
                                {item.name}
                                <span
                                    className={cn(
                                        "absolute bottom-0 left-0 w-full h-0.5 bg-blue-900 transition-transform duration-300 origin-left",
                                        isActive(item.href) ? "scale-x-100" : "scale-x-0"
                                    )}
                                />
                            </Link>
                        ))}
                    </div>

                    {/* CTA & Mobile Toggle */}
                    <div className="flex items-center gap-4 md:gap-6">
                        <Link
                            href={ctaHref}
                            className="hidden lg:block bg-blue-900 text-white px-6 py-2.5 rounded-lg font-bold text-sm uppercase tracking-wide active:scale-95 transition-all hover:bg-blue-800 hover:shadow-lg"
                        >
                            {ctaText}
                        </Link>

                        <button
                            onClick={() => setIsOpen(true)}
                            className="lg:hidden text-blue-900 p-2 hover:bg-blue-50 rounded-full transition-colors cursor-pointer"
                            aria-label="Open Menu"
                        >
                            {/* Using a standard SVG instead of Material Symbols for zero-dependency portability */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                        </button>
                    </div>
                </nav>
                <div className="bg-gray-100 h-px w-full"></div>
            </header>

            {/* Mobile Drawer */}
            <div
                className={cn(
                    "fixed inset-0 z-100 transition-all duration-300",
                    isOpen ? "visible" : "invisible"
                )}
            >
                {/* Backdrop */}
                <div
                    className={cn(
                        "absolute inset-0 bg-blue-900/20 backdrop-blur-sm transition-opacity duration-300",
                        isOpen ? "opacity-100" : "opacity-0"
                    )}
                    onClick={() => setIsOpen(false)}
                />

                {/* Drawer Content */}
                <div
                    className={cn(
                        "absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-300 flex flex-col",
                        isOpen ? "translate-x-0" : "translate-x-full"
                    )}
                >
                    <div className="flex justify-between items-center p-6 border-b border-gray-100">
                        <span className="font-bold text-blue-900 tracking-tighter uppercase text-xs">Navigation Menu</span>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-blue-900 p-2 hover:bg-blue-50 rounded-full cursor-pointer"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        </button>
                    </div>

                    <div className="flex flex-col p-6 space-y-2 grow overflow-y-auto">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                    "flex items-center justify-between p-4 rounded-xl transition-all",
                                    isActive(item.href)
                                        ? "bg-blue-50 text-blue-900 font-bold"
                                        : "text-gray-600 hover:bg-gray-50 hover:text-blue-900"
                                )}
                            >
                                <span className="text-lg">{item.name}</span>
                                {isActive(item.href) && (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                )}
                            </Link>
                        ))}
                    </div>

                    <div className="p-6 border-t border-gray-100 bg-gray-50">
                        <Link
                            href={ctaHref}
                            onClick={() => setIsOpen(false)}
                            className="w-full flex justify-center items-center gap-2 bg-blue-900 text-white py-4 rounded-xl font-bold uppercase tracking-wide active:scale-95 transition-all"
                        >
                            {ctaText}
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></svg>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}