import UsSection from "@/components/us/UsSection";
import HeroSection from "@/components/home/HeroSection";
import ContractsSection from "@/components/contracts/ContractsSection";
import OfferSection from "@/components/offers/OfferSection";
import BlogSection from "@/components/blog/BlogSection";

export default function Home() {
  return (
    <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]">
      <HeroSection />
      <UsSection />
      <ContractsSection />
      <OfferSection />
      <BlogSection />
    </main>
  );
}
