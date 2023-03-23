import MainContent from './components/MainContent'
import Sidebar from './components/Sidebar'
import './styles/components/app.sass'
import BannerText from './js/components/banner-text'


function App() {
  
  return (
    <div id='portfolio' >
      <div className='name'>
        <h1>Andre Macedo</h1>
        <div className='banner-text'>
          <h2><BannerText/></h2>
        </div>
        
      </div>
      <Sidebar/>
      <MainContent />
    </div>
  )
}

export default App
