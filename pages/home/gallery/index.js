import Image from "next/image";
import photo1 from "../../../public/galeri/image1.png"
import photo2 from "../../../public/galeri/image2.png"
import photo3 from "../../../public/galeri/image3.png"
import photo4 from "../../../public/galeri/image4.png"
import photo5 from "../../../public/galeri/image5.png"

export default function Gallery() {
    return (
        <div className="container mx-auto bg-white py-10">
            <div className="flex justify-center">
                <span className="px-6 border-primary border-b-4 rounded-sm border-secondary h-0"></span>
            </div>
            <p className="text-center font-poppins pt-3 font-bold">Galeri Kami</p>
            <div class="grid grid-cols-2">
                <div class="">
                    <Image src={photo1} width={300} height={180} />
                </div>
                <div class="">
                    <Image src={photo2} width={300} height={180} />
                </div>
                <div class="col-span-2 bg--500">
                    <Image src={photo3} width={700} height={300} />
                </div>
                <div class="">
                    <Image src={photo4} width={300} height={180} />
                </div>
                <div class="">
                    <Image src={photo5} width={300} height={180} />
                </div>
            </div>
        </div>
    )
}