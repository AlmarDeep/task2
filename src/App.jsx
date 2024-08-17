
import './App.css'
import BestDeal from './componants/BestDeal/BestDeal'
import ContactUs from './componants/ContactUs/ContactUs'
import Featured from './componants/Featured/Featured'
import Footer from './componants/Footer/Footer'
import Hero from './componants/Hero/Hero'
import NavBar from './componants/NavBar/NavBar'
import Properties from './componants/Properties/Properties'
import VideoCards from './componants/VideoCards/VideoCards'
import VideoSection from './componants/VideoSection/VideoSection'

function App() {
  

  return (
    <>
      <NavBar />
      <Hero img1='/assets/img/banner-01.jpg'img2='/assets/img/banner-02.jpg' img3='/assets/img/banner-03.jpg'  />
      <Featured />
       <VideoSection />
       <VideoCards />
      <BestDeal />
      <Properties />
      <ContactUs />
      <Footer />
    </>
  )
}

export default App
