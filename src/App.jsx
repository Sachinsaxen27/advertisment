
import FirstPart from './Component/ContainerFirst/FirstPart'
import Navbar from './Component/Navbar/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router';
import AboutPage from './Component/About/AboutPage';
import Footbar from './Component/Footbar/Footbar';
import ServicePage from './Component/Service/ServicePage';
import CareerPage from './Component/Career/CareerPage';
import ContactPage from './Component/Contact/ContactPage';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<FirstPart />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/service' element={<ServicePage />} />
          <Route path='/career' element={<CareerPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
        <Footbar />
      </Router>
    </>
  )
}

export default App
