import React from "react";
import image from "../images/waves.jpg";
export default function home() {
    return (
        <main>
            <img src={image} alt="Waves" className="absolute object-cover w-full h-full"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-white font-bold wacky leading-none lg:leading-snug home-name"> Welcome!</h1>
            </section>
        </main>
    )
}