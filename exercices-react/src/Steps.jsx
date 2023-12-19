import Recipe from './Recipe.jsx'

const steps = [
"Faire un puits avec la farine et y verser les oeufs", 
"Battre les oeufs et la farine et y incorporer doucement le lait", 
"Faire fondre le beurre et l'ajouter au mélange"
];

const Steps = (props) => {
    return (
        <article>
            <Recipe />
              <h3>Étapes</h3>
              <ol>
                  {steps.map((step, i) => <li key={i}>{step}</li> ) }
              </ol>
        </article>
)}

export default Steps 