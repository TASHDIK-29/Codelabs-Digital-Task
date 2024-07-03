
import './App.css'
import Banner from './components/banner/Banner'
import Navbar from './components/navbar/Navbar'
import WhoWeAre from './components/whoWeAre/WhoWeAre'

function App() {

  return (
    <>
      <div className='container mx-auto space-y-6'>
        <Navbar></Navbar>
        <div className=' space-y-28'>
          <Banner></Banner>
          <WhoWeAre></WhoWeAre>
        </div>
      </div>
    </>
  )
}

export default App
