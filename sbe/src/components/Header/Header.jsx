import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AnimatedNavButton } from '../../animations/NavigationAnimations';

export default function Header() {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const controlNavbar = () => {
            const currentScrollY = window.scrollY;
            const scrollThreshold = window.innerHeight * 0.3; // 30% of screen height

            // Check if scrolled past threshold for background opacity
            setIsScrolled(currentScrollY > 50);

            // Hide navbar when scrolling down past threshold, show when scrolling up
            if (currentScrollY > scrollThreshold) {
                if (currentScrollY > lastScrollY && currentScrollY > scrollThreshold + 100) {
                    // Scrolling down and past threshold
                    setIsVisible(false);
                } else if (currentScrollY < lastScrollY) {
                    // Scrolling up
                    setIsVisible(true);
                }
            } else {
                // Always visible when above threshold
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', controlNavbar);
        return () => window.removeEventListener('scroll', controlNavbar);
    }, [lastScrollY]);

    return (
        <header
            className={`shadow sticky z-50 top-0 backdrop-blur border-b border-gray-700 transition-all duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'
                } ${isScrolled ? 'bg-black/80' : 'bg-black/60'
                }`}
        >
            <nav className="border-gray-700 px-4 lg:px-6 py-1.5 mb-0">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>

                    {/* Contact Us Button */}
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none transition"
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-6 lg:mt-0">
                            {[
                                { path: '/', label: 'Home' },
                                { path: '/about', label: 'About' },
                                { path: '/events', label: 'Events' },
                                { path: '/teams', label: 'Our Team' },
                                { path: '/gallery', label: 'Gallery' },

                            ].map(({ path, label }) => (
                                <li key={path}>
                                    <NavLink
                                        to={path}
                                        className="block"
                                    >
                                        {({ isActive }) => (
                                            <AnimatedNavButton
                                                path={path}
                                                label={label}
                                                isActive={isActive}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    if (!isActive) {
                                                        navigate(path);
                                                    }
                                                }}
                                            />
                                        )}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
