import Navigation from "@/components/sections/navigation";
import HeroSection from "@/components/sections/hero";
import ContentText from "@/components/sections/content-text";
import HealthDashboard from "@/components/sections/health-dashboard";
import WellnessActivities from "@/components/sections/wellness-activities";
import MobileAppSection from "@/components/sections/mobile-app";
import SuperpowerBillboard from "@/components/sections/superpower-billboard";
import InvitationLetter from "@/components/sections/invitation-letter";
import HeroImage from "@/components/sections/hero-image";
import ProfileOrange from "@/components/sections/profile-orange";
import StorefrontDisplay from "@/components/sections/storefront-display";
import OpportunitiesText from "@/components/sections/opportunities-text";
import ClientsSection from "@/components/sections/clients-section";
import Footer from "@/components/sections/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <HeroSection />
      
      <section className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8 xl:px-0">
          <HealthDashboard />
        </div>
      </section>
      
      <ContentText />
      
      <section className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8 xl:px-0">
          <WellnessActivities />
        </div>
      </section>
      
      <section className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8 xl:px-0">
          <MobileAppSection />
        </div>
      </section>
      
      <SuperpowerBillboard />
      
      <InvitationLetter />
      
      <section className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8 xl:px-0">
          <ProfileOrange />
        </div>
      </section>
      
      <section className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8 xl:px-0">
          <StorefrontDisplay />
        </div>
      </section>
      
      <OpportunitiesText />
      
      <ClientsSection />
      
      <Footer />
    </main>
  );
}