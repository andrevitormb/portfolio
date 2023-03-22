import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from 'react-icons/ai'
import {FcGlobe} from 'react-icons/fc'
import '../styles/components/information.sass'



const InformationContainer = () => {
  return <section id='Information'>
    <div className='info-card'>
        <AiFillPhone id='phone-icon' />
        <div>
            <h3>Phone</h3>
            <p>+351 967899717</p>
        </div>
    </div>
    <div className='info-card'>
        <AiOutlineMail id='mail-icon' />
        <div>
            <h3>E-mail</h3>
            <p>contact@andremacedo.pt</p>
        </div>
    </div>
    <div className='info-card'>
        <AiFillEnvironment id='pin-icon' />
        <div>
            <h3>Location</h3>
            <p>Lisbon - Portugal <FcGlobe id='icon-portugal' /></p>
        </div>
    </div>
  </section>
}

export default InformationContainer