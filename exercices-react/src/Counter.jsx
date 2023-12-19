import { useState, useEffect } from 'react';

export default function Counter () {
    const [counter, setCounter] = useState(0)
    const [warning, setWarning] = useState('')
    
    
    const handleSubmit = (e) => {
        e.preventDefault()
            console.log('salut')
    }
    
    const increment = (e) => {
        setWarning('')
        setCounter(counter + 1)
    }
    
    
    const decrement = (e) => {
        if(counter > 0){
         setCounter(counter - 1) 
        } else {
            setWarning('attention vous êtes en dessous de 0')
        }
        

    }
    
    return (
        <>
        
        <div>{counter}</div>
        
        <button onClick={increment}>Incrementer de +1</button>
        <button onClick={decrement} >Decrementer de -1</button>
        
        <p>{warning}</p>
        
        </>
        
        
)
}