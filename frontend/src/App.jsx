import { useState, useEffect, useRef } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar.jsx'
import Home from './Home.jsx'

function Loader({ onFinish }) {
  const [exit, setExit] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2
    }
    const fallback = setTimeout(() => {
      handleEnd()
    }, 3000)

    return () => clearTimeout(fallback)
  }, [])

  const handleEnd = () => {
    setExit(true)

    setTimeout(() => {
      onFinish()
    }, 600)
  }

  return (
    <div className={`loader-wrapper ${exit ? 'loader-exit' : ''}`}>
      <video
        ref={videoRef}
        muted
        playsInline
        onEnded={handleEnd}
        onLoadedData={() => videoRef.current?.play()}
        className="loader-video"
      >
        <source src="/loading.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

function App() {
  const [loading, setLoading] = useState(true)

  if (loading) {
    return <Loader onFinish={() => setLoading(false)} />
  }

  return (
    <div className="hide-scrollbar">
      <Navbar />
      <Home />
    </div>
  )
}

export default App
