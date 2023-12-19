import { useState, useEffect } from 'react';

export default function Diapo(props) {
    
    let intervalID;
    
    const images = [
        {
         src: "https://picsum.photos/id/122/600/400",
         alt: "image",
        },
        {
         src: "https://picsum.photos/id/9/600/400",
         alt: "image",
        },
        {
          src : "https://picsum.photos/id/403/600/400",
          alt: "image",
        },
        {
          src : "https://picsum.photos/600/400",
          alt: "image",
        },
        {
          src : "https://picsum.photos/id/238/600/400",
          alt: "image",
        },
        {
          src : "https://picsum.photos/id/287/600/400",
          alt: "image",
        }
]

        const [currentId, setCurrentId] = useState(0)
        
        useEffect(() => {
            intervalID = setInterval(() => {
                setCurrentId(currentId + 1)
                if(currentId === images.length - 1){
                    setCurrentId(0)
                }
            }, props.timer)
            
            return () => {
                clearInterval(intervalID)
            }
        })
        
        function handleMouseOver(e) {
            clearInterval(intervalID)
        }
        
        
        function handleMouseOut(e) {
        clearInterval(intervalID)
          intervalID = setInterval(() => {
                setCurrentId(currentId + 1)
                if(currentId === images.length - 1){
                    setCurrentId(0)
                }
            }, props.timer)
            
            return () => {
                clearInterval(intervalID)
            }
        }
        
        function handleLeftImg(e) {
            setCurrentId(currentId === 0 ? images.length - 1 : currentId - 1);
        }
        
        function handleRightImg(e) {
            if (currentId === images.length - 1) {
                  setCurrentId(0);
                } else {
                  setCurrentId(currentId + 1);
                }
                
        }
        
        function handleRandom(e) {
            // const randomTab = [0, 1, 2]
            const random = Math.floor((Math.random() * images.length ))
            
            setCurrentId(random)
        }
        

    
    return (
        <>
            <img src={images[currentId].src} />
            <button onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={handleLeftImg}>&lt;</button>
            <button onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={handleRightImg}>&gt;</button>
            <button onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={handleRandom}>Random</button>
            
        </>   
)}