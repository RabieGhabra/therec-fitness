'use client'
import { useState } from "react"
import Image from "next/image"
import { Button } from "../components/ui/button"
export function HeroSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const contents = [
        {
            title: <>Home of <span className="text-gold">trending sports</span></>,
            description: "Step into a new level of fitness with expert-led, high-impact training.",
            buttonText: "Start Training",
            image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1470&q=80",
        },
        {
            title: <>Join Our <span className="text-gold">Fitness Community</span></>,
            description: "Connect with like-minded athletes and achieve your goals together.",
            buttonText: "Join Now",
            image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80",
        },
        {
            title: <>Explore <span className="text-gold">Exclusive Facilities</span></>,
            description: "Experience top-notch amenities designed for every fitness enthusiast.",
            buttonText: "Explore More",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1470&q=80",
        },
    ];
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center">
            {/* Background image */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src={contents[activeIndex].image}
                    alt="Hero background"
                    layout="fill"
                    objectFit="cover"
                    priority
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/50" />
            </div>
            {/* Hero content */}
            <div className="relative z-10 text-center text-white section-padding max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                    {contents[activeIndex].title}
                </h1>
                <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-2xl mx-auto">
                    {contents[activeIndex].description}
                </p>
                <Button
                    size="lg"
                    className="bg-gold hover:bg-gold/90 text-black font-semibold text-lg px-8 py-6 h-auto"
                >
                    {contents[activeIndex].buttonText}
                </Button>
            </div>
            {/* Navigation dots */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
                {contents.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActiveIndex(idx)}
                        className={`w-4 h-4 rounded-full transition-colors ${activeIndex === idx ? "bg-gold" : "bg-white/50"
                            }`}
                        aria-label={`Slide ${idx + 1}`}
                    />
                ))}
            </div>
        </section>
    )
}
