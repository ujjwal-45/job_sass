import { StaticImageData } from "next/image";
import image1 from "../../public/NITR_logo.png"
import image2 from "../../public/ai4.png"

export type College = {
  name: string,
  location: string,
  placementRate: number,
  description: string,
  image: StaticImageData,
  bgImage: StaticImageData,
  keyPoints: Array<string>,
  href: string,
}

export const colleges: College[] = [
  {
    name: "NIT Rourkela",
    location: "Rourkela, Odisha",
    placementRate: 95,
    description:"NIT Rourkela is committed to achieving 100% placement for its students by partnering with top companies across various industries.",
    image: image1,
    bgImage:image2,
    keyPoints: ["Engineering", "Research", "Innovation", "Top Placements"],
    href:"/preview"
  },
  {
    name: "NIT Rourkela",
    location: "Rourkela, Odisha",
    placementRate: 95,
    description:"NIT Rourkela is committed to achieving 100% placement for its students by partnering with top companies across various industries.",
    image: image1,
    bgImage:image2,
    keyPoints: ["Engineering", "Research", "Innovation", "Top Placements"],
    href:"/preview",
  },
  {
    name: "NIT Rourkela",
    location: "Rourkela, Odisha",
    placementRate: 95,
    description:"NIT Rourkela is committed to achieving 100% placement for its students by partnering with top companies across various industries.",
    image: image1,
    bgImage:image2,
    keyPoints: ["Engineering", "Research", "Innovation", "Top Placements"],
    href:"/preview",
  },
  {
    name: "NIT Rourkela",
    location: "Rourkela, Odisha",
    placementRate: 95,
    description:"NIT Rourkela is committed to achieving 100% placement for its students by partnering with top companies across various industries.",
    image: image1,
    bgImage:image2,
    keyPoints: ["Engineering", "Research", "Innovation", "Top Placements"],
    href:"/preview",
  },
  {
    name: "NIT Rourkela",
    location: "Rourkela, Odisha",
    placementRate: 95,
    description:"NIT Rourkela is committed to achieving 100% placement for its students by partnering with top companies across various industries.",
    image: image1,
    bgImage:image2,
    keyPoints: ["Engineering", "Research", "Innovation", "Top Placements"],
    href:"/preview",
  },
];