'use client'
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Button } from "../../components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table"
import { Check, X } from "lucide-react"
const pricesData = [
    {
        category: "Time-Based Play Services",
        items: [
            { name: "Beach Ball 60 min", price: "160.00 SAR", description: "Enjoy 60 minutes of beach ball fun." },
            { name: "Beach Ball 90 min", price: "240.00 SAR", description: "Play beach ball for 90 minutes." },
            { name: "Beach Ball 120 min", price: "300.00 SAR", description: "Full 2 hours of beach ball." },
            { name: "Pickleball 60 min", price: "220.00 SAR", description: "60 minutes pickleball session." },
            { name: "Pickleball 90 min", price: "300.00 SAR", description: "90 minutes pickleball session." },
            { name: "Pickleball 120 min", price: "380.00 SAR", description: "2 hours pickleball session." },
        ],
    },
    {
        category: "Sports Equipment",
        items: [
            { name: "New Balls", price: "40.00 SAR", description: "High quality new balls for your game." }
        ],
    },
    {
        category: "Beverages",
        items: [
            { name: "Water", price: "1.00 SAR", description: "Fresh bottled water." },
            { name: "Gatorade", price: "10.00 SAR", description: "Electrolyte drink to keep you hydrated." },
            { name: "Red Bull", price: "13.00 SAR", description: "Energy drink to boost your performance." },
            { name: "Iced Tea", price: "5.00 SAR", description: "Refreshing iced tea." },
        ],
    },
];
const CheckIcon = () => (
    <div className="flex justify-center">
        <Check className="w-5 h-5 text-green-500" />
    </div>
);
const XIcon = () => (
    <div className="flex justify-center">
        <X className="w-5 h-5 text-red-500" />
    </div>
);
function Banner() {
    return (
        <div className="relative h-72 flex flex-col items-center justify-center text-center px-4">
            <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1470&q=80"
                alt="Prices Banner"
                className="absolute inset-0 w-full h-full object-cover "
            />
            <div className="relative z-10 max-w-3xl px-4">
                <h1 className="text-5xl font-bold mb-2 text-gold bg-opacity-80 inline-block px-4 py-2 rounded">
                    Prices & Categories
                </h1>
                <p className="max-w-xl text-lg bg-opacity-80 inline-block px-4 py-2 rounded mt-2">
                    Browse our range of services, equipment, and refreshments with clear pricing.
                </p>
            </div>
        </div>
    );
}
export default function Prices() {
    return (
        <main className="bg-white min-h-screen">
            <Header />
            <Banner />
            <section className="py-16 px-4 max-w-5xl mx-auto">
                {pricesData.map(({ category, items }) => (
                    <section key={category} className="mb-12 bg-white rounded-lg shadow-lg overflow-hidden">
                        <h2 className="text-3xl font-semibold text-gold mb-6 border-b-2 border-gold pb-2 px-6 pt-6">
                            {category}
                        </h2>
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="font-bold text-black text-left py-4 px-6 bg-gray-100">Product</TableHead>
                                        <TableHead className="font-bold text-black text-left py-4 px-6 bg-gray-100">Description</TableHead>
                                        <TableHead className="font-bold text-black text-right py-4 px-6 bg-gray-100">Price</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {items.map(({ name, price, description }) => (
                                        <TableRow key={name} className="border-b hover:bg-gray-50">
                                            <TableCell className="font-medium text-black py-4 px-6 bg-gray-100">{name}</TableCell>
                                            <TableCell className="py-4 px-6 text-gray-600">{description}</TableCell>
                                            <TableCell className="font-semibold text-gold text-right py-4 px-6">{price}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </section>
                ))}
            </section>
            <Footer />
        </main>
    );
}
