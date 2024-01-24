import Link from 'next/link'
import React from 'react'
import { MdArrowOutward } from "react-icons/md";


const Header = () => {
    return (
        <div className='text-white w-full flex justify-between items-center md:px-20 py-5 px-5 sticky top-0 left-0 backdrop-blur-xl' >
            <div>
                <Link href={"/"} className='font-[800] text-3xl'>Get Text</Link>
            </div>
            <div>
                <a href='https://github.com/naptha/tesseract.js#tesseractjs' target='_blank' className='flex items-center justify-center bg-white text-black text-base font-[600] px-5 py-2 rounded-md gap-1 transition-all hover:bg-[#d8d6d6]'>
                    <span>Github</span>
                    <span><MdArrowOutward/></span>
                </a>
            </div>
        </div>
    )
}

export default Header