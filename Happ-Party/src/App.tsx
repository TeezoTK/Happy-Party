import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './router'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// NEW: Smoothly scroll to #hash targets on route or hash change
function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    // If there's a hash, try to scroll to that element
    if (hash) {
      const id = hash.replace('#', '')
      // small timeout lets the page render before scrolling
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          // optional: adjust for sticky header
          window.scrollBy({ top: -80, behavior: 'instant' as ScrollBehavior })
        }
      }, 0)
    } else {
      // No hash: reset to top on route change
      window.scrollTo({ top: 0 })
    }
  }, [pathname, hash])

  return null
}

function App() {
  return (
    <BrowserRouter basename={__BASE_PATH__}>
      <ScrollToHash /> {/* NEW */}
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
