import { posts, skills } from './data.js';

const Post = (props) =>{
    return (
         <ul>
          {posts.map((post, i) => (
            <li key={i}>
              <article>
                <img key={i} src={post.image} alt={`Image ${i}`} />
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </article>
            </li>
          ))}
        </ul>)
}

export default Post