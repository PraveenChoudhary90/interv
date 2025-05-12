
import React from 'react'
import TopNav from './Component/TopNav'
import Footer from './Component/Footer'
import {Outlet} from "react-router-dom";
function Layout() {
  return (
    <>
    <TopNav/>
    <main style={{margin:"50px"}}>
    <Outlet />

    </main>
    <Footer/>
    </>
  )
}

export default Layout