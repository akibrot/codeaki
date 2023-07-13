import { CCarousel, CCarouselCaption, CCarouselItem } from '@coreui/react'
import Image from 'next/image'
function Services() {
    return (
        <div className="w-screen h-screen snap-start  workscont" id="services">



            <CCarousel controls indicators className='CCarousel' >


                <CCarouselItem className='CCarouselItem '>
                    <div className="cont sm:w-[60%] w-[90%]">
                        <Image src="https://reactjs.org/logo-og.png" loader={() => "https://reactjs.org/logo-og.png"} alt="" layout='fill' />
                        <CCarouselCaption className="d-none d-md-block">

                            <h5 className='text-4xl  font-light
                            '>Website Development</h5>

                            <p className='py-5  font-light '>
                                let  us design and develop your  website or web app for your bussines with leatest technologies
                            </p>


                        </CCarouselCaption>
                    </div>
                </CCarouselItem>
                <CCarouselItem className='CCarouselItem'>
                    <div className="cont sm:w-[60%] w-[90%]">
                        <Image src="https://reactjs.org/logo-og.png" loader={() => "https://reactjs.org/logo-og.png"} alt="" layout='fill' />
                        <CCarouselCaption className="d-none d-md-block">

                            <h5 className='text-4xl font-light
                            '>Mobile Application Development</h5>

                            <p className='py-5 font-light'>
                                we can develop your mobile app for android or ios platforms
                            </p>


                        </CCarouselCaption>
                    </div>
                </CCarouselItem>
                <CCarouselItem className='CCarouselItem'>
                    <div className="cont sm:w-[60%] w-[90%]">
                        <Image src="https://reactjs.org/logo-og.png" loader={() => "https://reactjs.org/logo-og.png"} alt="" layout='fill' />
                        <CCarouselCaption className="d-none d-md-block">

                            <h5 className='text-4xl font-light
                            '>Desktop software Development</h5>

                            <p className='py-5 font-light'>
                                we can develop your mobile app for android or ios platforms
                            </p>


                        </CCarouselCaption>
                    </div>
                </CCarouselItem>
                <CCarouselItem className='CCarouselItem'>
                    <div className="cont sm:w-[60%] w-[90%]">
                        <Image src="https://reactjs.org/logo-og.png" loader={() => "https://reactjs.org/logo-og.png"} alt="" layout='fill' />
                        <CCarouselCaption className="d-none d-md-block">

                            <h5 className='text-4xl font-light
                            '>Web apis & Back-End</h5>

                            <p className='py-5 font-light'>
                                You good at Frontend only ? let us design robust backend for you!
                            </p>


                        </CCarouselCaption>
                    </div>
                </CCarouselItem>
                <CCarouselItem className='CCarouselItem'>
                    <div className="cont sm:w-[60%] w-[90%]">
                        <Image src="https://reactjs.org/logo-og.png" loader={() => "https://reactjs.org/logo-og.png"} alt="" layout='fill' />
                        <CCarouselCaption className="d-none d-md-block">

                            <h5 className='text-4xl font-light
                            '>Ui - Ux</h5>

                            <p className='py-5 font-light'>
                                we design your ideas to the form which is easily translated to real project
                            </p>


                        </CCarouselCaption>
                    </div>
                </CCarouselItem>
            </CCarousel>
        </div>




    )
}

export default Services