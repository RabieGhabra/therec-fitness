'use client'
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import Image from "next/image"
import F143450 from "../assets/images/facilities-images/143450.png"
import F143517 from "../assets/images/facilities-images/143517.png"
import F143544 from "../assets/images/facilities-images/143544.png"
import F143611 from "../assets/images/facilities-images/143611.png"
import F143646 from "../assets/images/facilities-images/143646.png"
import F143752 from "../assets/images/facilities-images/143752.png"
const facilityCards = [
    { image: F143450, title: "Indoor Padel" },
    { image: F143517, title: "Outdoor Padel" },
    { image: F143544, title: "Beach Volleyball" },
    { image: F143611, title: "Basketball 3×3" },
    { image: F143646, title: "Pickleball" },
    { image: F143752, title: "Beach Tennis" },
]
export function FacilitiesSection() {
    return (
        <section className="py-20 bg-background">
            <div className="section-padding">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <span className="text-sm font-semibold tracking-wider text-foreground">
                            OUR FACILITIES
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Discover Our <span className="text-gold">Premium Facilities</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Explore top-tier sports and wellness environments built to elevate your lifestyle,
                        with professional-grade courts and vibrant social areas.
                    </p>
                </div>
                {/* Facility Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {facilityCards.map((facility, index) => (
                        <Card
                            key={index}
                            className="bg-card border-border overflow-hidden group hover:scale-105 transition-transform duration-300"
                        >
                            <div className="relative h-64">
                                <Image
                                    src={facility.image}
                                    alt={facility.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
                                <CardContent className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                                    <h3 className="text-xl font-bold mb-2">{facility.title}</h3>
                                </CardContent>
                            </div>
                        </Card>
                    ))}
                </div>
                {/* CTA Button */}
                <div className="text-center">
                    <a href="/facilities">
                        <Button
                            size="lg"
                            className="bg-gold hover:bg-gold/90 text-black font-semibold"
                        >
                            View All Facilities
                        </Button>
                    </a>
                </div>
            </div>
        </section>
    )
}
