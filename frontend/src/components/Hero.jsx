import { useEffect, useState } from "react";
import API from "../services/api";

function Hero(){

const [personal, setPersonal] = useState(null);


useEffect(()=>{

    API.get("/personal")
.then(response=>{

    setPersonal(response.data);

})
    .catch(error=>{

        console.log(error);

    });


},[]);
    return(

        <section 
        id="home"
        className="min-h-screen flex items-center 
        px-8 pt-20 bg-[#09090f]">


            <div className="max-w-7xl mx-auto 
            grid md:grid-cols-2 gap-10 items-center">


                {/* Left Side */}

                <div>


                    <p className="text-purple-400 
                    text-xl mb-4">

                        👋 Hello, I'm

                    </p>


                    <h1 className="text-6xl 
                    font-bold leading-tight">


                       {personal?.name}


                    </h1>


                    <h2 className="text-3xl 
                    text-purple-400 mt-4">


                       
                        {personal?.title}

                    </h2>



                    <p className="text-gray-400 
                    text-lg mt-6 max-w-xl">


                       {personal?.description}


                    </p>



                    <div className="flex gap-5 mt-8">


                        <button 
                        className="
                        bg-purple-600 
                        px-8 py-3 
                        rounded-full
                        hover:bg-purple-700
                        transition">

                            View My Work

                        </button>



                        <button 
                        className="
                        border border-gray-500
                        px-8 py-3
                        rounded-full
                        hover:bg-white
                        hover:text-black
                        transition">

                            Get In Touch

                        </button>



                    </div>



                </div>



                {/* Right Side */}


                <div className="
                flex justify-center">


                  <div className="
w-80 h-80
rounded-full
overflow-hidden
border border-purple-500
bg-purple-600/20
flex items-center
justify-center">


<img

src={personal?.profileImage}

alt="Tahmid"

className="
w-full
h-full
object-cover
"

/>


</div>  


                </div>


            </div>


        </section>


    )


}


export default Hero;