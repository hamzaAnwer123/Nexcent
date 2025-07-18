import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import OurClients from "./components/OurClients"
import Section3 from "./components/Section3"
import Section4 from "./components/Section4"
import Section5 from "./components/Section5"
import Section6 from "./components/Section6"
import Section7 from "./components/Section7"
import Section8 from "./components/Section8"
import Section9 from "./components/Section9"

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Hero/>
        <OurClients/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Section6/>
        <Section7/>
        <Section8/>
        <Section9/>
        <Footer/>
      </div>
    </>
  )
}

export default App
