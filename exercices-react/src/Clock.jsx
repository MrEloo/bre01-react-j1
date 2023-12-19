import { useState, useEffect } from 'react';

export default function Clock () {
    const [hours, setHours] = useState(new Date().getHours())
    const [minutes, setMinutes] = useState(new Date().getMinutes())
    const [seconds, setSeconds] = useState(new Date().getSeconds())
    
    
    useEffect(() => {
        setInterval(() => {
            const now = new Date()
            setHours(now.getHours())
            setMinutes(now.getMinutes())
            setSeconds(now.getSeconds())
        }, 1000)
    })
    
    function getNewDate(){
        return `${hours} : ${minutes} : ${seconds}`
    }
    
    return ( <div>{getNewDate()}</div>
        )
}

