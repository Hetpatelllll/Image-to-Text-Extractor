"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { FaImage } from "react-icons/fa6";
import convertor from './../lib/convertor';
import Textcard from "@/components/Cards/textcard";


export default function Home() {

  const imgInputRef: any = useRef(null)
  const [processing, setProcessing] = useState<boolean>(false)
  const [texts, setTexts] = useState<Array<string>>([])

  const openBrowse =async () => {
    await imgInputRef.current?.click();
  }

  const cvt = async (url: string) => {
    if (url.length) {
      setProcessing(true)
      await convertor(url).then((txt:string) => {
        let copyText : Array<string> = texts;
        copyText.push(txt)
        setTexts(copyText)
        // console.log(text)
      })
      setProcessing(false)
    }
  }


  return (
    <main className='text-white' >
      <h2 className="px-5 pt-10 text-center md:text-6xl text-3xl font-[800] ">Image to text <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text"> Extractor </span></h2>

      <input type="file" ref={imgInputRef} hidden required
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          if (e.target.files) {
            const url: string = URL.createObjectURL(e.target.files[0])
            // console.log(url);
            cvt(url);
          }
        }} />

      <div className="w-full md:p-20 p-5 flex items-center justify-center">
        <div onClick={openBrowse}  className=" w-full p-5 bg-[#2c2c2c] min-h-[50vh] rounded-xl flex items-center justify-center cursor-pointer">
          <div className="flex items-center justify-center flex-col">
            <p className="text-center text-4xl font-[700] text-[#898989]">

              {
                processing ? "Processing Image" : "Drop Your Image here..."
              }

            </p>
            <span className="text-[150px] text-[#898989]" ><FaImage className={processing ? "animate-pulse" : ""} /></span>
          </div>
        </div>
      </div>

      <div className="mt-10 md:px-20 px-5 space-y-10">
        {
          texts?.map((t,i)=>{
            return <Textcard t={t} i={i} />
          })
        }
      </div>
    </main>
  );
}
