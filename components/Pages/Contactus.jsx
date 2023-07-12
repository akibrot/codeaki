import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react'

function Contactus() {
    const route = useRouter()
    const [thankes, setthankes] = useState("");
    const [Email, setEmail] = useState("");
    const [Desc, setDesc] = useState("");
    const sendmessage = (e) => {
        e.preventDefault();
        // axios.post("https://emailsendserver.herokuapp.com/sendautoemail", { "Email": Email, "Desc": Desc }).then((res) => {
        //     console.log(res)

        //     setthankes("Thanks!, i will replay ASAP ):");


        // }).catch((err) => { throw err })
        setthankes("Thanks ! , we will replay ASAP ):");
        setTimeout(() => {
            setthankes("")
        }, 3000);

    };

    return (
        <div id="contactus" className="relative snap-start w-screen h-screen  bg-[#16191d]  flex items-center flex-wrap gap-2 justify-center">

            <div className=" w-full sm:w-1/2 flex flex-col items-center gap-4">
                <h1 className='text-gray-300'>contact <span onClick={() => route.push("/login")}>us</span></h1>

                <form
                    onSubmit={(e) => sendmessage(e)}
                >
                    <div className="sm:w-[50vw]">
                        <div className="w-full bg-white/10 my-3 flex items-center justify-center">
                            <input
                                className='w-[95%] bg-transparent placeholder:text-gray-400/70 pt-1 h-16 border-none text-gray-300/90 outline-none'

                                type="email"
                                name="email"
                                id=""
                                placeholder="your email"
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="w-full bg-white/10 my-3 flex items-center justify-center">
                            <textarea
                                className='w-[95%] placeholder:text-gray-400/70 pt-2 border-none outline-none bg-transparent text-gray-300/90'
                                required
                                name=""
                                id=""
                                cols="30"
                                rows="10"
                                placeholder="content"
                                onChange={(e) => setDesc(e.target.value)}
                            ></textarea>
                        </div>
                        <div className="pb-3 text-white/50">{thankes}</div>
                        <div className="">
                            <button className='hover:bg-blue-600 duration-300 text-white rounded-md  h-16  bg-blue-500 w-full'> send</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contactus