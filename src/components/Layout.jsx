import React from 'react'
import Footer from './footer'
import Nav from './navbar'
import CustomCursorManager from './customCursor/context/manager'
import CustomCursor from './customCursor'
import '../styles/global.css'

export default function Layout({ children }) {
  return (
    <CustomCursorManager>
      <CustomCursor />
      <Nav />
      <main>{children}</main>
      <Footer />
    </CustomCursorManager>
  )
}
