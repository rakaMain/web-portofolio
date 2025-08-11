import React from "react"
import MyHead from "../components/header"
import MyMainSec from "../components/Home/body"
import MyCta from "../components/ccta"

export default function Home( props ) {
    return (
        <div className=" flex-col  w-full justify-center gap-1.5 bg-white relative">
            <MyHead />
            <MyMainSec />
            <MyCta />
        </div>
    )
}