import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import Image from "next/image";

const facilityCards = [
    {
        image: "/facilities-images/143450.png",
        title: "Indoor Padel",
    },
    {
        image: "/facilities-images/143517.png",
        title: "Outdoor Padel",
    },
    {
        image: "/facilities-images/143544.png",
        title: "Beach Volleyball",
    },
    {
        image: "/facilities-images/143611.png",
        title: "Basketball 3×3",
    },
    {
        image: "/facilities-images/143646.png",
        title: "Pickleball",
    },
    {
        image: "/facilities-images/143752.png",
        title: "Beach Tennis",
    },
    {
        image: "/facilities-images/145130 (1).png",
        title: "Group Classes",
    },
    {
        image: "/facilities-images/145130 (2).png",
        title: "Wellness Hall",
    },
    {
        image: "/facilities-images/145130 (3).png",
        title: "Stretching and Spa Area",
    },
    {
        image: "/facilities-images/145130 (4).png",
    },
    {
        image: "/facilities-images/145130 (5).png",
    },
    {
        image: "/facilities-images/145130 (6).png",
    },
    {
        image: "/facilities-images/150102 (1).png",
        title: "Community Hall",
    },
    {
        image: "/facilities-images/150102 (2).png",
        title: "Juice Bar",
    },
    {
        image: "/facilities-images/150102 (3).png",
        title: "Sports Store",
    },
    {
        image: "/facilities-images/150102 (4).png",
        title: "Prayer Room",
    },
    {
        image: "/facilities-images/150102 (5).png",
        title: "Workspaces",
    },
    {
        image: "/facilities-images/150102 (6).png",
        title: "Healthy Restaurant and Cafe",
    },
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
                            <Image
                                src="https://ext.same-assets.com/1242065685/4022277406.svg"
                                alt="slash"
                                width={20}
                                height={20}
                            />
                            <p className="uppercase tracking-widest font-semibold text-base text-black">
                                Gallery Highlights
                            </p>
                            <Image
                                src="https://ext.same-assets.com/1242065685/4022277406.svg"
                                alt="slash"
                                width={20}
                                height={20}
                            />
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
