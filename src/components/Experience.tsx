'use client'
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useRef } from "react"
const experienceIcons = [
    { icon: "/icons/Asset 10.png", name: "Six indoor panoramic courts." },
    { icon: "/icons/Asset 14.png", name: "Racket & Equipment rental available" },
    { icon: "/icons/Asset 11.png", name: "Ceiling height: Main 12M, others 8M" },
    { icon: "/icons/Asset 15.png", name: "Washroom & changing rooms available" },
    { icon: "/icons/Asset 13.png", name: "Coaching availability" },
    { icon: "/icons/Asset 16.png", name: "Prayer rooms available" },
    { icon: "/icons/Asset 12.png", name: "Digital scoreboard with touch sensor included on each court" },
    { icon: "/icons/Asset 17.png", name: "Trendy Healthy Café" },
    { icon: "/icons/Asset 19.png", name: "Comfortable side benches on each court" },
    { icon: "/icons/Asset 18.png", name: "Convenient location" },
    { icon: "/icons/Asset 14.png", name: "Multi Sports Facilities" },
    { icon: "/icons/Asset 20.png", name: "Parking availability" }
]
export function ExperienceSection() {
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    const scrollLeft = () => {
        scrollContainerRef.current?.scrollBy({ left: -150, behavior: 'smooth' })
    }
    const scrollRight = () => {
        scrollContainerRef.current?.scrollBy({ left: 150, behavior: 'smooth' })
    }
    return (
        <section className="py-20 bg-white">
            <div className="section-padding">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <span className="text-sm font-semibold tracking-wider text-foreground">OUR FACILITIES</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="text-gold">EXPERIENCE FOCUSED</span>
                    </h2>
                </div>
                <div className="relative mb-16">
                    <div className="flex items-center justify-center">
                        <button onClick={scrollLeft} className="p-2 text-muted-foreground hover:text-gold transition-colors">
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <div
                            ref={scrollContainerRef}
                            className="flex items-center space-x-12 overflow-x-auto px-8 scrollbar-hide"
                            style={{ minWidth: '100%' }}
                        >
                            {experienceIcons.map((experience, index) => (
                                <div key={index} className="flex flex-col items-center space-y-3 w-[140px] shrink-0">
                                    <div className="w-16 h-16 flex items-center justify-center">
                                        <Image
                                            src={experience.icon}
                                            alt={experience.name}
                                            width={48}
                                            height={48}
                                            className="object-contain"
                                            unoptimized
                                        />
                                    </div>
                                    <span className="text-sm font-medium text-center text-black break-words h-[80px] flex items-start">
                                        {experience.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <button onClick={scrollRight} className="p-2 text-muted-foreground hover:text-gold transition-colors">
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    )
}