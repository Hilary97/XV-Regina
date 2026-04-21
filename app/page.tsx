import Hero from "@/components/Hero";
import Message from "@/components/Message";
import EventDetails from "@/components/EventDetails";
import RSVP from "@/components/RSVP";
import Family from "@/components/Family";
import DressCode from "@/components/DressCode";
import Gifts from "@/components/Gifts";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Separator from "@/components/Separator";
import MusicPlayer from "@/components/MusicPlayer";
import WelcomeCard from "@/components/WelcomeCard";

export default function Home() {
  return (
    <main className="min-h-screen">
      <WelcomeCard />
      <MusicPlayer />
      <Hero id="hero" />
      <Separator />
      <Message />
      <Separator />
      <EventDetails />
      <Separator />
      <RSVP />
      <Separator />
      <DressCode />
      <Separator />
      <Contact />
      <Separator />
      <Footer />
    </main>
  );
}

