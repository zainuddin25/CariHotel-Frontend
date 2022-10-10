import Link from "next/link";
import { useState } from "react";

// export default function Header () {

    // const [visible, setVisible] = useState("hidden")

    // const handleHamburgerMenu = () => {
    //     if(visible == "hidden"){
    //         setVisible("block")
    //     }
    // }

//     const handleCloseMenu = () => {
//         setVisible("hidden")
//     }

//     return (
//        <div className="w-full fixed top-0 z-40">
//             <div className="container px-10 bg-white py-6 mx-auto">
//                 <div className="flex justify-between items-center">
//                     <h1 className="font-poppins text-xl font-bold lg:text-2xl">Cari Hotel</h1>
//                     <div className="hidden lg:flex lg:justify-center">
//                         <Link href="/">
//                             <a className="px-4 font-poppins text-lg py-5">Home</a>
//                         </Link>
//                         <Link href="/">
//                             <a className="px-4 font-poppins text-sm">Tentang</a>
//                         </Link>
//                         <Link href="/">
//                             <a className="px-4 font-poppins text-sm">Komentar</a>
//                         </Link>
//                         <Link href="/">
//                             <a className="px-4 font-poppins text-sm">Rekomendasi</a>
//                         </Link>
//                     </div>
//                     <div className="flex justify-center items-center">
//                         <Link href="/">
//                             <a className="px-6 font-light text-sm font-poppins">Sign Up</a>
//                         </Link>
//                         <Link href="/">
//                             <a className="px-4 text-base font-poppins border-b-4 py-2 border-primary font-bold text-primary">Log In</a>
//                         </Link>
//                         <div className="ml-4" onClick={handleHamburgerMenu}>
//                             <hr className="border rounded px-4 my-2 border-primary" />
//                             <hr className="border rounded px-4 my-2 border-primary" />
//                             <hr className="border rounded px-4 my-2 border-primary" />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className={visible}>
//                 <div className="fixed w-screen h-screen top-0 p-10 bg-black bg-opacity-80">
//                     <div className="w-full h-full relative">
//                         <span className="text-white absolute right-8 text-4xl cursor-pointer" onClick={handleCloseMenu}>X</span>
//                         <div className="w-full text-center flex flex-col text-white pt-10">
//                             <Link href="/">
//                                 <a className="px-4 font-poppins text-lg py-5">Home</a>
//                             </Link>
//                             <Link href="/">
//                                 <a className="px-4 font-poppins text-lg py-5">Tentang</a>
//                             </Link>
//                             <Link href="/">
//                                 <a className="px-4 font-poppins text-lg py-5">Komentar</a>
//                             </Link>
//                             <Link href="/">
//                                 <a className="px-4 font-poppins text-lg py-5">Rekomendasi</a>
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//        </div>
//     )
// }

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
                    <div className="hidden">

                    </div>
                    <div className="hidden">

                    </div>
                    <div onClick={handleHamburgerMenu}>
                        <hr className="px-3 border-2 rounded my-1 border-primary" />
                        <hr className="px-3 border-2 rounded my-1 border-primary" />
                        <hr className="px-3 border-2 rounded my-1 border-primary" />
                    </div>
                </div>
            </div>
            <div className={visible}>
                <div className="fixed top-0 w-screen h-screen bg-white">
                    <div className="relative">
                        <div className="absolute right-14 top-6" onClick={handleCloseMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="20pt" viewBox="0 0 329.26933 329" width="20pt">
                                <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0" />
                            </svg>
                        </div>
                        <div className="w-full py-20 text-center flex flex-col">
                            <Link href="/">
                                <a className="text-xl font-poppins font-medium opacity-50 py-5 hover:opacity-100 ease-in-out duration-200">Home</a>
                            </Link>
                            <Link href="/">
                                <a className="text-xl font-poppins font-medium opacity-50 py-5 hover:opacity-100 ease-in-out duration-200">Tentang</a>
                            </Link>
                            <Link href="/">
                                <a className="text-xl font-poppins font-medium opacity-50 py-5 hover:opacity-100 ease-in-out duration-200">Komentar</a>
                            </Link>
                            <Link href="/">
                                <a className="text-xl font-poppins font-medium opacity-50 py-5 hover:opacity-100 ease-in-out duration-200">Rekomendasi</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}