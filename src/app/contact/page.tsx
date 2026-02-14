"use client"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { SlashIcon } from "../../components/ui/SlashIcon"
import Image from "next/image"
import { useState } from "react"
import Script from "next/script"
declare global {
    interface Window {
        grecaptcha: any
    }
}
function Banner() {
    return (
        <div className="relative h-[420px] sm:h-[360px] flex flex-col items-center justify-center text-white text-center px-4">
            <Image
                src="https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1470&q=80"
                alt="Contact Banner"
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10 max-w-3xl">
                <h3 className="text-sm sm:text-base uppercase tracking-wide mb-1 font-semibold text-gold">
                    Get in Touch
                </h3>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
                    We’re Here to Help
                </h1>
                <p className="text-base sm:text-lg mx-auto">
                    Have questions, feedback, or need support? Reach out to our team — we’re happy to hear from you.
                </p>
            </div>
        </div>
    )
}
export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })
    const [submitting, setSubmitting] = useState(false)
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!window.grecaptcha) {
            alert("Please complete the reCAPTCHA.")
            return
        }
        setSubmitting(true)
        try {
            const token = await window.grecaptcha.execute(
                "6LeDRy0rAAAAAJDFs3UsshyqKh_gUCW0YXGTjxPU",
                { action: "submit" }
            )
            console.log({ ...formData, token })
            alert("Message sent!")
            setFormData({ name: "", email: "", message: "" })
        } catch (err) {
            console.error(err)
            alert("Something went wrong, please try again.")
        } finally {
            setSubmitting(false)
        }
    }
    return (
        <main>
            <Header />
            <Banner />
            <section className="bg-white py-12 sm:py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 sm:mb-16">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <SlashIcon />
                            <p className="uppercase tracking-widest font-semibold text-sm sm:text-base text-black">
                                Contact Us
                            </p>
                            <SlashIcon />
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-6 text-gold">
                            Let’s Connect
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
                            Whether you have a question about our services, facilities, or anything else — our team is ready to answer.
                        </p>
                    </div>
                    {/* container */}
                    <div className="bg-gray-50 p-4 sm:p-6 rounded-xl shadow-md flex flex-col lg:flex-row gap-8">
                        {/* map */}
                        <div className="flex-1 min-w-0">
                            <div className="w-full h-60 sm:h-72 md:h-96 rounded-lg overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4850.315244872185!2d50.1779136!3d26.362210800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e5002db3d265%3A0xdea14a15bae4954c!2sSports%20District!5e1!3m2!1sen!2sae!4v1750760951283!5m2!1sen!2sae"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                ></iframe>
                            </div>
                            <div className="bg-white border border-gray-300 rounded-md p-4 mt-4 text-gray-800 shadow-sm">
                                <h3 className="text-lg sm:text-xl font-semibold mb-2">Gym Location</h3>
                                <p className="text-sm sm:text-base">
                                    Sports District, Dhahran- Qishlah-King Saud Road
                                </p>

                                <h3 className="text-lg sm:text-xl font-semibold mt-4 mb-2">
                                    Opening Hours
                                </h3>
                                <p className="text-sm sm:text-base">Sun - Sat: 24/7</p>
                            </div>
                        </div>
                        {/* form */}
                        <form
                            onSubmit={handleSubmit}
                            autoComplete="off"
                            className="flex-1 flex flex-col gap-5 sm:gap-6"
                        >
                            <div>
                                <label className="block font-semibold mb-1 text-[#333]">
                                    Name <span className="text-rose-600 font-bold">*</span>
                                </label>
                                <input
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
                                />
                            </div>
                            <div>
                                <label className="block font-semibold mb-1 text-[#333]">
                                    Email <span className="text-rose-600 font-bold">*</span>
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
                                />
                            </div>
                            <div>
                                <label className="block font-semibold mb-1 text-[#333]">
                                    Message <span className="text-rose-600 font-bold">*</span>
                                </label>
                                <textarea
                                    name="message"
                                    rows={4}
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Enter your message"
                                    className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold resize-none"
                                />
                            </div>
                            {/* captcha */}
                            <div className="scale-[0.82] sm:scale-100 origin-left">
                                <div className="w-[304px] h-[78px]">
                                    <iframe
                                        title="reCAPTCHA"
                                        width="304"
                                        height="78"
                                        frameBorder="0"
                                        scrolling="no"
                                        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation"
                                        src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LeDRy0rAAAAAJDFs3UsshyqKh_gUCW0YXGTjxPU&co=aHR0cHM6Ly93d3cudGhlcmVjc2EuY29tOjQ0Mw..&hl=en&type=image&v=h7qt2xUGz2zqKEhSc8DD8baZ&theme=light&size=normal"
                                    ></iframe>
                                </div>
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
    )
}
