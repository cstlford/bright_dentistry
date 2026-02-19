import HeroSection        from "@/components/sections/HeroSection";
import WelcomeSection     from "@/components/sections/WelcomeSection";
import ServicesSection    from "@/components/sections/ServicesSection";
import AboutSection       from "@/components/sections/AboutSection";
import ReviewsSection     from "@/components/sections/ReviewsSection";
import CTABannerSection   from "@/components/sections/CTABannerSection";
import LocationSection    from "@/components/sections/LocationSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <ServicesSection />
      <AboutSection />
      <ReviewsSection />
      <CTABannerSection />
      <LocationSection />
    </>
  );
}
