import React, {useEffect, useState} from "react";
import sanityClient from "../client.js";

export default function Project() {
    const [projectData, setProjectData] = useState(null);

    useEffect( () => {
        sanityClient.fetch(`*[_type == "project"]{
            title,
            date,
            description,
            projectType,
            link,
            tags,
        }`).then((data) => setProjectData(data))
        .catch(console.error);
    }, []);

    return (
        <main className="bg-blue-200 min-h-screen p-12" >
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center wacky"> My Projects</h1>
                <h2 className="text-lg text-grey-600 flex justify-center mb-12">Welcome to my Projects!</h2>
                <section className=" grid grid-cols-2 gap-8">
                    {projectData && projectData.map((project,index)=> (
                    <article className="relative rounded-lg shadow-xl bg-white p-16">
                        <h3 className="text-grey-800 text-3xl font-bold mb-2 hover:text-black">
                            <a href={project.link} 
                                alt={project.title} 
                                target="_blank" 
                                rel="nooperner noreffer">
                                {project.title}
                            </a>
                        </h3>
                        <div className="text-grey-500 text-xs space-x-4">
                            <span>
                                <strong className="font-bold">Finished On</strong>:{" "}
                                {new Date(project.date).toLocaleDateString()}
                            </span>
                            {/* <span>
                                <strong className="font-bold">Company</strong>:{" "}
                                {project.place}
                            </span> */}
                            <span>
                                <strong className="font-bold">Type</strong>: {" "}
                                {project.projectType}
                            </span>
                            <p className="my-6 text-lg text-grey-700 leading-relaxed">{project.description}</p>
                            <a href={project.link} rel="noopener noreferrer" target="_blank" className="text-blue-600 font-bold hover:underline wacky hover:text-white text-md">
                                View The Project {" "}
                                <span role="img" aria-label="left pointer">
                                    👈🏻
                                </span>
                            </a>
                        </div>
                    </article>
                    ))}
                </section>
            </section>
        </main>
    )
}