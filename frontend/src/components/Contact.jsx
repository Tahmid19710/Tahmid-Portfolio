import { useState } from "react";
import API from "../services/api";


function Contact(){


    const [formData,setFormData] = useState({

        name:"",
        email:"",
        message:""

    });


    const [loading,setLoading] = useState(false);



    const handleChange = (e)=>{


        setFormData({

            ...formData,
            [e.target.name]: e.target.value

        });


    };




    const handleSubmit = async (e)=>{


        e.preventDefault();


        setLoading(true);



        try{


            await API.post("/contact",formData);



            alert("Message sent successfully!");


            setFormData({

                name:"",
                email:"",
                message:""

            });



        }
        catch(error){


            console.log(error);

            alert("Failed to send message");


        }
        finally{


            setLoading(false);


        }


    };





    return(


        <section
        id="contact"
        className="
        min-h-screen
        px-8
        py-20
        bg-[#09090f]
        ">


            <div
            className="
            max-w-5xl
            mx-auto">


                <h2
                className="
                text-4xl
                text-purple-400
                font-bold
                text-center
                mb-12">

                    Contact Me

                </h2>




                <form
                onSubmit={handleSubmit}
                className="
                bg-white/5
                border
                border-white/10
                rounded-3xl
                p-8
                space-y-5">



                    <input

                    type="text"

                    name="name"

                    value={formData.name}

                    onChange={handleChange}

                    placeholder="Your Name"

                    required

                    className="
                    w-full
                    p-4
                    rounded-xl
                    bg-black/30
                    border
                    border-gray-600"

                    />





                    <input

                    type="email"

                    name="email"

                    value={formData.email}

                    onChange={handleChange}

                    placeholder="Your Email"

                    required

                    className="
                    w-full
                    p-4
                    rounded-xl
                    bg-black/30
                    border
                    border-gray-600"

                    />





                    <textarea


                    name="message"

                    value={formData.message}

                    onChange={handleChange}

                    placeholder="Your Message"

                    rows="5"

                    required

                    className="
                    w-full
                    p-4
                    rounded-xl
                    bg-black/30
                    border
                    border-gray-600"


                    />






                    <button

                    type="submit"

                    disabled={loading}

                    className="
                    px-8
                    py-3
                    rounded-full
                    bg-purple-600
                    text-white
                    hover:bg-purple-700
                    transition
                    disabled:opacity-50">


                    {

                    loading ?

                    "Sending..."

                    :

                    "Send Message"

                    }


                    </button>




                </form>



            </div>



        </section>


    )


}


export default Contact;