import { Sparkle } from "lucide-react";
import { AnimatedGrid } from "./components/Background";
import { MarqueeDemoVertical } from "./components/Marquee";
import { Button } from "@/components/ui/button";
import ScrollingTextWithImage from "./components/ScrollText";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <>
      <Navbar/>
      <div className="flex min-h-screen items-center justify-evenly">
        <AnimatedGrid />
        <div className="flex flex-col items-center justify-center space-y-4">
          <h1 className="text-6xl font-bold ">Find Your Dream Job!
            <Sparkle size={34} className="text-blue-600 inline"/>
          </h1>
          <p className="text-2xl text-center">
            or Find someone to fit your expectations
          </p>
          <Button size={"lg"}>Get Started</Button>
        </div>
        <div className="">
          <MarqueeDemoVertical />
        </div>
      </div>

      <ScrollingTextWithImage />
    </>
  );
}
