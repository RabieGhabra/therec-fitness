"use client"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { SlashIcon } from "../../components/ui/SlashIcon"
import Image from "next/image"
import { useState } from "react"
declare global {
    interface Window {
        grecaptcha: any;
    }
}
function Banner() {
    return (
        <div className="relative h-72 flex flex-col items-center justify-center text-white text-center px-4">
            <Image
                src="https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1470&q=80"
                alt="Contact Banner"
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10 max-w-3xl px-4">
                <h3 className="text-base uppercase tracking-wide mb-1 font-semibold text-gold">
                    Get in Touch
                </h3>
                <h1 className="text-5xl font-bold mb-3">
                    We’re Here to Help
                </h1>
                <p className="text-lg mx-auto">
                    Have questions, feedback, or need support? Reach out to our team — we’re happy to hear from you.
                </p>
            </div>
        </div>
    );
}
export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [submitting, setSubmitting] = useState(false);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!window.grecaptcha) {
            alert("Please complete the reCAPTCHA.");
            return;
        }
        setSubmitting(true);
        const token = await window.grecaptcha.execute("6LeDRy0rAAAAAJDFs3UsshyqKh_gUCW0YXGTjxPU", { action: "submit" });
        setSubmitting(false);
        alert("Message sent!");
        setFormData({ name: "", email: "", message: "" });
    };
    return (
        <main>
            <Header />
            <Banner />
            <section className="bg-white py-16 section-padding">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <SlashIcon />
                            <p className="uppercase tracking-widest font-semibold text-base text-black">
                                Contact Us
                            </p>
                            <SlashIcon />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6 text-gold">
                            Let’s Connect
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                            Whether you have a question about our services, facilities, or anything else — our team is ready to answer.
                        </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl shadow-md max-w-7xl mx-auto flex gap-8">
                        <div className="flex-1">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4850.315244872185!2d50.1779136!3d26.362210800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e5002db3d265%3A0xdea14a15bae4954c!2sSports%20District!5e1!3m2!1sen!2sae!4v1750760951283!5m2!1sen!2sae"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                            <div className="bg-white border border-gray-300 rounded-md p-4 mt-4 text-gray-800 shadow-sm">
                                <h3 className="text-xl font-semibold mb-2">Gym Location</h3>
                                <p>Sports District, Dhahran- Qishlah-King Saud Road</p>
                                <h3 className="text-xl font-semibold mt-4 mb-2">Opening Hours</h3>
                                <p>Sun - Sat: 24/7</p>
                            </div>
                        </div>
                        <form
                            onSubmit={handleSubmit}
                            autoComplete="off"
                            className="flex-1 flex flex-col gap-6"
                        >
                            <div>
                                <label htmlFor="name" className="block font-semibold mb-1 text-[#333]">
                                    Name <span className="text-rose-600 font-bold">*</span>
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Enter your name"
                                    maxLength={100}
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold transition"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block font-semibold mb-1 text-[#333]">
                                    Email <span className="text-rose-600 font-bold">*</span>
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold transition"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block font-semibold mb-1 text-[#333]">
                                    Message <span className="text-rose-600 font-bold">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    maxLength={1000}
                                    placeholder="Enter your message"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold transition resize-none"
                                />
                            </div>
                            <div className="mb-4">
                                <div style={{ width: 304, height: 78 }}>
                                    <div>
                                        <iframe
                                            title="reCAPTCHA"
                                            width="304"
                                            height="78"
                                            role="presentation"
                                            name="a-sg2yivfitv7x"
                                            frameBorder="0"
                                            scrolling="no"
                                            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                                            src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LeDRy0rAAAAAJDFs3UsshyqKh_gUCW0YXGTjxPU&amp;co=aHR0cHM6Ly93d3cudGhlcmVjc2EuY29tOjQ0Mw..&amp;hl=en&amp;type=image&amp;v=h7qt2xUGz2zqKEhSc8DD8baZ&amp;theme=light&amp;size=normal&amp;badge=bottomright&amp;cb=rv23awa2jo72"
                                        ></iframe>
                                    </div>
                                    <textarea
                                        id="g-recaptcha-response"
                                        name="g-recaptcha-response"
                                        className="g-recaptcha-response"
                                        style={{
                                            width: 250,
                                            height: 40,
                                            border: "1px solid rgb(193, 193, 193)",
                                            margin: "10px 25px",
                                            padding: 0,
                                            resize: "none",
                                            display: "none",
                                        }}
                                    />
                                </div>
                                <iframe style={{ display: "none" }}></iframe>
                            </div>
                            <button
                                type="submit"
                                disabled={submitting}
                                className={`bg-gold text-black font-bold py-3 rounded-md transition ${submitting ? "opacity-50 cursor-not-allowed" : ""
                                    }`}
                            >
                                {submitting ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
