"use client";
import { X } from "lucide-react";

export default function Announcement() {
const messages = [
    "Free standard shipping on all orders!",
];
    return (
        <div className="announcement-bar py-2.5 bg-[var(--body-text)] relative z-10">
            <div className="announcement_wpr flex justify-center gap-[50px] overflow-hidden">
                <div className="announcement_marquee flex whitespace-nowrap gap-[50px]">
                    {messages.map((msg, index) => (
                        <p key={index} className="text-[var(--background)]  ">
                            {msg}
                        </p>
                    ))}
                </div>
                <div className="announcement_close absolute right-2.5 z-[1]">
                    <a href="#">
                        <X size={20} color="#fff"/>
                    </a>
                </div>
            </div>
        </div>
    )
}
