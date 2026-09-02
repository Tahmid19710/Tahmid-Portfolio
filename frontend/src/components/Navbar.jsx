function Navbar(){

    return(

        <nav className="fixed top-0 left-0 w-full 
        bg-[#09090f]/80 backdrop-blur-md 
        border-b border-white/10 z-50">

            <div className="max-w-7xl mx-auto 
            flex justify-between items-center 
            px-8 py-5">


                <h1 className="text-2xl font-bold 
                text-purple-400">

                    Tahmid.

                </h1>


                <div className="flex gap-8 text-gray-300">

                    <a href="#home">
                        Home
                    </a>

                    <a href="#about">
                        About
                    </a>

                    <a href="#projects">
                        Projects
                    </a>

                    <a href="#contact">
                        Contact
                    </a>


                </div>


            </div>


        </nav>


    )

}


export default Navbar;