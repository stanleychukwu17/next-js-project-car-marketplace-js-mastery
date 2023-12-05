import Link from "next/link"
import Home from "./pages/Home"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "CarHub",
    description: "Discover the best cars in the world!!"
}

export default function HomePage() {

    return (
        <main>
            <Home />
        </main>
    )
}