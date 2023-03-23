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
  { id: "html", name: "HTML5", icon: <DiHtml5 />, text: "HTML5: Improved semantics with tags such as <header>, <nav>, <section>, <article>, <aside>, media playback without plugins with <video> and <audio>, and enhanced forms with new input types and validations." },
  { id: "css", name: "CSS3", icon: <DiCss3 />, text: "CSS: Selectors and specificity for targeting HTML elements, box model and layout for flexible page design, and styling and animation properties for customizing visual appearance and effects." },
  { id: "js", name: "JavaScript", icon: <DiJsBadge />, text: "DOM manipulation: JavaScript can modify and interact with the Document Object Model (DOM) of a web page, allowing for dynamic updates and changes to content and styles. Event handling JavaScript can detect and respond to user events, such as clicks and keyboard input, allowing for interactive user interfaces. Functions and variables: JavaScript allows for the creation of reusable code through functions and variables, allowing for efficient and modular programming. APIs and libraries: JavaScript has access to a wide range of APIs and libraries, such as jQuery and React, that provide additional functionality and simplify common programming tasks." },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall />, text: "Node.js: Asynchronous programming for handling multiple requests simultaneously, modules and packages for dependency management and added functionality, built-in file system modules for file manipulation, and web server development using frameworks like Express.js and Hapi.js."},
  { id: "react", name: "React", icon: <DiReact />, text: "React: Component-based architecture for reusable UI elements, virtual DOM for efficient updates and rendering, state management for centralized changes, JSX for declarative and expressive UI components, and hooks for added functionality and simplified programming."},
  { id: "linux", name: "Linux", icon: <DiLinux />, text: "Setting up a Linux server is a task that requires technical knowledge and specific skills. First, it is important to choose a Linux distribution suitable for your needs, such as Ubuntu, Debian or CentOS. Next, you need to configure the operating system, installing the necessary tools for managing services and networks. After that, it is important to configure the server security, including firewalls, strong passwords and file permissions management. Finally, it is necessary to monitor and troubleshoot the server, ensuring that it is always running efficiently and securely. Setting up a Linux server is a complex task, but it can be rewarding for anyone seeking total control over their infrastructure and online services." },
  { id: "database", name: "Database", icon: <DiDatabase /> , text: "Essential skills for working with databases include knowledge of SQL, efficient database design, management of database management systems, data security, and problem-solving."}
];

import '../styles/components/technologies.sass'

const TechnologiesContainer = () => {
  return ( 
  <section className='technologies-container'>
    <h2>Technologies</h2>
    <div className='technologies-grid'>
      {technologies.map((tech) => (
        <div className='technology-card' id={tech.id} key={tech.id}>
          {tech.icon}
          <div className='technology-info'>
            <h3>{tech.name}</h3>
            <p>{tech.text}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
)
}


export default TechnologiesContainer