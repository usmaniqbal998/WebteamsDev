import React from 'react'
import Footer from './footer'
import Nav from './navbar'
import CustomCursorManager from './customCursor/context/manager'
import CustomCursor from './customCursor'

const PageLayout = ({ children }) => {
  return (
    <CustomCursorManager>
      <CustomCursor />
      <Nav />
      <main>{children}</main>
      <Footer />
    </CustomCursorManager>
  )
}

export default PageLayout
