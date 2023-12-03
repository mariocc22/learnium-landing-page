// sections
import Header from "@/components/Header";
import Contact from "@/components/sections/Contact";
import Feature1 from "@/components/sections/Feature1";
import Feature2 from "@/components/sections/Feature2";
import Feature3 from "@/components/sections/Feature3";
import Hero from "@/components/sections/Hero";
import Team from "@/components/sections/Team";

export default function Home() {
  return (
    <main className="max-w-[1920px] bg-white mx-auto relative overflow-hidden ">
      <Header />
      <Hero />
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <Team />
      <Contact />
      <div className="h-[4000px]"></div>
    </main>
  );
}
