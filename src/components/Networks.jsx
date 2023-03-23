import {FaLinkedin, FaGithub, FaInstagram} from "react-icons/fa"
import '../styles/components/networks.sass'

const socialNetworks = [
    {name: "linkedin", icon: <FaLinkedin/>, link:"https://www.linkedin.com/in/andrevitormacedo/"},
    {name: "github", icon: <FaGithub/>, link:"https://github.com/andrevitormb"},
    {name: "instagram", icon: <FaInstagram/>, link:"https://www.instagram.com/andrevitor_macedo/"},
];

const Networks = () => {
  return  <section id="social-networks">
    {socialNetworks.map((network) => (
        <a href={network.link} target="_blank" className="social-btn" id={network.name} key={network.name}>
            {network.icon}
        </a>
    ))}
  </section>
}

export default Networks