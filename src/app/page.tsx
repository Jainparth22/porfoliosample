import Hero from '@/components/sections/Hero';
import Shipped from '@/components/sections/Shipped';
import Research from '@/components/sections/Research';
import Experience from '@/components/sections/Experience';
import AllWork from '@/components/sections/AllWork';
import Skills from '@/components/sections/Skills';
import Credentials from '@/components/sections/Credentials';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Shipped />
      <Research />
      <Experience />
      <AllWork />
      <Skills />
      <Credentials />
      <About />
      <Contact />
    </>
  );
}
