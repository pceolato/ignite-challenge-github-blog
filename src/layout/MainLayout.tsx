import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export function MainLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}