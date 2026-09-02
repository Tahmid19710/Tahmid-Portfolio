import { useEffect, useState } from "react";
import API from "../services/api";


function Experience(){


    const [experiences,setExperiences] = useState([]);



    useEffect(()=>{


        API.get("/experience")
        .then(response=>{

            setExperiences(response.data);

        })
        .catch(error=>{

            console.log(error);

        });


    },[]);




    return(


        <section
        id="experience"
        className="
        min-h-screen
        px-8
        py-20
        bg-[#09090f]
        ">


            <div className="
            max-w-5xl
            mx-auto">


                <h2 className="
                text-4xl
                font-bold
                text-center
                text-purple-400
                mb-16">

                    Experience

                </h2>




                <div className="
                relative
                border-l
                border-purple-500
                ml-4">


                {
                experiences.map(exp=>(


                    <div
                    key={exp.id}
                    className="
                    mb-12
                    ml-8">


                        {/* Timeline Dot */}

                        <div className="
                        absolute
                        -left-3
                        w-6
                        h-6
                        rounded-full
                        bg-purple-600
                        border-4
                        border-[#09090f]">
                        
                        </div>




                        <div className="
                        bg-white/5
                        border
                        border-white/10
                        rounded-3xl
                        p-6
                        hover:scale-105
                        transition">



                            <h3 className="
                            text-2xl
                            font-bold">

                                {exp.position}

                            </h3>




                            <h4 className="
                            text-purple-400
                            text-lg
                            mt-2">

                                {exp.company}

                            </h4>




                            <p className="
                            text-gray-400
                            mt-2">

                                {exp.duration}

                            </p>




                            <p className="
                            text-gray-300
                            mt-4">

                                {exp.description}

                            </p>




                            <div className="
                            flex
                            flex-wrap
                            gap-2
                            mt-4">


                            {
                            exp.technology
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



                        </div>


                    </div>


                ))
                }


                </div>



            </div>


        </section>


    )



}


export default Experience;