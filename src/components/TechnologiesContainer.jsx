import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiReact,
  DiNodejsSmall,
  DiLinux,
  DiDatabase,
} from 'react-icons/di'

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
  { id: "react", name: "React", icon: <DiReact /> },
  { id: "linux", name: "Linux", icon: <DiLinux /> },
  { id: "database", name: "Database", icon: <DiDatabase /> ,}
];

import '../styles/components/technologies.sass'

const TechnologiesContainer = () => {
  return ( 
  <section className='technologies-container'>
    <h2>Technologies</h2>
    <div className='technologies-grid'>
      {technologies.map((tech) => (
        <div className='technology-card' id={tech.id} hey={tech.id}>
          {tech.icon}
          <div className='technology-info'>
            <h3>{tech.name}</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores earum quae, asperiores, architecto eveniet vitae, dicta suscipit ducimus magnam dolorum fuga? Officiis repellendus praesentium corrupti ullam nostrum quos quis cum!</p>
          </div>
        </div>
      ))}
    </div>
  </section>
)
}


export default TechnologiesContainer