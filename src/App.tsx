import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from '@/components/ui/header-3'
import { Footer } from '@/components/layout/Footer'
import { useLenis } from '@/hooks/useLenis'

import { Home } from '@/pages/Home'
import { About } from '@/pages/About'
import { Services } from '@/pages/Services'

function App() {
  useLenis()

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
