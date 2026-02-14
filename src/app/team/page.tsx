import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import Image from "next/image"
function Banner() {
    return (
        <div className="relative h-72 flex flex-col items-center justify-center text-white text-center px-4">
            <Image
                src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1470&q=80"
                alt="Team Banner"
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10 max-w-3xl px-4">
                <h3 className="text-base uppercase tracking-wide mb-1 font-semibold text-gold">
                    Meet Our Team
                </h3>
                <h1 className="text-5xl font-bold mb-3">
                    Dedicated Coaches & Experts
                </h1>
                <p className="text-lg mx-auto max-w-xl">
                    Our passionate team of trainers and wellness professionals is committed to helping you achieve your fitness goals.
                </p>
            </div>
        </div>
    );
}
const DEFAULT_IMAGE = "/default-avatar.png";
const teamsData = [
    { name: "Ameen Boushnak", role: "Co-founder, Operations and Projects Engineer at Aramco", image: "" },
    { name: "Abdullah Boushnak", role: "Co-founder and CEO of Al Saqeefa Entertainment", image: "" },
    { name: "Ahmed Aljar", role: "Influencer and Entrepreneur, Founder of Veto Marketing Agency", image: "" },
    { name: "Majed Tahan", role: "Founder and CEO of IACO, Founder and CEO of AYM Commerce", image: "" },
    { name: "Mohammed Hanawi", role: "Vice President of IACO, Vice President of AYM Commerce", image: "" },
    { name: "Abeer Alzubaydi", role: "Founder and Executive Director of Al Saqeefa Entertainment", image: "" },
];
export default function Teams() {
    return (
        <main>
            <Header />
            <Banner />
            <section className="bg-white py-16 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gold">
                            Our Expert Team
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                            From experienced trainers to wellness coaches, our team is here to guide and support your fitness journey.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-10">
                        {teamsData.slice(0, 4).map(({ name, role, image }) => (
                            <div key={name} className="bg-gray-50 rounded-xl shadow-md p-6 flex flex-col items-center text-center h-full">
                                <Image
                                    src={image || DEFAULT_IMAGE}
                                    alt={name}
                                    width={120}
                                    height={120}
                                    className="rounded-full object-cover mb-4"
                                />
                                <div>
                                    <h3 className="text-lg font-semibold text-gold mb-1">{name}</h3>
                                    <p className="text-gray-900 font-medium">{role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                        {teamsData.slice(4).map(({ name, role, image }) => (
                            <div key={name} className="bg-gray-50 rounded-xl shadow-md p-6 flex flex-col items-center text-center h-full">
                                <Image
                                    src={image || DEFAULT_IMAGE}
                                    alt={name}
                                    width={120}
                                    height={120}
                                    className="rounded-full object-cover mb-4"
                                />
                                <div>
                                    <h3 className="text-lg font-semibold text-gold mb-1">{name}</h3>
                                    <p className="text-gray-900 font-medium">{role}</p>
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
