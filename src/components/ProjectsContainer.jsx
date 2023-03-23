import { useState } from 'react'
import '../styles/components/project.sass'
import Modal from './Modal'

const ProjectsContainer = () => {
  
  const [openModal, setOpenModal] = useState(false)

  
  return (
    <section className='project-container'>
      <h2>Projects</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sapiente sunt repudiandae vel obcaecati illum praesentium corporis ipsa, omnis assumenda nam officiis corrupti deleniti hic suscipit est repellendus impedit facere!</p>
      <div>
        <button onClick={() => setOpenModal(true)}>
          Abrir modal
        </button>
      </div>
      <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
        Conteudo do modal
      </Modal>
       
    </section>
  )
}

export default ProjectsContainer