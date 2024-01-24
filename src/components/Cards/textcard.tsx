import { useState } from "react";


const textcard = ({t,i}:{t:string; i:number }) => {

  const [cpy,setCpy] = useState(false);

  const copyText = (txt: string) => {
    setCpy(true);
    navigator.clipboard.writeText(txt);
  }

  return (
    <div>
      <div className="flex w-full items-center justify-between mb-3 px-3 ">
        <p>{`${i+1}) `}{new Date().toUTCString()}</p>
        <button onClick={()=>copyText(t)} className="bg-white text-black md:text-base text-sm rounded-md px-5 py-2 transition-all hover:bg-[#d8d6d6] ">{cpy?"Copied":"Copy"} </button>
      </div>
      <textarea className="p-5 outline-none w-full min-h-[30vh] bg-[#2c2c2c] rounded-xl " defaultValue={t}></textarea>
    </div>
  )
}

export default textcard