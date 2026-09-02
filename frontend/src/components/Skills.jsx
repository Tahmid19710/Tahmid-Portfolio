import { useEffect, useState } from "react";
import API from "../services/api";


function Skills(){


    const [skills,setSkills] = useState([]);



    useEffect(()=>{


        API.get("/skills")
        .then(response=>{

            setSkills(response.data);

        })
        .catch(error=>{

            console.log(error);

        });


    },[]);



    return(


        <section
        className="
        min-h-screen
        px-8
        py-20
        bg-[#09090f]
        "
        id="skills">


            <div className="
            max-w-5xl
            mx-auto">


                <h2 className="
                text-4xl
                font-bold
                text-purple-400
                text-center
                mb-12">

                    Skills

                </h2>



                <div className="
                grid
                md:grid-cols-2
                gap-8">


                {
                    skills.map(skill=>(


                    <div
                    key={skill.id}
                    className="
                    bg-white/5
                    border
                    border-white/10
                    rounded-2xl
                    p-6">


                        <div className="
                        flex
                        justify-between
                        mb-3">


                            <h3 className="
                            text-xl
                            font-semibold">

                                {skill.name}

                            </h3>


                            <span className="
                            text-purple-400">

                                {skill.percentage}%

                            </span>


                        </div>



                        <div className="
                        w-full
                        bg-gray-700
                        rounded-full
                        h-3">


                            <div

                            className="
                            bg-purple-500
                            h-3
                            rounded-full"

                            style={{
                                width:`${skill.percentage}%`
                            }}

                            >

                            </div>


                        </div>



                        <p className="
                        text-gray-400
                        mt-3">

                            {skill.category}

                        </p>



                    </div>


                    ))
                }


                </div>


            </div>


        </section>


    )


}


export default Skills;