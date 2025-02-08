import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";

export function AnimatedGrid() {
  return (
    <div className="absolute -z-10 flex h-full w-full  items-center justify-center overflow-hidden rounded-lg bg-background p-20">
    
    <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
    />
</div>
  );
}