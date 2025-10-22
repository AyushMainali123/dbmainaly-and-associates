
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">DB Mainaly & Associates</h3>
            <p className="text-sm opacity-90">
              Your trusted partner in financial excellence and business growth.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm opacity-90">
                <Phone size={16} className="mt-0.5 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2 text-sm opacity-90">
                <Mail size={16} className="mt-0.5 shrink-0" />
                <span>info@dbmainaly.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm opacity-90">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>123 Business Avenue, Suite 100, New York, NY 10001</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                <Linkedin size={20} />
              </a>
              <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                <Twitter size={20} />
              </a>
              <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-90">
          <p>&copy; {new Date().getFullYear()} DB Mainaly & Associates. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
