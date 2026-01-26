'use client'
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"
import Logo from '../assets/images/new-logo.png';
export function Footer() {
    return (
        <footer className="bg-black text-white">
            <div className="section-padding py-16">
                <div className="grid lg:grid-cols-4 gap-8">
                    {/* Logo and Description */}
                    <div className="lg:col-span-1">
                        <Image className="mb-4" src={Logo} width={200} height={30} alt="Logo" />

                        <p className="text-gray-400 mb-6">
                            Push your limits. Embrace a healthier lifestyle. Unlock your full potential with our premium facilities and expert trainers.
                        </p>
                    </div>
                    {/* Useful Links */}
                    <div>
                        <h3 className="text-gold font-bold text-lg mb-4">Useful Links</h3>
                        <ul className="space-y-3">
                            <li><a href="/facilities" className="text-gray-400 hover:text-gold transition-colors">Our Facilities</a></li>
                            <li><a href="/contact" className="text-gray-400 hover:text-gold transition-colors">Contact Us</a></li>
                        </ul>
                    </div>
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-gold font-bold text-lg mb-4">Contact Info</h3>
                        <div className="space-y-4">

                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-gold" />
                                <a href="tel:+966555623832" className="text-gray-400 hover:text-gold transition-colors">
                                    +966 55 562 3832
                                </a>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-gold mt-1" />
                                <span className="text-gray-400">
                                    Dhahran- Qishlah-King Saud Road<br />
                                    26.36214728166209, 50.17794137719182
                                </span>
                            </div>
                        </div>
                        {/* Social Links */}
                        <div className="flex items-center gap-4 mt-6">
                            <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.098.119.112.22.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.986C24.007 5.367 18.641.001 12.017.001z" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 448 512">
                                    <path d="M448,209.3v-59.6c-30.4,0-60.5-9.7-84.5-27.4c-23.5-17.2-38.2-40.9-44.5-68.3c-2.6-11.2-3.7-22.7-3.7-34.1h-66.2v297.4
                                             c0,27.7-22.6,50.3-50.3,50.3s-50.3-22.6-50.3-50.3s22.6-50.3,50.3-50.3c5.6,0,11.1,0.9,16.1,2.6V218.1c-5.3-0.7-10.7-1-16.1-1
                                              c-63.4,0-114.9,51.5-114.9,114.9s51.5,114.9,114.9,114.9c63.4,0,114.9-51.5,114.9-114.9V154.8c25.9,18.4,57.3,29,90.2,29.4V209.3z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    {/* Newsletter */}
                    <div>
                        <h3 className="text-gold font-bold text-lg mb-4">Newsletter</h3>
                        <p className="text-gray-400 mb-4">
                            Subscribe for the latest news.
                        </p>
                        <div className="flex gap-2 mb-6">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                            />
                            <Button className="bg-gold hover:bg-gold/90 text-black font-semibold">
                                Submit
                            </Button>
                        </div>
                        {/* Payment Methods */}
                        <div className="flex items-center gap-2 mt-8">
                            <Image src="https://ext.same-assets.com/1242065685/2528749851.svg" alt="Visa" width={40} height={25} />
                            <Image src="https://ext.same-assets.com/1242065685/1713617751.svg" alt="Mada" width={40} height={25} />
                            <Image src="https://ext.same-assets.com/1242065685/3857516182.svg" alt="Mastercard" width={40} height={25} />
                            <Image src="https://ext.same-assets.com/1242065685/2137919540.svg" alt="Apple Pay" width={40} height={25} />
                            <Image src="https://ext.same-assets.com/1242065685/3324505485.svg" alt="Tamara" width={40} height={25} />
                            <Image src="https://ext.same-assets.com/1242065685/2334899946.svg" alt="Tabby" width={40} height={25} />
                        </div>
                    </div>
                </div>
                {/* Bottom Footer */}
                <div className="border-t border-gray-800 mt-12 pt-8 flex justify-center items-center">
                    <p className="text-gray-400 text-sm">
                        © 2025 Sports District. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
