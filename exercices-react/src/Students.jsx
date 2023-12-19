const Students = (props) => {
        const notes = props.data.notes
        
        function computeAverage(values) {
            let sum = 0
            for(let i = 0 ; i < values.length ; ++i){
                sum += values[i]
                console.log(sum)
            }
            
            return sum / values.length
        }
        
    return (
         <article>
              <h3>{props.data.name}</h3>
              <ul>
                {notes.map((note, i) => (
                  <li key={i}>{note}</li>
                ))}
                <p> Moyenne :  { computeAverage(notes) } </p>
              </ul>
            </article>
        )
}

export default Students