import Link from "next/link";

export default function Header () {
    return (
       <div className="w-full fixed top-0">
            <div className="container px-10 bg-white py-6 mx-auto">
                <div className="flex justify-between items-center">
                    <h1 className="font-poppins text-xl font-bold lg:text-2xl">Cari Hotel</h1>
                    <div className="hidden lg:flex lg:justify-center">
                        <Link href="/">
                            <a className="px-4 font-poppins text-sm">Home</a>
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
                    </div>
                </div>
            </div>
       </div>
    )
}