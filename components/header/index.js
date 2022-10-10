import Link from "next/link";
import { useState } from "react";

export default function Header () {

    const [visible, setVisible] = useState("hidden")

    const handleHamburgerMenu = () => {
        if(visible == "hidden"){
            setVisible("block")
        }
    }

    const handleCloseMenu = () => {
        setVisible("hidden")
    }

    return (
       <div className="w-full fixed top-0 z-40">
            <div className="container px-10 bg-white py-6 mx-auto">
                <div className="flex justify-between items-center">
                    <h1 className="font-poppins text-xl font-bold lg:text-2xl">Cari Hotel</h1>
                    <div className="hidden lg:flex lg:justify-center">
                        <Link href="/">
                            <a className="px-4 font-poppins text-lg py-5">Home</a>
                        </Link>
                        <Link href="/">
                            <a className="px-4 font-poppins text-sm">Tentang</a>
                        </Link>
                        <Link href="/">
                            <a className="px-4 font-poppins text-sm">Komentar</a>
                        </Link>
                        <Link href="/">
                            <a className="px-4 font-poppins text-sm">Rekomendasi</a>
                        </Link>
                    </div>
                    <div className="flex justify-center items-center">
                        <Link href="/">
                            <a className="px-6 font-light text-sm font-poppins">Sign Up</a>
                        </Link>
                        <Link href="/">
                            <a className="px-4 text-base font-poppins border-b-4 py-2 border-primary font-bold text-primary">Log In</a>
                        </Link>
                        <div className="ml-4" onClick={handleHamburgerMenu}>
                            <hr className="border rounded px-4 my-2 border-primary" />
                            <hr className="border rounded px-4 my-2 border-primary" />
                            <hr className="border rounded px-4 my-2 border-primary" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={visible}>
                <div className="fixed w-screen h-screen top-0 p-10 bg-black bg-opacity-80">
                    <div className="w-full h-full relative">
                        <span className="text-white absolute right-8 text-4xl cursor-pointer" onClick={handleCloseMenu}>X</span>
                        <div className="w-full text-center flex flex-col text-white pt-10">
                            <Link href="/">
                                <a className="px-4 font-poppins text-lg py-5">Home</a>
                            </Link>
                            <Link href="/">
                                <a className="px-4 font-poppins text-lg py-5">Tentang</a>
                            </Link>
                            <Link href="/">
                                <a className="px-4 font-poppins text-lg py-5">Komentar</a>
                            </Link>
                            <Link href="/">
                                <a className="px-4 font-poppins text-lg py-5">Rekomendasi</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    )
}