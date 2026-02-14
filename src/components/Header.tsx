'use client'
import { useState, useEffect } from "react"
import { Button } from "../components/ui/button"
import { Phone, Globe, MapPin, Menu, X } from "lucide-react"
import Image from "next/image"
import Logo from '../assets/icons/new-logo.png';
import Link from "next/link"
import { usePathname } from "next/navigation";
export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();
    const [activeLink, setActiveLink] = useState(() => {
        if (pathname === '/') return 'Home';
        const name = pathname.slice(1);
        return name.charAt(0).toUpperCase() + name.slice(1);
    });
    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    useEffect(() => {
        if (pathname === '/') {
            setActiveLink('Home');
        } else {
            const name = pathname.slice(1);
            setActiveLink(name.charAt(0).toUpperCase() + name.slice(1));
        }
        setMobileOpen(false);
    }, [pathname]);
    const TOP_BAR_HEIGHT = 70;
    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Prices', path: '/prices' },
        { name: 'Facilities', path: '/facilities' },
        { name: 'Team', path: '/team' },
        { name: 'Contact', path: '/contact' },
    ];
    return (
        <header className="w-full">
            {/* Top bar */}
            <div
                className="fixed top-0 left-0 w-full bg-black text-white text-xs sm:text-sm py-2 z-50"
                style={{ height: TOP_BAR_HEIGHT }}
            >
                <div className="section-padding flex items-start sm:items-center justify-between h-full">
                    {/* Left side */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                        <div className="flex items-center gap-1">
                            <Phone className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" />
                            <span className="text-xs sm:text-sm">+966 55 562 3832</span>
                        </div>
                        <div className="flex items-center gap-2 sm:gap-4">
                            <div className="flex items-center gap-1">
                                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" />
                                <a
                                    href="https://www.google.com/maps?q=26.36214728166209,50.17794137719182"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-gold transition-colors text-xs sm:text-sm"
                                >
                                    26.362147, 50.177941
                                </a>
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="text-xs sm:text-sm">Sun-Sat:24/7</span>
                            </div>
                        </div>
                    </div>
                    {/* Right side social */}
                    <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                        <a href="#" className="hover:text-gold transition-colors">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.098.119.112.22.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.986C24.007 5.367 18.641.001 12.017.001z" />
                            </svg>
                        </a>
                        <a
                            href="https://www.instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gold transition-colors"
                        >
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.78 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 448 512">
                                <path d="M448,209.3v-59.6c-30.4,0-60.5-9.7-84.5-27.4c-23.5-17.2-38.2-40.9-44.5-68.3c-2.6-11.2-3.7-22.7-3.7-34.1h-66.2v297.4
                  c0,27.7-22.6,50.3-50.3,50.3s-50.3-22.6-50.3-50.3s22.6-50.3,50.3-50.3c5.6,0,11.1,0.9,16.1,2.6V218.1c-5.3-0.7-10.7-1-16.1-1
                  c-63.4,0-114.9,51.5-114.9,114.9s51.5,114.9,114.9,114.9c63.4,0,114.9-51.5,114.9-114.9V154.8c25.9,18.4,57.3,29,90.2,29.4V209.3z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            {/* Spacer for top bar */}
            <div className="h-[60px] sm:h-[70px]" />
            {/* Main nav */}
            <nav
                className={`w-full z-40 transition-colors duration-300 ${isScrolled ? 'fixed top-[70px] bg-tap shadow-md' : 'relative bg-background border-b border-border'
                    }`}
                style={{ top: isScrolled ? TOP_BAR_HEIGHT : undefined }}
            >
                <div className="section-padding flex items-center justify-between py-3 md:py-4">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Image src={Logo} width={160} height={30} alt="Logo" className="h-auto w-auto max-w-[120px] sm:max-w-[160px]" />
                    </div>
                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map(({ name, path }, idx) => {
                            const isActive = activeLink === name;
                            return (
                                <Link
                                    key={idx}
                                    href={path}
                                    onClick={() => setActiveLink(name)}
                                    className={`font-medium transition-colors 
                    ${isScrolled
                                            ? (isActive
                                                ? 'text-white underline underline-offset-4'
                                                : 'text-white')
                                            : (isActive
                                                ? 'text-gold underline underline-offset-4'
                                                : 'text-foreground hover:text-gold')
                                        }`}
                                >
                                    {name}
                                </Link>
                            );
                        })}
                    </div>
                    {/* Right side (desktop) */}
                    <div className="hidden md:flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <Globe className={`w-4 h-4 ${isScrolled ? 'text-white' : ''}`} />
                            <span className={`text-sm ${isScrolled ? 'text-white' : ''}`}>English</span>
                        </div>
                        <Button
                            className={`font-semibold transition-colors duration-300 ${isScrolled
                                ? 'bg-black text-white hover:bg-gray-900'
                                : 'bg-tap text-black hover:bg-[var(--secondary)]'
                                }`}
                            style={{ pointerEvents: 'auto' }}
                        >
                            Join Online
                        </Button>
                    </div>
                    {/* Mobile actions */}
                    <div className="flex md:hidden items-center gap-3">
                        <Button
                            size="sm"
                            className={`font-semibold text-xs px-3 py-1 transition-colors duration-300 ${isScrolled
                                ? 'bg-black text-white hover:bg-gray-900'
                                : 'bg-tap text-black hover:bg-[var(--secondary)]'
                                }`}
                        >
                            Join Online
                        </Button>
                        <button
                            type="button"
                            aria-label="Toggle menu"
                            onClick={() => setMobileOpen(prev => !prev)}
                            className="p-2 rounded-md border border-border"
                        >
                            {mobileOpen ? (
                                <X className={`w-5 h-5 ${isScrolled ? 'text-white' : 'text-foreground'}`} />
                            ) : (
                                <Menu className={`w-5 h-5 ${isScrolled ? 'text-white' : 'text-foreground'}`} />
                            )}
                        </button>
                    </div>
                </div>
                {/* Mobile menu */}
                {mobileOpen && (
                    <div className={`md:hidden border-t border-border ${isScrolled ? 'bg-tap' : 'bg-background'}`}>
                        <div className="section-padding flex flex-col py-3 space-y-2">
                            {navItems.map(({ name, path }, idx) => {
                                const isActive = activeLink === name;
                                return (
                                    <Link
                                        key={idx}
                                        href={path}
                                        onClick={() => {
                                            setActiveLink(name);
                                            setMobileOpen(false);
                                        }}
                                        className={`py-2 text-sm font-medium transition-colors ${isScrolled
                                            ? (isActive ? 'text-white underline underline-offset-4' : 'text-white')
                                            : (isActive ? 'text-gold underline underline-offset-4' : 'text-foreground hover:text-gold')
                                            }`}
                                    >
                                        {name}
                                    </Link>
                                );
                            })}
                            <div className="flex items-center justify-between pt-2 border-t border-border mt-2">
                                <div className="flex items-center gap-2">
                                    <Globe className={`w-4 h-4 ${isScrolled ? 'text-white' : ''}`} />
                                    <span className={`text-sm ${isScrolled ? 'text-white' : ''}`}>English</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}