function About(){


    const cards = [

        {
            title:"Machine Learning",
            description:"AI, Deep Learning, Data Science"
        },

        {
            title:"Software Development",
            description:"Spring Boot, React, Database"
        },

        {
            title:"Research",
            description:"AI Research and Innovation"
        }

    ];



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
            max-w-5xl
            mx-auto
            ">





                <h2

                className="
                text-4xl
                font-bold
                text-center
                text-purple-400
                mb-10
                ">


                    About Me


                </h2>








                <div

                className="
                bg-white/5
                border
                border-white/10
                rounded-3xl
                p-10
                backdrop-blur-md
                ">







                    <p

                    className="
                    text-gray-300
                    text-lg
                    leading-8
                    ">



                    I am Tahmid Anjum Mozumder, 
                    a Machine Learning Engineer and 
                    Full Stack Developer passionate about 
                    building intelligent systems using 
                    Artificial Intelligence, 
                    Machine Learning and modern software 
                    technologies.



                    </p>









                    <div

                    className="
                    grid
                    md:grid-cols-3
                    gap-6
                    mt-10
                    ">



                    {

                    cards.map((card,index)=>(


                        <div

                        key={index}

                        className="
                        p-6
                        bg-purple-600/20
                        rounded-2xl
                        hover:scale-105
                        transition
                        duration-300
                        ">




                            <h3

                            className="
                            text-xl
                            font-bold
                            text-white
                            ">


                                {card.title}


                            </h3>






                            <p

                            className="
                            text-gray-400
                            mt-2
                            ">


                                {card.description}


                            </p>





                        </div>



                    ))

                    }



                    </div>







                </div>







            </div>






        </section>


    )


}


export default About;