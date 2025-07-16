import React, { useEffect } from 'react'
import { useLocation } from 'react-router'

function Scrolltop() {
    const {pathname}=useLocation()
    useEffect(()=>{
        window.scrollTo({top:0,behavior:'smooth'})
    },[pathname])
  return (
    <>
      
    </>
  )
}

export default Scrolltop
