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
        <nav className="fixed top-0 left-0 bg-[#fcee09] w-full backdrop-blur-lg  z-50 border-b border-[#ff007f]">
            <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
                <a
                    href="#"
                    className="flex gap-6 items-center bg-[#0009] p-3 shadow-[0_0_12px_#ff007f,0_0_20px_#ff1493_inset] text-2xl text-white font-bold glitch-pink transition hover:text-[#ff1493]"
                    style={{ clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)" }}
                >
                    Gus.dev
                </a>

                <ul
                    className="flex gap-9 items-center bg-[#0009] p-4 shadow-[0_0_8px_#ff007f,0_0_16px_#ff1493_inset]"
                    style={{ clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)" }}
                >
                    {links.map(link => (
                        <li key={link.name} className="">
                            <a
                                href={link.href}
                                className="text-white text-xl hover:text-[#ff007f] hover:shadow-[0_0_8px_#ff007f] transition cursor-pointer"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>

    );
}