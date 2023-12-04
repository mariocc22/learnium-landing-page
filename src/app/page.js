// sections
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Contact from "@/components/sections/Contact";
import Feature1 from "@/components/sections/Feature1";
import Feature2 from "@/components/sections/Feature2";
import Feature3 from "@/components/sections/Feature3";
import Feature4 from "@/components/sections/Feature4";
import Feature5 from "@/components/sections/Feature5";
import Hero from "@/components/sections/Hero";
import Team from "@/components/sections/Team";

export default function Home() {
  return (
    <main className="max-w-[1440px] bg-white mx-auto relative overflow-hidden ">
      <Header />
      <Hero />
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <Feature4 />
      <Feature5 />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
