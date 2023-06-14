import { Carousel } from "@material-tailwind/react";
import ZeldaTotk from "../img/zeldatotk.jpg";
import BreakingBad from "../img/breakingbad.jpg";

const img = [
    { src: ZeldaTotk, alt: 'Image Zelda Totk' },
    { src: "https://cdn.discordapp.com/attachments/1023181262460035113/1118137152421761034/bab-sidi-abdelwahab.png", alt: 'Image Oujda'},
    { src : "https://cdn.discordapp.com/attachments/1023181262460035113/1118146687018483812/un790xOv_4x.png", alt: 'Image Songe'},
    { src : BreakingBad, alt: 'Image Breaking Bad'},
    { src : "https://images3.alphacoders.com/612/612032.jpg", alt: 'Image Zelda MM'},
]
 
export default function CarouselImg() {
  return (
    <Carousel className="rounded-3xl select-none shadow-lg ">

     {img.map((img) => (
        <div>
            <img
                src={img.src}
                alt={img.alt}
                className="sm:rounded-3xl sm:h-72 md:h-96 lg:w-full lg:h-full"
            />

      </div>
     ))}

    </Carousel>
  );
}