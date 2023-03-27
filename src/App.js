import React from 'react'
import { Brand,CTA ,Navbar } from './components'
import { Features,Blog,Footer,Header, Possiblilty,WhatGTP3 } from './containers'
import './App.css'

function App() {
  return (
    <div className='App'>
        <div className='gradient__bg'>
            <Navbar/>
            <Header/>
        </div>
        <Brand/>
        <WhatGTP3/>
        <Features/>
        <Possiblilty/>
        <CTA/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default App