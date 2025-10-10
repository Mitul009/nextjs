"use client"

import '@/components/Header/header.css'
import Announcement from '@/components/Announcement/Announcement'
import { Menu, Search, ShoppingCart, User } from 'lucide-react'
import { useEffect } from 'react';

const Header = () => {
    useEffect(() => {
        const headerspace = () => {
            const header = document.querySelector("header");
            const announcementWpr = document.querySelector(".announcement-bar");
            const heroSection = document.querySelector(".hero_section");

            if (header && announcementWpr && heroSection) {
                const headerHeight = header.getBoundingClientRect().height;
                const announcementHeight = announcementWpr.getBoundingClientRect().height;
                const totalHeight = headerHeight + announcementHeight;

                heroSection.style.marginTop = `-${totalHeight}px`;
            }
        };

        headerspace();
        window.addEventListener("resize", headerspace);
        window.addEventListener("orientationchange", headerspace);
    }, []);

    const menuItems = ["Shop", "Lookbook", "Sale"];
    const icons = [
        { id: 1, name: "search", Icon: Search, href: "#" },
        { id: 2, name: "account", Icon: User, href: "#" },
        { id: 3, name: "cart", Icon: ShoppingCart, href: "#" },
    ];

    return (
        <>
            <Announcement />
            <header className='header py-[18px] sticky top-0 w-full z-10'>
                <div className="custom_container">
                    <div className="header_wrapper flex items-center justify-between gap-2.5 relative">
                        <div className="header_left">
                            <div className="header_left_inn flex items-center">
                                <div className="header_hamburger">
                                    <a href="#" className='flex items-center justify-center mr-[16px]'>
                                        <Menu size={20} color='#fff' />
                                    </a>
                                </div>
                                <div className="header_nav">
                                    <ul className='flex'>
                                        {menuItems.map((item, index) => (
                                            <li key={index}>
                                                <a href="#" className="text-[var(--background)] uppercase p-2 block text-[14px] tracking-[2.5px]">
                                                    {item}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="header_center absolute left-1/2 transform -translate-x-1/2 opacity-[0]">
                            <a href="#" className='header_logo w-[150px] mx-[auto] block'>
                                <img src="velour-logo-v2.svg" />
                            </a>
                        </div>
                        <div className="header_right">
                            <div className="header_right_inner">
                                <ul className="flex items-center gap-2">
                                    {icons.map(({ id, name, Icon, href }) => (
                                        <li key={id} className={name}>
                                            <a
                                                href={href}
                                                className="flex items-center justify-center h-8 w-8 p-1.5"
                                            >
                                                <Icon color="#ffffff" size="20px" />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
