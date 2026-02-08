'use client'
import { Card, CardContent } from "../components/ui/card"
import Image from "next/image"
const coaches = [
    {
        name: "TAISEER ALKADADI",
        specialty: "BODY BUILDING",
        image: "https://ext.same-assets.com/1242065685/1868362276.jpeg"
    },
    {
        name: "EMIL",
        specialty: "BODY BUILDING",
        image: "https://ext.same-assets.com/1242065685/3811792042.jpeg"
    },
    {
        name: "JEROME",
        specialty: "BODY BUILDING / BOXING",
        image: "https://ext.same-assets.com/1242065685/3040547894.jpeg"
    },
    {
        name: "HASSAN ALHULAILY",
        specialty: "BODY BUILDING",
        image: "https://ext.same-assets.com/1242065685/2210139801.jpeg"
    },
    {
        name: "CAPTAIN SAUD",
        specialty: "CROSS FITNESS",
        image: "https://ext.same-assets.com/1242065685/4280851420.jpeg"
    },
    {
        name: "SAIF BAZRON",
        specialty: "CENTER ADMIN",
        image: "https://ext.same-assets.com/1242065685/1439597821.jpeg"
    }
]
export function CoachesSection() {
    return (
        <section className="py-20 bg-background">
            <div className="section-padding">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Image
                            src="https://ext.same-assets.com/1242065685/4022277406.svg"
                            alt="slash"
                            width={20}
                            height={20}
                        />
                        <span className="text-sm font-semibold tracking-wider text-foreground">OUR COACHES</span>
                        <Image
                            src="https://ext.same-assets.com/1242065685/4022277406.svg"
                            alt="slash"
                            width={20}
                            height={20}
                        />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        MEET OUR <span className="text-gold">COACHES</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Our skilled and experienced trainers bring years of expertise to help you improve.
                    </p>
                </div>
                {/* Coaches Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {coaches.map((coach, index) => (
                        <Card key={index} className="bg-card border-border overflow-hidden group hover:scale-105 transition-transform duration-300">
                            <div className="relative">
                                {/* Coach Image */}
                                <div className="relative h-80">
                                    <Image
                                        src={coach.image}
                                        alt={coach.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                </div>
                                {/* Coach Info */}
                                <CardContent className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <h3 className="text-xl font-bold mb-2">{coach.name}</h3>
                                    <div className="w-full h-1 bg-gold mb-2" />
                                    <p className="text-gold text-sm font-medium tracking-wider">
                                        {coach.specialty}
                                    </p>
                                </CardContent>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
