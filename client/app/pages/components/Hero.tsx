'use client'
// import { useCallback } from "react"
// import { useAppDispatch, useAppSelector } from "../../redux/hook"
// import { updateUser } from "../../redux/features/userSlice"
import Image from "next/image"

import hero from "@/public/assets/hero.png"
import heroBg from "@/public/assets/hero-bg.png"


export default function Hero() {
    /**
        ** if you wanted to use redux, then the code below can help
        const userInfo = useAppSelector(state => state.user)
        const reduxDispatch = useAppDispatch()

        // if this updated to yes, that means the user cannot view this page except they are logged in
        const upFunc = useCallback(() => {
            reduxDispatch(updateUser({must_logged_in_to_view_this_page:'yes'}))
        }, [reduxDispatch])
    */

    return (
        <section className="">
            <div className="flex">
                <div className="w-[50%] mt-16">
                    <h2 className="w-[60%] text-7xl font-bold leading-snug">
                        Find, book, rent a car—quick and super easy!
                    </h2>
                    <div className="w-3/4 text-3xl leading-relaxed mt-7 font-extralight">
                        Streamline your car rental experience with our effortless booking process.
                    </div>
                </div>
                <div className="w-[55%]">
                    <div className="absolute z-[-5] w-[1200px] top-[-50px] ml-14">
                        <Image src={heroBg} alt="" />
                    </div>
                    <div className="mt-20">
                        <Image src={hero} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}