import Image from "next/image"
import img from '../../public/react.svg'
import img2 from '../../public/16.webp'
function HomePage() {
    return (
        <div className="w-screen z-50 h-screen snap-start bg-[#0f1216]" id="home">
            <div className="sm:pt-[10.5rem] pt-[12rem] flex items-center justify-center px-10 sm:px-52 uppercase">
                <p className="text-white/70 sm:text-7xl text-4xl text-center sm:text-center font-light sm:font-bold">let us develop your dream software or website with lAtest technologies !</p>
                {/* <p>let us be your software mentors </p> */}
            </div>
            <div className="sm:pt-20 pt-[5rem]  flex items-center justify-center  ">
                <a href="#contactus">
                    <div className="shadow-sm font-light text-white   cursor-pointer duration-300 hover:bg-blue-600  h-14 sm:h-16 sm:w-[22rem] w-[18rem] z-50 bg-blue-500 flex items-center justify-center rounded-md">contact us</div>
                </a>
            </div>
            <div className=" fixed right-0   z--50 spin opacity-5 overflow-y-hidden top-12  text-black " >
                <Image src={img} alt="image homepage " width={600} height={600} />

            </div>


        </div>
    )
}

export default HomePage