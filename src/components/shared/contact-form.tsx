"use client";

import { toast } from "sonner";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";


export default function ContactForm() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast.success("Thank you for your message! We'll get back to you soon.");
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <Input placeholder="Your Name" required />
            </div>
            <div>
                <Input type="email" placeholder="Your Email" required />
            </div>
            </div>
            <div>
            <Input placeholder="Subject" required />
            </div>
            <div>
            <Textarea placeholder="Your Message" rows={5} required />
            </div>
            <Button type="submit" size="lg" className="w-full">
            Send Message
            </Button>
        </form>
    )
}