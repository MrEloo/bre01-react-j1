import { posts, skills } from './data.js';
import "bootstrap-icons/font/bootstrap-icons.css";


const Skill = (props) => {
    console.log(props)
  return (
      <ul>
          {skills.map((skill, i) => (
          <li key={i}><h3>{skill.name}</h3>            
          {[...Array(skill.grade)].map((_, index) => (
              <i key={index} className="bi bi-star-fill"></i>
            ))}
              
          </li>))}
      </ul>
)};
export default Skill;