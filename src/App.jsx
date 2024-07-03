
import './App.css'
import Appointment from './components/appointment/Appointment'
import Banner from './components/banner/Banner'
import Faq from './components/faq/Faq'
import Navbar from './components/navbar/Navbar'
import Service from './components/service/Service'
import Testimonial from './components/testimonial/Testimonial'
import WhoWeAre from './components/whoWeAre/WhoWeAre'

function App() {

  return (
    <>
      <div className='container mx-auto space-y-6'>
        <Navbar></Navbar>
        <div className=' space-y-28'>
          <Banner></Banner>
          <WhoWeAre></WhoWeAre>
          <Service></Service>
          <Testimonial></Testimonial>
          <Faq></Faq>
          <Appointment></Appointment>
        </div>
      </div>
    </>
  )
}

export default App
