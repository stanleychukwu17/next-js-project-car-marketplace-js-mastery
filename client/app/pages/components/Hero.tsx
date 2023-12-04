'use client'
// import { useCallback } from "react"
// import { useAppDispatch, useAppSelector } from "../../redux/hook"
// import { updateUser } from "../../redux/features/userSlice"

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
        <div>Hero is here for good</div>
    )
}