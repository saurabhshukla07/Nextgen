import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Contact from './components/Contact'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App
