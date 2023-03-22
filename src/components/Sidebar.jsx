import Avatar from '../img/me.jpg'

import '../styles/components/sidebar.sass'

const sidebar = () => {
  return (
    <aside id="sidebar">
      <p>image</p>
      <p className="title"> Development </p>
      <p>Social Network</p>
      <p>Contact</p>
      <a href="" className="btn">
        Download Curriculum
      </a>
    </aside>
  )
}

export default sidebar