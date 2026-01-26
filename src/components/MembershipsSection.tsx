'use client'
import { Button } from "../components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table"
import { Check, X } from "lucide-react"
import Image from "next/image"
const membershipData = [
    {
        feature: "Crossfitness",
        icon: "🏋️",
        courts: false,
        gym: true,
        crossfitness: true,
        gymCourts: true,
        allInclusive: true
    },
    {
        feature: "Bodybuilding",
        icon: "💪",
        courts: false,
        gym: true,
        crossfitness: true,
        gymCourts: true,
        allInclusive: true
    },
    {
        feature: "Boxing",
        icon: "🥊",
        courts: false,
        gym: true,
        crossfitness: true,
        gymCourts: true,
        allInclusive: true
    },
    {
        feature: "Weightlifting",
        icon: "🏋️‍♀️",
        courts: false,
        gym: true,
        crossfitness: true,
        gymCourts: true,
        allInclusive: true
    },
    {
        feature: "Cardio",
        icon: "❤️",
        courts: false,
        gym: true,
        crossfitness: true,
        gymCourts: true,
        allInclusive: true
    },
    {
        feature: "Special Classes*",
        icon: "👥",
        courts: false,
        gym: true,
        crossfitness: true,
        gymCourts: true,
        allInclusive: true
    },
    {
        feature: "Crossfitness Classes*",
        icon: "🔥",
        courts: false,
        gym: false,
        crossfitness: true,
        gymCourts: false,
        allInclusive: true
    },
    {
        feature: "Basketball",
        icon: "🏀",
        courts: true,
        gym: false,
        crossfitness: false,
        gymCourts: true,
        allInclusive: true
    },
    {
        feature: "Football",
        icon: "⚽",
        courts: true,
        gym: false,
        crossfitness: false,
        gymCourts: true,
        allInclusive: true
    },
    {
        feature: "Padel",
        icon: "🎾",
        courts: true,
        gym: false,
        crossfitness: false,
        gymCourts: true,
        allInclusive: true
    },
    {
        feature: "Volleyball",
        icon: "🏐",
        courts: true,
        gym: false,
        crossfitness: false,
        gymCourts: true,
        allInclusive: true
    }
]
const CheckIcon = () => (
    <div className="flex justify-center">
        <Check className="w-5 h-5 text-green-500" />
    </div>
)
const XIcon = () => (
    <div className="flex justify-center">
        <X className="w-5 h-5 text-red-500" />
    </div>
)
export function MembershipsSection() {
    return (
        <section className="py-20 bg-gray-50">
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
                        <span className="text-sm font-semibold tracking-wider text-black">OUR MEMBERSHIPS</span>
                        <Image
                            src="https://ext.same-assets.com/1242065685/4022277406.svg"
                            alt="slash"
                            width={20}
                            height={20}
                        />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
                        CHECK OUT OUR <span className="text-gold">MEMBERSHIPS TABLE</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Compare features and find the membership that fits your goals best.
                    </p>
                </div>
                {/* Membership Table */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="font-bold text-black text-left py-4 px-6 bg-gray-100">Options</TableHead>
                                <TableHead className="font-bold text-black text-center py-4 px-6 bg-tap">Courts</TableHead>
                                <TableHead className="font-bold text-black text-center py-4 px-6 bg-tap">Gym</TableHead>
                                <TableHead className="font-bold text-black text-center py-4 px-6 bg-tap">CrossFitness</TableHead>
                                <TableHead className="font-bold text-black text-center py-4 px-6 bg-tap">Gym & Courts</TableHead>
                                <TableHead className="font-bold text-black text-center py-4 px-6 bg-tap">All-Inclusive</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {membershipData.map((row, index) => (
                                <TableRow key={index} className="border-b hover:bg-gray-50">
                                    <TableCell className="font-medium text-black py-4 px-6">
                                        <div className="flex items-center gap-2">
                                            <span className="text-lg">{row.icon}</span>
                                            {row.feature}
                                        </div>
                                    </TableCell>
                                    <TableCell className="py-4 px-6">
                                        {row.courts ? <CheckIcon /> : <XIcon />}
                                    </TableCell>
                                    <TableCell className="py-4 px-6">
                                        {row.gym ? <CheckIcon /> : <XIcon />}
                                    </TableCell>
                                    <TableCell className="py-4 px-6">
                                        {row.crossfitness ? <CheckIcon /> : <XIcon />}
                                    </TableCell>
                                    <TableCell className="py-4 px-6">
                                        {row.gymCourts ? <CheckIcon /> : <XIcon />}
                                    </TableCell>
                                    <TableCell className="py-4 px-6">
                                        {row.allInclusive ? <CheckIcon /> : <XIcon />}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                {/* Footer Notes */}
                <div className="mt-8 text-sm text-gray-600 space-y-2">
                    <p>* Crossfitness Classes includes a minimum of 9 classes per week.</p>
                    <p>* Special Classes include Weight Loss and Stamina training.</p>
                </div>
                {/* Pricing and CTA */}
                <div className="flex flex-col md:flex-row items-center justify-between mt-12 pt-8 border-t border-gray-200">
                    <div className="mb-4 md:mb-0">
                        <div className="flex items-center gap-2">
                            <span className="text-black font-medium">Prices start from</span>
                            <div className="flex items-center gap-1">
                                <Image
                                    src="https://ext.same-assets.com/1242065685/4133913420.svg"
                                    alt="Riyal"
                                    width={20}
                                    height={20}
                                />
                                <span className="text-3xl font-bold text-black">75</span>
                            </div>
                        </div>
                    </div>
                    <Button
                        size="lg"
                        className="bg-gold hover:bg-gold/90 text-black font-semibold"
                    >
                        Join Now
                    </Button>
                </div>
            </div>
        </section>
    )
}
