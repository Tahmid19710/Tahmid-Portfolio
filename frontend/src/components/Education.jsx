import { useEffect, useState } from "react";
import API from "../services/api";


function Education(){


    const [education,setEducation] = useState([]);



    useEffect(()=>{


        API.get("/education")
        .then(response=>{

            setEducation(response.data);

        })
        .catch(error=>{

            console.log(error);

        });


    },[]);



    return(

        <section
        id="education"
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
                text-purple-400
                text-center
                mb-12">

                    Education

                </h2>



                <div className="
                border-l
                border-purple-500
                space-y-10
                ml-5">


                {
                    education.map(item=>(


                    <div
                    key={item.id}
                    className="
                    ml-8
                    bg-white/5
                    border
                    border-white/10
                    rounded-2xl
                    p-6
                    ">


                        <div className="
                        w-4
                        h-4
                        bg-purple-500
                        rounded-full
                        -ml-11
                        mb-4
                        ">


                        </div>



                        <h3 className="
                        text-2xl
                        font-bold">

                            {item.degree}

                        </h3>



                        <h4 className="
                        text-purple-400
                        mt-2">

                            {item.institution}

                        </h4>



                        <p className="
                        text-gray-400
                        mt-2">

                            {item.duration}

                        </p>



                        <p className="
                        text-gray-300
                        mt-4">

                            {item.description}

                        </p>



                    </div>


                    ))
                }


                </div>


            </div>


        </section>


    )


}


export default Education;