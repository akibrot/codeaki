import Image from "next/image"
import react from '../../public/react.svg'
import next from '../../public/Nextjs-logo.svg'
import node from '../../public/node.png'
import mongo from '../../public/mongo.png'
import sql from '../../public/SQL.png'
import electron from '../../public/icon.ico'
import flutter from '../../public/flutter.png'
import mysql from '../../public/more.png'
import express from '../../public/express.png'

function Tech() {

    const data = [
        {
            title: 'Reactjs',
            imgurl: react
        },
        {
            title: 'Nextjs',
            imgurl: next
        }, {
            title: 'electron',
            imgurl: electron
        }, {
            title: 'flutter',
            imgurl: flutter
        },
        {
            title: 'Nodejs',
            imgurl: node
        }, {
            title: 'express',
            imgurl: express
        },
        {
            title: 'Mongodb',
            imgurl: mongo
        },

        {
            title: 'sql',
            imgurl: sql
        }, {
            title: 'tailwind css , java ,c++ ',
            imgurl: mysql
        },]
    // this is tech comp
    return (
        <div id="tech" className="relative snap-start w-screen h-screen  bg-[#16191d]  flex items-center flex-wrap gap-2 justify-center">

            <div className="snap-start h-screen sm:w-[60vw] w-[99vw] m-auto flex items-center justify-center flex-wrap py-32  sm:gap-4 gap-2  ">
                {
                    data.map((e) =>
                        <div key={e.imgurl} title={e.title} className=" sm:w-52 sm:h-[9rem] w-[6.5rem]  rounded hover:scale-105 duration-300  bg-white/10 flex items-center justify-center">
                            <Image src={e.imgurl} width={120} height={120} />
                        </div>

                    )
                }

            </div>
        </div>
    )
}

export default Tech