import NavbarHeader from './components/NavbarHeader'
import Welcome from './components/Welcome'
import Fetured from './components/Fetured'
import LatestReviews from './components/LatestReviews'
import ClassRestaurant from './components/ClassRestaurant'
import LatestVideos from './components/LatestVideos'
import Join from './components/Join'
import Footer from './components/Footer'
import './App.css'


function App() {

  return (
    <>
      <NavbarHeader />
      <Welcome />
      <Fetured/>
      <LatestReviews />
      <ClassRestaurant />
      <LatestVideos />
      <Join />
      <Footer />
  

    </>
  )
}

export default App
