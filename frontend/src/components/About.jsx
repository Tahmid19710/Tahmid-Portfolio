import { useEffect, useState } from "react";
import API from "../services/api";


function About(){


    const [personal,setPersonal] = useState(null);



    useEffect(()=>{


        const fetchPersonal = async()=>{


            try{


                const response = await API.get("/personal");


                setPersonal(response.data);


            }
            catch(error){

                console.log("About loading error:",error);

            }


        };


        fetchPersonal();


    },[]);





    return(


<section
id="about"
className="
min-h-screen
px-8
py-20
bg-[#09090f]
">


<div
className="
max-w-6xl
mx-auto
">


<h2
className="
text-4xl
font-bold
text-purple-400
text-center
mb-12
">

About Me

</h2>





<div
className="
grid
md:grid-cols-2
gap-10
items-center
">





<div>


<p
className="
text-gray-300
text-lg
leading-relaxed
">

I am {

personal?.name ||
"Tahmid Anjum Mozumder"

}, a {

personal?.title ||
"Machine Learning Engineer"

} passionate about building intelligent systems using Artificial Intelligence,
Machine Learning, and modern software technologies.

</p>



<p
className="
text-gray-300
text-lg
leading-relaxed
mt-5
">

My interests include Machine Learning, Deep Learning,
Computer Vision, and developing AI-based solutions
for real-world engineering problems.

</p>



<p
className="
text-gray-300
text-lg
leading-relaxed
mt-5
">

I enjoy designing data-driven systems, exploring
research ideas, and building scalable software
applications.

</p>





<div
className="
flex
gap-4
mt-8
">


{
personal?.cvLink &&

<a

href={personal.cvLink}

target="_blank"

className="
px-6
py-3
rounded-full
bg-purple-600
text-white
">

Download CV

</a>

}



{
personal?.github &&

<a

href={personal.github}

target="_blank"

className="
px-6
py-3
rounded-full
border
border-gray-500
text-white
">

GitHub

</a>

}




{
personal?.linkedin &&

<a

href={personal.linkedin}

target="_blank"

className="
px-6
py-3
rounded-full
border
border-gray-500
text-white
">

LinkedIn

</a>

}


</div>




</div>







<div
className="
bg-white/5
border
border-white/10
rounded-3xl
p-8
">


<div className="space-y-6">



<div>

<h3
className="
text-purple-400
text-xl
font-semibold
">

Research Interest

</h3>


<p className="text-gray-300 mt-2">

Artificial Intelligence,
Machine Learning,
Deep Learning,
Computer Vision

</p>

</div>





<div>

<h3
className="
text-purple-400
text-xl
font-semibold
">

Current Focus

</h3>


<p className="text-gray-300 mt-2">

Developing intelligent systems and
AI-driven applications.

</p>

</div>






<div>

<h3
className="
text-purple-400
text-xl
font-semibold
">

Technologies

</h3>


<p className="text-gray-300 mt-2">

Python, Java, React,
Spring Boot, SQL,
TensorFlow, PyTorch

</p>

</div>




</div>


</div>







</div>


</div>


</section>


    )

}


export default About;