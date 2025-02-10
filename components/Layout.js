import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import {useRouter} from 'next/router'
const Layout = ({children}) => {
  const router = useRouter()
  const noNavbar = ['/login', '/signUp', '/terms']
  const noFooter = ['/login', '/signUp' , '/terms']
  return (
    <div>
      {!noNavbar.includes(router.pathname) && <Navbar />}
      {children}
      {!noFooter.includes(router.pathname) && <Footer />}
    </div>
  )
}

export default Layout
