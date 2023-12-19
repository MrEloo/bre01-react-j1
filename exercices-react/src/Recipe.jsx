const ingredients = ["Oeufs", "Lait", "Farine", "Beurre"];


const Recipe = ()=> {
    return (
            <article>
          <h2>La recette de la pâte à crèpes</h2>
          <h3>Ingrédients</h3>
          <ul>
            {ingredients.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </article>
)}

export default Recipe
