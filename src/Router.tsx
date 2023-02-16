import { Routes, Route } from 'react-router-dom'
import { MainLayout } from './layout/MainLayout'
import { Home } from './pages/Home'
import { Post } from './pages/Post'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:postNumber" element={<Post />} />
      </Route>
    </Routes>
  )
}