import { useRef } from 'react'
import { useAnimationFrame } from 'framer-motion'

const AnimationFrame = () => {
  const ref = useRef(null)

  useAnimationFrame((t) => {
    const rotate = Math.sin(t / 10000) * 200
    const y = (1 + Math.sin(t / 1000)) * -50
    ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`
  })

  return (
    <div
      style={{
        perspective: '800px',
        width: '200px',
        height: '200px',
      }}
    >
      <div className="cube" ref={ref}>
        <div className="side front" />
        <div className="side left" />
        <div className="side right" />
        <div className="side top" />
        <div className="side bottom" />
        <div className="side back" />
      </div>
    </div>
  )
}
export default AnimationFrame
