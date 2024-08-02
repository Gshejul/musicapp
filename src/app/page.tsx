
import { CardHoverEffect } from "@/components/CardHoverEffect";
import HomeSection from "@/components/HomeSection";
import Project from "@/components/Project";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.2]">
     
     <HomeSection />
     <CardHoverEffect />
     <Project />
    </main>
  );
}
