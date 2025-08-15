import { useState } from "react";


type NavbarProps = {
    cyberMode: boolean;
    setCyberMode: (mode: boolean) => void;
}

export default function Navbar({ cyberMode, setCyberMode }: NavbarProps) {

    const links = [
        { name: "About", href: "#about" },
        { name: "Stack", href: "#tech" },
        { name: "Projects", href: "#projects" },
        { name: "Companies", href: "#companies" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 bg-[#fcee09] w-full backdrop-blur-lg z-50 border-b border-primary neon-border">
            <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
                <a href="#" className="text-light text-2xl hover:text-primary hover:neon-text transition text-black">Gus.dev</a>
                <ul className="flex gap-6 items-center">
                    {links.map(link => (
                        <li key={link.name} className="p-2 rounded-lg hover:neon-text hover:bg-[#fcee09] hover:text-dark transition">
                            <a
                                href={link.href}
                                className="text-light text-2xl hover:text-primary transition  cursor-pointer"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                    {/* Cyberpunk Mode Toggle */}

                </ul>

            </div>

        </nav>
    );
}