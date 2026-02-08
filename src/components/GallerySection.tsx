'use client'
import Image from "next/image"
import { SlashIcon } from "../components/ui/SlashIcon";
import { useState } from "react"
const galleryImages = [
    "/130547.png",
    "/130415.png",
    "/130349.png",
]
export function GallerySection() {
    const [currentIndex, setCurrentIndex] = useState(0)
    return (
        <section className="py-20 bg-gray-50">
            <div className="px-4 md:px-12 lg:px-24">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <SlashIcon />
                        <span className="text-sm font-semibold tracking-wider text-black">PHOTO COLLECTION</span>
                        <SlashIcon />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
                        DISCOVER OUR <span className="text-gold">SPACES</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Take a peek inside our inspiring environment, energetic sessions, and premium-grade amenities.
                        Experience the spirit before you arrive!
                    </p>
                </div>
                {/* Gallery Carousel */}
                <div className="relative">
                    {/* Main gallery image */}
                    <div className="relative h-96 md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
                        <Image
                            src={galleryImages[currentIndex]}
                            alt={`Gallery Image ${currentIndex + 1}`}
                            fill
                            className="object-cover transition-all duration-500"
                        />
                        <div className="absolute inset-0 bg-black/20" />
                    </div>
                    {/* Dot indicators */}
                    <div className="flex justify-center mt-6 space-x-2">
                        {galleryImages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${index === currentIndex ? 'bg-gold' : 'bg-gray-400'
                                    }`}
                                aria-label={`Go to image ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
