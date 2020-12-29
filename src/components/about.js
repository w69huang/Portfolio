import React, {useEffect, useState} from "react";
import sanityClient from "../client.js";
import sapling from "../images/sapling.jpg";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
}

export default function About() {
    const[author, setAuthor] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type== "author"] {
            name,
            bio,
            "authorImage": image.asset->url,
            skills,

        }`).then((data) => setAuthor(data[0]))
        .catch(console.error)
    }, []);

    if(!author) return <div>Loading...</div>;

    return (
        <main className="relative">
            <img src={sapling} alt="Sapling" className="absolute w-full" />
            <div className="p-10 lg:pt-48 container mx-auto relative">
                <section className="bg-blue-500 rounded-lg shadow-2xl lg:flex p-20">
                    <img src={urlFor(author.authorImage).url()} className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8" alt={author.name}/>
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="wacky text-6xl text-blue-400 mb-4">
                            Hey! I'm {" "}
                            <span className="text-blue-200"> {author.name} </span>
                        </h1>
                        <div className="prose lg:prose-xl text-white text-lg">
                            <BlockContent blocks={author.bio} projectId="uh4mciun" dataset="production"/>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}