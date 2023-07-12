import { useState } from "react"

function CourseListGenerator({ data }) {
    const [show, setShow] = useState(true)
    return (
        <div className="w-full   font-light px-10 relative "><p className="cursor-pointer text-gray-300 duration-300  hover:text-blue-400 m-0  " onClick={() => setShow(!show)}>{data.General}</p>

            {
                data.category.map((e) => {
                    return <div key={e.course} className={show ? "relative ml-8 " : "relative ml-8 hidden"}><p className="cursor-pointer text-gray-300 duration-300  hover:text-blue-400 gap-0  m-0 ">{e.course}</p></div>

                })
            }
        </div>
    )
}

export default CourseListGenerator