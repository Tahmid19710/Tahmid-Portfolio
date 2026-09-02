import { useEffect, useState } from "react";
import API from "../services/api";


function Projects(){


    const [projects,setProjects] = useState([]);

    const [currentImage,setCurrentImage] = useState({});



    useEffect(()=>{


        API.get("/projects")
        .then(response=>{


            setProjects(response.data);


            const initialImages = {};


            response.data.forEach(project=>{


                if(project.images && project.images.length > 0){

                    initialImages[project.id] = 0;

                }


            });


            setCurrentImage(initialImages);


        })
        .catch(error=>{

            console.log(error);

        });


    },[]);




    // Auto slide

    useEffect(()=>{


        const interval = setInterval(()=>{


            setCurrentImage(prev=>{


                const updated = {...prev};


                projects.forEach(project=>{


                    if(project.images && project.images.length > 1){


                        updated[project.id] =
                        ((updated[project.id] || 0) + 1)
                        %
                        project.images.length;


                    }


                });


                return updated;


            });


        },4000);



        return ()=>clearInterval(interval);


    },[projects]);





    const nextImage = (projectId,total)=>{


        setCurrentImage(prev=>({

            ...prev,

            [projectId]:
            ((prev[projectId] || 0)+1)%total

        }));


    };





    const previousImage = (projectId,total)=>{


        setCurrentImage(prev=>({

            ...prev,

            [projectId]:
            ((prev[projectId] || 0)-1+total)%total

        }));


    };





    return(


        <section
        id="projects"
        className="
        min-h-screen
        px-8
        py-20
        bg-[#09090f]
        ">


            <div className="
            max-w-6xl
            mx-auto">


                <h2 className="
                text-4xl
                font-bold
                text-center
                text-purple-400
                mb-12">

                    Projects

                </h2>





                <div className="
                grid
                md:grid-cols-2
                gap-8">



                {
                projects.map(project=>(


                    <div
                    key={project.id}
                    className="
                    bg-white/5
                    border
                    border-white/10
                    rounded-3xl
                    overflow-hidden
                    hover:scale-105
                    transition duration-300">





                        {/* Image Section */}


                        <div
                        className="
                        h-72
                        bg-black
                        relative
                        flex
                        items-center
                        justify-center">


                        {
                        project.images &&
                        project.images.length > 0 ?


                        <img

                        src={
                        `/images/${
                        project.images[
                        currentImage[project.id] || 0
                        ].imageName
                        }`
                        }

                        alt={project.title}

                        className="
                        w-full
                        h-full
                        object-contain
                        transition duration-500
                        "

                        />


                        :

                        <span className="text-6xl">
                            🚀
                        </span>

                        }




                        {
                        project.images &&
                        project.images.length > 1 &&

                        <>


                        <button

                        onClick={()=>previousImage(
                            project.id,
                            project.images.length
                        )}

                        className="
                        absolute
                        left-3
                        bg-black/60
                        text-white
                        px-3
                        py-2
                        rounded-full
                        hover:bg-purple-600">

                            ❮

                        </button>




                        <button

                        onClick={()=>nextImage(
                            project.id,
                            project.images.length
                        )}

                        className="
                        absolute
                        right-3
                        bg-black/60
                        text-white
                        px-3
                        py-2
                        rounded-full
                        hover:bg-purple-600">

                            ❯

                        </button>


                        </>


                        }




                        {/* Image dots */}

                        {
                        project.images &&
                        project.images.length > 1 &&


                        <div className="
                        absolute
                        bottom-3
                        flex
                        gap-2">


                        {
                        project.images.map((img,index)=>(


                            <button

                            key={index}

                            onClick={()=>setCurrentImage(prev=>({

                                ...prev,
                                [project.id]:index

                            }))}

                            className={`
                            w-3
                            h-3
                            rounded-full
                            ${
                            currentImage[project.id]===index
                            ?
                            "bg-purple-500"
                            :
                            "bg-gray-400"
                            }
                            `}

                            >


                            </button>


                        ))

                        }


                        </div>


                        }



                        </div>





                        {/* Content */}


                        <div className="p-6">



                            <h3 className="
                            text-2xl
                            font-bold">

                                {project.title}

                            </h3>





                            <p className="
                            text-gray-400
                            mt-3">

                                {project.description}

                            </p>





                            {/* Technology Tags */}


                            <div className="
                            flex
                            flex-wrap
                            gap-2
                            mt-4">


                            {
                            project.technology
                            .split(",")
                            .map((tech,index)=>(


                                <span

                                key={index}

                                className="
                                px-3
                                py-1
                                rounded-full
                                bg-purple-600/20
                                text-purple-300
                                text-sm">


                                    {tech.trim()}


                                </span>


                            ))

                            }


                            </div>





                            <div className="
                            flex
                            gap-4
                            mt-6">



                                <a

                                href={project.githubLink}

                                target="_blank"

                                className="
                                px-5
                                py-2
                                rounded-full
                                bg-purple-600
                                text-white">

                                    GitHub

                                </a>





                                {
                                project.demoLink &&


                                <a

                                href={project.demoLink}

                                target="_blank"

                                className="
                                px-5
                                py-2
                                rounded-full
                                border">


                                    Demo


                                </a>


                                }



                            </div>



                        </div>



                    </div>



                ))

                }



                </div>



            </div>



        </section>


    )


}



export default Projects;