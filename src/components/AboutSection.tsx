'use client'
import { Button } from "../components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Phone, HelpCircle } from "lucide-react"
import { SlashIcon } from "../components/ui/SlashIcon";
import Image from "next/image"
import VisionImage from '../assets/images/20250703.png';
export function AboutSection() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="section-padding">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left side - Image */}
                    <Image className="rounded-xl" src={VisionImage} alt="Vision" />
                    {/* Right side - Content */}
                    <div className="space-y-8">
                        <div className="text-center">
                            <div className="flex items-center justify-center gap-2 mb-4">
                                <SlashIcon />
                                <span className="text-sm font-semibold text-black tracking-wider">ABOUT THE REC</span>
                                <SlashIcon />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                                Unlock Your Full Potential{' '}
                                <span className="text-gold">Through Fitness</span>
                            </h2>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                To establish a comprehensive Sports and Social Club
                                Network, serving as a centralized hub where
                                members can conveniently access all their needs. Our
                                vision extends beyond sports alone; we aim to
                                cultivate a space for relaxation, socialization, and
                                entertainment. By fostering a sense of community,
                                our goal is to make members feel the club is a second
                                home, supporting them in reaching their full
                                potential across various facets of life.
                            </p>
                        </div>
                        {/* Tabs */}
                        <Tabs defaultValue="mission" className="w-full">
                            <TabsList className="grid w-full grid-cols-3 bg-white border">
                                <TabsTrigger
                                    value="mission"
                                    className="data-[state=active]:bg-tap data-[state=active]:text-black font-semibold"
                                >
                                    Our Mission
                                </TabsTrigger>
                                <TabsTrigger
                                    value="vision"
                                    className="data-[state=active]:bg-tap data-[state=active]:text-black font-semibold"
                                >
                                    Our Vision
                                </TabsTrigger>
                                <TabsTrigger
                                    value="goal"
                                    className="data-[state=active]:bg-tap data-[state=active]:text-black font-semibold"
                                >
                                    Our Goal
                                </TabsTrigger>
                            </TabsList>
                            <TabsContent value="mission" className="mt-6">
                                <p className="text-gray-600 text-center">
                                    Our mission is to create a dynamic environment that inspires individuals to thrive physically, mentally, and socially — empowering every member to live stronger, healthier, and more connected lives.
                                </p>
                            </TabsContent>
                            <TabsContent value="vision" className="mt-6">
                                <p className="text-gray-600 text-center">
                                    To redefine the fitness experience in Qatif by building an inclusive community that inspires growth, well-being, and lasting lifestyle change for all.
                                </p>
                            </TabsContent>
                            <TabsContent value="goal" className="mt-6">
                                <p className="text-gray-600 text-center">
                                    To build a vibrant environment that supports physical, mental, and social growth through innovative fitness solutions and a strong sense of community.
                                </p>
                            </TabsContent>
                        </Tabs>
                        {/* CTA and Contact */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                            <Button
                                size="lg"
                                className="bg-gold hover:bg-gold/90 text-black font-semibold"
                            >
                                Join Us Now
                            </Button>
                            <div className="flex items-center gap-3">
                                <div className="flex items-center gap-2 text-gray-600">
                                    <HelpCircle className="w-5 h-5" />
                                    <span>Need Help?</span>
                                </div>
                                <div className="flex items-center gap-2 font-semibold text-black">
                                    <Phone className="w-5 h-5" />
                                    <span>(+966) 55 562 3832</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
