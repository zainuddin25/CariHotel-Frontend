import Header from "../components/header"
import Gallery from "./home/gallery"
import Hero from "./home/hero"

export default function Home() {
  return (
    <div>
      <Header />
      <div className="pt-24 lg:pt-20 z-0">
        <Hero />
        <Gallery />
      </div>
    </div>
  )
}
