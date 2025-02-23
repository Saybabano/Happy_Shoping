import React from 'react'
import Navbar from '../Components/Navbar'
import MeeshoPage from '../Components/MeeshoPage'
import SideBar from '../Components/SideBar'
import ProdectMeesho from '../Components/ProdectMeesho'
import Footer from '../Components/Footer'

function HomeMeesho() {
  return (
   <>
    <Navbar/>
    <MeeshoPage/>
    <div className="flex">
        <div className="w-1/4 p-4">
          <SideBar />
        </div>
        <div className="w-3/4 p-4">
          <ProdectMeesho />
        </div>
      </div>
      <Footer/>
   </>
  )
}

export default HomeMeesho
