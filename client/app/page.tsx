'use client'
import Link from "next/link"
import { useCallback } from "react"
import { useAppDispatch, useAppSelector } from "./redux/hook"
import { updateUser } from "./redux/features/userSlice"

export default function HomePage() {
    const userInfo = useAppSelector(state => state.user)
    const reduxDispatch = useAppDispatch()

    // if this updated to yes, that means the user cannot view this page except they are logged in
    const upFunc = useCallback(() => {
        reduxDispatch(updateUser({must_logged_in_to_view_this_page:'yes'}))
    }, [reduxDispatch])

    return (
        <main>
            <div className="">Hello world</div>
            {userInfo.loggedIn === 'no' && (
                <button className="p-5 bg-lime-500 mt-5 rounded-md" onClick={() => { upFunc() }} >
                    update must be logged in to yes
                </button>
            )}
        </main>
    )
}