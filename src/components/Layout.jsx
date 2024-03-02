import React from 'react'
import Footer from './footer'
import Nav from './navbar'
import '../styles/global.css'

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  )
}
