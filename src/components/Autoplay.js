import React, { useEffect, useState} from 'react'
import "./Autoplay.css";


const Autoplay = ({current, setCurrent, source}) => {

const [isPlaying, setIsPlaying]=useState(false)


useEffect(() => {
  console.log("hello from useEffect");
       let timer = setInterval(() => {
        if(isPlaying && current < source.length)
        setCurrent(prev=>prev+1)
        if(isPlaying && current === source.length-1) {
          setIsPlaying(false)
          setCurrent(0)
          clearInterval(timer)
      }


    }, 3000)
  
    return () => clearInterval(timer); 
   
}, [isPlaying, current])
 


  return (
    <div className="controller">
        {!isPlaying?
        ( <div onClick={()=>setIsPlaying(true)} className="outer-play">
            <div className="inner-play"></div>
          </div>) :
          <div onClick={()=>setIsPlaying(false)} className="outer-pause">
            <div className="inner-pause"></div>
            <div className="inner-pause"></div>
          </div>
        }
    </div>
  );
};

export default Autoplay;