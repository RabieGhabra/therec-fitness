'use client'
import Image from "next/image"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Phone, MapPin } from "lucide-react"
import Logo from "../assets/icons/new-logo.png"
// Payment Icons
import VisaIcon from "../assets/icons/payment-icons/visa.png"
import MadaIcon from "../assets/icons/payment-icons/Mada.png"
import MasterCardIcon from "../assets/icons/payment-icons/MasterCard.png"
import ApplePayIcon from "../assets/icons/payment-icons/applepay.png"
import TamaraIcon from "../assets/icons/payment-icons/tamara-logo.png"
import TabbyIcon from "../assets/icons/payment-icons/tabby-logo.png"
export function Footer() {
    const payments = [
        { icon: VisaIcon, width: 36, height: 8, alt: "Visa" },
        { icon: MasterCardIcon, width: 36, height: 8, alt: "MasterCard" },
        { icon: MadaIcon, width: 38, height: 8, alt: "Mada" },
        { icon: ApplePayIcon, width: 40, height: 8, alt: "Apple Pay" },
        { icon: TamaraIcon, width: 60, height: 15, alt: "Tamara" },
        { icon: TabbyIcon, width: 48, height: 15, alt: "Tabby" },
    ]
    return (
        <footer className="bg-black text-white">
            <div className="section-padding py-16">
                <div className="grid lg:grid-cols-4 gap-8">
                    {/* Logo & Description */}
                    <div>
                        <Image src={Logo} alt="Logo" width={200} height={30} className="mb-4" />
                        <p className="text-gray-400 mb-6">
                            Push your limits. Embrace a healthier lifestyle. Unlock your full
                            potential with our premium facilities and expert trainers.
                        </p>
                    </div>
                    {/* Useful Links */}
                    <div>
                        <h3 className="text-gold font-bold text-lg mb-4">Useful Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="/facilities" className="text-gray-400 hover:text-gold transition">
                                    Our Facilities
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="text-gray-400 hover:text-gold transition">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-gold font-bold text-lg mb-4">Contact Info</h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-gold" />
                                <a
                                    href="tel:+966555623832"
                                    className="text-gray-400 hover:text-gold transition"
                                >
                                    +966 55 562 3832
                                </a>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-gold mt-1" />
                                <span className="text-gray-400">
                                    Dhahran - Qishlah - King Saud Road
                                    <br />
                                    26.36214728166209, 50.17794137719182
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* Newsletter */}
                    <div>
                        <h3 className="text-gold font-bold text-lg mb-4">Newsletter</h3>
                        <p className="text-gray-400 mb-4">Subscribe for the latest news.</p>
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
                        {/* Payment Icons */}
                        <div className="flex items-center gap-2 mt-8">
                            {payments.map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-center justify-center"
                                >
                                    <Image
                                        src={item.icon}
                                        alt={item.alt}
                                        width={item.width}
                                        height={item.height}
                                        className="object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Bottom Footer */}
                <div className="border-t border-gray-800 mt-12 pt-8 flex justify-center">
                    <p className="text-gray-400 text-sm">
                        © 2025 Sports District. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
