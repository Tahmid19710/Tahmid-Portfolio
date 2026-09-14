import { useEffect, useState } from "react";
import API from "../services/api";


function Hero(){

    const [personal,setPersonal] = useState(null);


    useEffect(()=>{

        const fetchPersonal = async()=>{

            try{

                const response = await API.get("/personal");

                console.log("PERSONAL DATA:", response.data);


                const data = Array.isArray(response.data)
                    ? response.data[0]
                    : response.data;


                setPersonal(data);


            }
            catch(error){

                console.log(
                    "Personal info loading error:",
                    error
                );

            }

        };


        fetchPersonal();


    },[]);




    const imageUrl = personal?.profileImage
        ? personal.profileImage.startsWith("http")
            ? personal.profileImage
            : `https://tahmid-portfolio-backend.onrender.com${personal.profileImage}`
        : null;




    return(

<section
id="home"
className="
min-h-screen
flex
items-center
px-8
pt-20
bg-[#09090f]
"
>


<div
className="
max-w-7xl
mx-auto
grid
md:grid-cols-2
gap-10
items-center
"
>


{/* LEFT */}

<div>


<p
className="
text-purple-400
text-xl
mb-4
"
>
👋 Hello, I'm
</p>




<h1
className="
text-5xl
md:text-6xl
font-bold
leading-tight
text-white
"
>

{
personal?.name
||
"Tahmid Anjum Mozumder"
}

</h1>




<h2
className="
text-3xl
text-purple-400
mt-4
"
>

{
personal?.title
||
"Machine Learning Engineer"
}

</h2>




<p
className="
text-gray-400
text-lg
mt-6
max-w-xl
"
>

{
personal?.description
||
"Building intelligent systems using Artificial Intelligence, Machine Learning and modern software technologies."
}

</p>




<div
className="
flex
gap-5
mt-8
"
>


<a
href="#projects"
className="
bg-purple-600
px-8
py-3
rounded-full
hover:bg-purple-700
transition
text-white
"
>
View My Work
</a>




<a
href="#contact"
className="
border
border-gray-500
px-8
py-3
rounded-full
hover:bg-white
hover:text-black
transition
text-white
"
>
Get In Touch
</a>



</div>


</div>





{/* RIGHT IMAGE */}


<div
className="
flex
justify-center
"
>


<div
className="
w-80
h-80
rounded-full
overflow-hidden
border
border-purple-500
bg-purple-600/20
flex
items-center
justify-center
"
>


{

imageUrl

?

<img

src={imageUrl}

alt="Tahmid"

className="
w-full
h-full
object-cover
"

/>


:

<span className="text-7xl">
👨‍💻
</span>

}



</div>


</div>




</div>


</section>

    )

}


export default Hero;