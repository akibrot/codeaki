import { BiMenu, BiX } from 'react-icons/bi'
import reactjs from '../../public/react.svg'
import next from '../../public/Nextjs-logo.svg'
import node from '../../public/node.png'
import mongo from '../../public/mongo.png'
import sql from '../../public/SQL.png'
import electron from '../../public/icon.ico'
import flutter from '../../public/flutter.png'
import mysql from '../../public/more.png'
import express from '../../public/express.png'
//portololio images
import eth from "../../public/etheritage.png";
import api from "../../public/nodejsapi.png";
import mobile from "../../public/mobile.PNG";
import mobile1 from "../../public/menged.png";
import mobile11 from "../../public/zometeanspoer.png";
import empty from "../../public/empty.png";
//
import Image from 'next/image'
import { FaArrowCircleUp, FaCopyright, FaGithub, FaMailBulk, FaPhone, FaTelegram, FaYoutube } from 'react-icons/fa'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from 'react'
import { set } from 'mongoose'
function Mobile() {
    useEffect(() => {
        AOS.init({
            duration: 1500,
        });
    }, []);

    const techImage = [
        {
            id: 1,
            title: "Reactjs",
            image: reactjs
        }, {
            id: 2,
            title: "Nextjs",
            image: next
        }, {
            id: 3,
            title: "Electron",
            image: electron
        }, {
            id: 4,
            title: "Flutter",
            image: flutter
        }, {
            id: 5,
            title: "nodejs",
            image: node
        }, {
            id: 6,
            title: "express",
            image: express
        },
        {
            id: 7,
            title: "Mongodb",
            image: mongo
        }, {
            id: 8,
            title: "...etc",
            image: mysql
        },
    ]

    const Timelines = [
        {
            id: 3,
            direction: "left",
            image: mobile,
            description:
                "Mobile app developed for gedeo zone curlture and tourism affairs , you can download the app from app stores. ",
            date: "2023",
        }, {
            id: 4,
            direction: "right",
            image: mobile11,
            description:
                "Full-Stack desktop software developed for Gedeo zone transport department , developed in NEXTRON Technologies.",
            date: "2023",
        },
        {
            id: 1,
            direction: "left",
            image: eth,
            description:
                "This project called ethiopian heritages in everywhere developed in  MERN STACK with deep links algorithm.",
            date: "2022",
        },
        {
            id: 2,
            direction: "right",
            image: api,
            description:
                "This is nodejs with express and mongoDb api designed for the above system  and it is up and running on the server.",
            date: "2022",
        },



    ];
    const [openMenu, setOpenMenu] = useState(false)

    return (
        <div className='sm:hidden '>
            {/* navBar */}
            <div id='homemobile' className='flex justify-between items-center px-10 pt-5 relative' >
                <div className='text-gray-200 font-light text-2xl'>
                    <div>code-aki</div>
                </div>
                <div onClick={() => setOpenMenu(!openMenu)}>
                    {
                        openMenu ? <BiX color='gray' size={35} /> : <BiMenu color='gray' size={35} />
                    }

                </div>
                <div onClick={() => setOpenMenu(false)} className={openMenu ? 'duration-300 fixed flex z-50 pb-20 top-[4.5rem] left-0 w-screen h-screen bg-black/90  justify-center flex-col gap-2' : 'hidden'}>
                    <div className='bg-blue-500 mx-20 py-2 flex items-start'>
                        <a className='pl-5' href="#techmobile">Technologies</a>

                    </div>
                    <div className='bg-blue-500 mx-20 py-2 flex items-start'>
                        <a className='pl-5' href="#portmobile">Portofolio</a>

                    </div>
                    <div className='bg-blue-500 mx-20 py-2 flex items-start'>
                        <a className='pl-5' href="#servmobile">Services</a>

                    </div>
                    <div className='bg-blue-500 mx-20 py-2 flex items-start'>
                        <a className='pl-5' href="#contactmobile">Contact us</a>

                    </div>

                </div>
            </div>
            {/* homepage */}
            <div className='text-gray-200 font-light px-12 mt-20'>
                <div data-aos="fade-right" className='text-4xl'>Simply</div>
                <div data-aos="fade-up" className='ml-1 pt-1'>we design, develop and teach !</div>
            </div>
            <div data-aos="fade-up" className='text-gray-200 font-light text-2xl px-12 mt-10'>
                <p>
                    LET US DEVELOP YOUR DREAM SOFTWARE OR WEBSITE WITH LATEST TECHNOLOGIES !
                </p>
            </div>
            {/* technologies */}
            <div id='techmobile' data-aos="fade-right" className='text-gray-200 w-full  flex items-center justify-center mt-10  '>
                <div className='bg-blue-500 duration-300  flex items-center justify-center p-3 mx-12 w-full rounded font-light text-3xl'>Technologis</div>
            </div>
            <div data-aos="fade-up">
                <p className='font-extralight px-12 mt-10  text-gray-200 text-2xl'>we are familiar with the legacy development technologis and the treanding once !</p>
            </div>
            <div className='w-full'>
                <div className='py-10 mt-5 bg-gray-800/50 px-12 flex flex-wrap items-center w-full justify-center gap-3'>
                    {
                        techImage.map((e) => {
                            return <div key={e.image} data-aos="fade-up" className='h-20 w-32 bg-white flex items-center justify-center'>
                                <Image key={e.id} src={e.image} width={70} height={70} alt='image' />
                            </div>
                        })
                    }
                </div>
            </div>
            {/* tech end */}
            {/* portofolio */}
            <div id='portmobile' data-aos="fade-right" className='flex  items-center justify-center text-gray-200'>
                <p className='px-12  text-3xl font-light my-5'>
                    Portofolio
                </p>

            </div>
            <div data-aos="fade-up" className='text-gray-200 px-5 font-light text-center pb-2'>
                <p >These are our recentlly published works that are already being used by diffrent organizations.</p>
            </div>
            {
                Timelines.map((e) => {
                    return <div data-aos="fade-up" key={e.id} className='mx-8 py-6'>
                        <div>
                            <Image src={e.image} />
                        </div>
                        <div className='font-light text-gray-200'>{e.description}</div>
                    </div>
                })
            }

            {/* end portofolio */}
            {/* services we provide */}
            <div id='servmobile' className='bg-gray-900 py-10'>

                <div data-aos="fade-down" className='flex  text-gray-200 font-light flex-col items-center justify-center '>
                    <p className='px-12 text-3xl  mt-5'>
                        Services.
                    </p>
                    <p >we develope for everyy platforms.</p>
                </div>
                <div data-aos="fade-up" className='flex    items-center justify-center relative my-10 '>
                    <Image src={reactjs} width={200} height={300} className='' />
                    {/* <div className='absolute text-red-200 text-2xl font-extrabold  mt-[-8px]'>Development</div> */}
                    <div data-aos="fade-left" className='absolute left-5 text-gray-200   mt-[-8px]'>Website   </div> <div data-aos="fade-right" className='absolute right-4  text-gray-200   mt-[-8px]'>Teaching </div>
                    <div data-aos="fade-down" className='absolute top-7 left-24  text-gray-200   mt-[-8px]'>
                        <p className='rotate-[57deg]'>
                            Mobile </p> </div>
                    <div data-aos="fade-down" className='absolute top-6 right-20  text-gray-200   mt-[-8px]'>
                        <p className='-rotate-[57deg]'>
                            Desktop </p> </div>
                    <div data-aos="fade-up" className='absolute bottom-4 left-20  text-gray-200   mt-[-8px]'>
                        <p className='-rotate-[57deg]'>
                            Back-End</p> </div>
                    <div data-aos="fade-up" className='absolute bottom-6 right-24  text-gray-200   mt-[-8px]'>
                        <p className='rotate-[57deg]'>
                            Ui - Ux </p> </div>

                </div>
            </div>

            {/* services end */}
            {/* contact us */}
            <div id='contactmobile' data-aos="fade-right" className='  pt-10 text-gray-200 font-light   '>
                <p className='px-9 text-4xl  '>
                    contact us.
                </p>
            </div>
            <div className='px-12'>
                <div data-aos="fade-up" className='flex gap-2 items-center pt-3'>
                    <FaPhone color='white' />
                    <p className='text-gray-200 font-light'> +251934680311</p>

                </div>
                <div data-aos="fade-up" className='flex gap-2 items-center pt-1'>
                    <FaPhone color='white' />
                    <p className='text-gray-200 font-light'> +251989489349</p>

                </div>
                <div className='flex gap-2 items-center pt-1 font-light'>
                    <FaMailBulk color='white' />
                    <p className='text-gray-200 pb-4'> akibrotsamuelas@gmail.com</p>

                </div>
            </div>
            {/* end */}
            <div className='flex relative items-center justify-center gap-3 h-14 py-6 pb-8'>
                <FaTelegram size={25} className='text-blue-500' />
                <FaYoutube size={35} className='text-[#f82323]' />
                <FaGithub size={25} color='gray' />
                {/* <div className='pb-10 absolute top-[-3rem] right-6'>

                    <a href="#homemobile" title='go to homepage'>
                        <FaArrowCircleUp size={40} className='text-gray-400' />
                    </a>
                </div> */}
            </div>

        </div>
    )
}

export default Mobile