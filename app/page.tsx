import { About, Contact, Footer, Hero, Navigation, Projects, Skills } from "@/components/index";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white antialiased overflow-x-hidden">
      <Navigation />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
