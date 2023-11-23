// videoData.tsx
import { StaticImageData } from 'next/image';

import Animal from "./Thumbnails/Animal.jpeg";
import Damsel from "./Thumbnails/Damsel.jpg";
import FamilySwitch from "./Thumbnails/family switch.jpeg";
import JaaneJaan from "./Thumbnails/janne jaan.jpg";
import Khufiya from "./Thumbnails/Khufiya.jpg";
import tereishqme from "./Thumbnails/tereIShqME.jpeg"
import After from "./Thumbnails/after.jpeg"
import afterverhappy from "./Thumbnails/after ever hapy.jpg"
import stayaprem from "./Thumbnails/satya prem.jpg"
import rebalmoon from "./Thumbnails/rebelMoon.jpg"
export type Video = {
  id: number;
  title: string;
  description: string;
  thumbnail: StaticImageData;
  videoUrl: string;
};

const videoData: { [key: string]: Video } = {
  Damsel: {
    id: 1,
    title: "Damsel",
    description: "A great movie for testing purposes.",
    thumbnail: Damsel,
    videoUrl:
      "https://www.youtube.com/watch?v=9eN_AGX8GXk&pp=ygUObmV0ZmxpeCBtb3ZpZXM%3D1",
  },
  Khufiya: {
    id: 2,
    title: "Khufiya",
    description: "Another great movie for testing purposes.",
    thumbnail: Khufiya,
    videoUrl:
      "https://www.youtube.com/watch?v=9eN_AGX8GXk&pp=ygUObmV0ZmxpeCBtb3ZpZXM%3D2",
  },
  "Rebel Moon": {
    id: 3,
    title: "Rebel Moon",
    description: "Yet another great movie for testing purposes.",
    thumbnail: rebalmoon,
    videoUrl:
      "https://www.youtube.com/watch?v=9eN_AGX8GXk&pp=ygUObmV0ZmxpeCBtb3ZpZXM%3D3",
  },
  "Family Switch": {
    id: 4,
    title: "Family Switch",
    description: "Another one for testing purposes.",
    thumbnail: FamilySwitch,
    videoUrl:
      "https://www.youtube.com/watch?v=SWh4c9EVqGM&pp=ygUVbmV0ZmxpeCBsYXRlc3QgbW92aWVz",
  },
  // "Jaane Jaan": {
  //   id: 5,
  //   title: "Jaane Jaan",
  //   description: "Fifth great movie for testing purposes.",
  //   thumbnail: JaaneJaan,
  //   videoUrl:
  //     "https://www.youtube.com/watch?v=GHX6yT9Lxfo&pp=ygUVbmV0ZmxpeCBsYXRlc3QgbW92aWVz",
  // },
  Animal: {
    id: 6,
    title: "Animal",
    description: "A movie for testing purposes.",
    thumbnail: Animal,
    videoUrl:
      "https://www.youtube.com/watch?v=HrnrqYxYrbk&pp=ygUVbmV0ZmxpeCBsYXRlc3QgbW92aWVz",
  },
  "Tere Ishq Mein": {
    id: 7,
    title: "Tere Ishq Mein",
    description: "Seventh great movie for testing purposes.",
    thumbnail: tereishqme,
    videoUrl:
      "https://www.youtube.com/watch?v=fCZhBqz-hQU&pp=ygUVbmV0ZmxpeCBsYXRlc3QgbW92aWVz",
  },
  After: {
    id: 8,
    title: "After",
    description: "Another movie for testing purposes.",
    thumbnail: After,
    videoUrl:
      "https://www.youtube.com/watch?v=g99KPOpqZ4Q&pp=ygUGYWZ0ZXIg",
  },
  "After Ever Happy": {
    id: 9,
    title: "After Ever Happy",
    description: "Ninth great movie for testing purposes.",
    thumbnail: afterverhappy,
    videoUrl:
      "https://www.youtube.com/watch?v=K7AL2OARpTo&pp=ygUQYWZ0ZXIgZXZlciBoYXBweQ%3D%3D",
  },
  "Satya Prem Ki Katha": {
    id: 10,
    title: "Satya Prem Ki Katha",
    description: "Tenth great movie for testing purposes.",
    thumbnail:stayaprem,
    videoUrl:
      "https://www.youtube.com/watch?v=oeo7rpKZHzA&pp=ygUYc2F0eWEgcHJlbSBrYXRoYSB0cmFpbGVy",
  },
};

export default videoData;
