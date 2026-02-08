import { Header } from "../components/Header"
import { HeroSection } from "../components/HeroSection"
import { AboutSection } from "../components/AboutSection"
import { FacilitiesSection } from "../components/FacilitiesSection"
import { MembershipsSection } from "../components/MembershipsSection"
import { CoachesSection } from "../components/CoachesSection"
import { GallerySection } from "../components/GallerySection"
import { ExperienceSection } from "@/components/Experience"
import { Footer } from "../components/Footer"

export default function Home() {
    return (
        <main>
            <Header />
            <HeroSection />
            <AboutSection />
            <GallerySection />
            <FacilitiesSection />
            {/* <MembershipsSection /> */}
            {/* <CoachesSection /> */}
            <ExperienceSection />
            <Footer />
        </main>
    )
}
