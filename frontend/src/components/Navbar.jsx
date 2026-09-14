import { useState } from "react";


function Navbar(){


    const [open,setOpen] = useState(false);



    const links = [
        {
            name:"Home",
            href:"#home"
        },
        {
            name:"About",
            href:"#about"
        },
        {
            name:"Education",
            href:"#education"
        },
        {
            name:"Experience",
            href:"#experience"
        },
        {
            name:"Projects",
            href:"#projects"
        },
        {
            name:"Research",
            href:"#research"
        },
        {
            name:"Contact",
            href:"#contact"
        }
    ];




    return(


        <nav
        className="
        fixed
        top-0
        left-0
        w-full
        bg-[#09090f]/80
        backdrop-blur-md
        border-b
        border-white/10
        z-50">





            <div
            className="
            max-w-7xl
            mx-auto
            flex
            justify-between
            items-center
            px-8
            py-5">






                <h1
                className="
                text-2xl
                font-bold
                text-purple-400
                cursor-pointer">


                    Tahmid.


                </h1>








                {/* Desktop Menu */}

                <div
                className="
                hidden
                md:flex
                gap-8
                text-gray-300">



                {
                    links.map((link,index)=>(


                        <a

                        key={index}

                        href={link.href}

                        className="
                        hover:text-purple-400
                        transition
                        duration-300">


                            {link.name}


                        </a>



                    ))
                }



                </div>







                {/* Mobile Button */}


                <button

                onClick={()=>setOpen(!open)}

                className="
                md:hidden
                text-white
                text-3xl">


                    ☰


                </button>







            </div>









            {/* Mobile Menu */}


            {

            open &&


            <div

            className="
            md:hidden
            px-8
            pb-6
            flex
            flex-col
            gap-5
            text-gray-300">



            {


            links.map((link,index)=>(


                <a

                key={index}

                href={link.href}

                onClick={()=>setOpen(false)}

                className="
                hover:text-purple-400
                transition">


                    {link.name}


                </a>


            ))



            }



            </div>


            }




        </nav>


    )



}


export default Navbar;