import Image from "next/image";
import bgHero from "../../../public/bg-home.png"

export default function Hero () {
    return (
        <div className="container mx-auto bg-white px-10 lg:flex lg:justify-between lg:py-32 lg:items-center">
            <div className="w-full lg:w-2/4">
                <h1 className="w-3/4 lg:w-3/4 pt-10 text-2xl font-poppins font-bold lg:text-4xl"> Temukan Hotel Terbaik dengan mudah dan terpercaya</h1>
                <p className="w-full font-poppins lg:text-base text-xs py-2 font-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper vehicula lobortis. 
                    Duis a eleifend magna, non aliquet felis. Praesent arcu ipsum, faucibus in bibendum in, 
                    pretium condimentum risus. Aliquam feugiat interdum nunc, at vehicula lorem. 
                    Vestibulum ac porta eros
                </p>
                <div className="my-4">
                    <button className="text-white bg-primary rounded py-2 px-8">
                        Temukan Hotel
                    </button>
                </div>
            </div>
            <div className="hidden lg:block">
                <Image src={bgHero} width={1000} />
            </div>
        </div>
    )
}