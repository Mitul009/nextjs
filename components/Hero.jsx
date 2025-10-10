"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
    const heroRef = useRef(null);
    const logoRef = useRef(null);
    const [scale, setScale] = useState(5);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const newScale = Math.max(5 - scrollY / 100, 1);
            setScale(newScale);
        };
        const setLogoHeight = () => {
            if (!heroRef.current || !logoRef.current) return;
            const heroHeight = heroRef.current.offsetHeight;
            logoRef.current.style.height = `${heroHeight}px`;
        };
        handleScroll();
        setLogoHeight();
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", setLogoHeight);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", setLogoHeight);
        };
    }, []);

    return (
        <div className="hero_section flex items-center justify-center relative" ref={heroRef}>
            <div className="logo_banner absolute flex items-center justify-center w-[150px] z-[1] top-0" ref={logoRef}>
                <div className="logo_banner_inner w-full flex items-center justify-center">
                    <img className="w-[150px] h-auto object-contain"
                        src="/velour-logo-v2-white.svg"
                        style={{
                            transform: `scale(${scale})`,
                            transition: "transform 0.1s linear",
                        }}
                    />
                </div>
            </div>
            <div className="hero_bottom absolute bottom-[16px] w-[60%] text-center transition-opacity duration-1000 ease-in-out z-10 left-1/2 transform -translate-x-1/2">
                <a href="#" className="text-[#fff] uppercase underline underline-offset-[6px] mt-1 mb-4 h-[30px] inline-block text-[14px]">Discover the collection</a>
                <span className="block w-[28px] h-[28px] mx-auto">
                    <ChevronDown color="#ffffff" />
                </span>
            </div>
            <div className="hero_wrapper h-[100dvh] w-full">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                    <source src="/hero-video.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    );
};

export default Hero;
