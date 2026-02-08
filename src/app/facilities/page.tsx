'use client'
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import Image from "next/image"
import F143450 from "../../assets/images/facilities-images/143450.png"
import F143517 from "../../assets/images/facilities-images/143517.png"
import F143544 from "../../assets/images/facilities-images/143544.png"
import F143611 from "../../assets/images/facilities-images/143611.png"
import F143646 from "../../assets/images/facilities-images/143646.png"
import F143752 from "../../assets/images/facilities-images/143752.png"
import F145130_1 from "../../assets/images/facilities-images/145130 (1).png"
import F145130_2 from "../../assets/images/facilities-images/145130 (2).png"
import F145130_3 from "../../assets/images/facilities-images/145130 (3).png"
import F145130_4 from "../../assets/images/facilities-images/145130 (4).png"
import F145130_5 from "../../assets/images/facilities-images/145130 (5).png"
import F145130_6 from "../../assets/images/facilities-images/145130 (6).png"
import F150102_1 from "../../assets/images/facilities-images/150102 (1).png"
import F150102_2 from "../../assets/images/facilities-images/150102 (2).png"
import F150102_3 from "../../assets/images/facilities-images/150102 (3).png"
import F150102_4 from "../../assets/images/facilities-images/150102 (4).png"
import F150102_5 from "../../assets/images/facilities-images/150102 (5).png"
import F150102_6 from "../../assets/images/facilities-images/150102 (6).png"
import { SlashIcon } from "../../components/ui/SlashIcon"
const facilityCards = [
    { image: F143450, title: "Indoor Padel" },
    { image: F143517, title: "Outdoor Padel" },
    { image: F143544, title: "Beach Volleyball" },
    { image: F143611, title: "Basketball 3×3" },
    { image: F143646, title: "Pickleball" },
    { image: F143752, title: "Beach Tennis" },
    { image: F145130_1, title: "Group Classes" },
    { image: F145130_2, title: "Wellness Hall" },
    { image: F145130_3, title: "Stretching and Spa Area" },
    { image: F145130_4 },
    { image: F145130_5 },
    { image: F145130_6 },
    { image: F150102_1, title: "Community Hall" },
    { image: F150102_2, title: "Juice Bar" },
    { image: F150102_3, title: "Sports Store" },
    { image: F150102_4, title: "Prayer Room" },
    { image: F150102_5, title: "Workspaces" },
    { image: F150102_6, title: "Healthy Restaurant and Cafe" },
];
function Banner() {
    return (
        <div className="relative h-72 flex flex-col items-center justify-center text-white text-center px-4">
            <Image
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80"
                alt="Banner Image"
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10 max-w-3xl px-4">
                <h3 className="text-base uppercase tracking-wide mb-1 font-semibold text-gold">
                    Explore Our Facilities
                </h3>
                <h1 className="text-5xl font-bold mb-3">
                    Premium Sports & Wellness Spaces
                </h1>
                <p className="text-lg mx-auto">
                    Discover state-of-the-art courts, vibrant social areas, and specialized
                    spaces designed to elevate your active lifestyle.
                </p>
            </div>
        </div>
    );
}
export default function Home() {
    return (
        <main>
            <Header />
            <Banner />
            <section className="bg-white py-16 section-padding">
                <div className="max-w-7xl mx-auto">
                    {/* Section Heading */}
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <SlashIcon />
                            <p className="uppercase tracking-widest font-semibold text-base text-black">
                                Gallery Highlights
                            </p>
                            <SlashIcon />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6 text-gold">
                            Discover Our Premier Facilities
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                            Step into a world of exceptional sports and wellness environments —
                            crafted for performance, recreation, and community.
                        </p>
                    </div>
                    {/* Facilities Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {facilityCards.map((facility, index) => (
                            <div
                                key={index}
                                className="bg-card border border-border overflow-hidden group hover:scale-105 transition-transform duration-300 rounded-lg shadow"
                            >
                                <div className="relative h-64">
                                    <Image
                                        src={facility.image}
                                        alt={facility.title || `Facility ${index + 1}`}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
                                    <div className="absolute inset-0 flex flex-col justify-end p-6 text-card-foreground min-h-[64px]">
                                        <h3 className="text-2xl font-semibold mb-2">{facility.title}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
