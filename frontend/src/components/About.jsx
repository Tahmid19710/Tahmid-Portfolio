function About(){


    return(

        <section 
        id="about"
        className="
        min-h-screen
        px-8
        py-20
        bg-[#09090f]
        ">


            <div className="
            max-w-5xl
            mx-auto
            ">


                <h2 className="
                text-4xl
                font-bold
                text-center
                text-purple-400
                mb-10
                ">

                    About Me

                </h2>



                <div className="
                bg-white/5
                border
                border-white/10
                rounded-3xl
                p-10
                backdrop-blur-md
                ">


                    <p className="
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



                    <div className="
                    grid
                    md:grid-cols-3
                    gap-6
                    mt-10
                    ">


                        <div className="
                        p-6
                        bg-purple-600/20
                        rounded-2xl
                        ">

                            <h3 className="
                            text-xl
                            font-bold">

                                Machine Learning

                            </h3>

                            <p className="
                            text-gray-400
                            mt-2">

                                AI, Deep Learning,
                                Data Science

                            </p>


                        </div>




                        <div className="
                        p-6
                        bg-purple-600/20
                        rounded-2xl
                        ">

                            <h3 className="
                            text-xl
                            font-bold">

                                Software Development

                            </h3>

                            <p className="
                            text-gray-400
                            mt-2">

                                Spring Boot,
                                React,
                                Database

                            </p>


                        </div>




                        <div className="
                        p-6
                        bg-purple-600/20
                        rounded-2xl
                        ">

                            <h3 className="
                            text-xl
                            font-bold">

                                Research

                            </h3>

                            <p className="
                            text-gray-400
                            mt-2">

                                AI Research
                                and Innovation

                            </p>


                        </div>


                    </div>


                </div>


            </div>


        </section>


    )


}


export default About;