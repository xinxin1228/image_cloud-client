import React, { memo } from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import { shallowEqual } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import Footer from 'components/client/Footer.tsx'
import { useAppSelector } from '@/store/hooks'

const Layout: React.FC = memo(() => {
  const theme = useAppSelector((state) => state.theme, shallowEqual)

  return (
    <ThemeProvider theme={theme}>
      <Footer />
      <NavLink to="/">Home</NavLink>
      <NavLink to="/personal">个人文件</NavLink>
      <NavLink to="/share">分享</NavLink>
      <NavLink to="/share/accept">我接受的分享</NavLink>
      <NavLink to="/share/release">我接受的分享</NavLink>
      <NavLink to="/collection">收藏</NavLink>
      <Outlet />
    </ThemeProvider>
  )
})

export default Layout
