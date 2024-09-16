
import './App.css'
import FeatureSection from './components/FeatureSection/FeatureSection'
import Navbar from './components/Navbar/Navbar'
import Participate from './components/Participate/Participate'
// import Layout from './Layout'
import HackathonPage from './pages/HackathonPage/HackathonPage'

function App() {


  return (
    <>
<Navbar/>
      <HackathonPage/>
  <FeatureSection/>
  <Participate/>
    </>
  )
}

export default App
