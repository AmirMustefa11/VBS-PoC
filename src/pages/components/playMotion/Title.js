import React, { useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedText from './AnimatedText'
// import './styles.css'

export default function Title() {
  const [replay, setReplay] = useState(true)
  // Placeholder text data, as if from API
  const placeholderText = [
    { type: 'heading1', text: 'Framer Motion Elements' },
    {
      type: 'heading2',
      text: 'Animating text, 2D and 3D elements!',
    },
  ]

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  }

  // Quick and dirt for the example
  const handleReplay = () => {
    setReplay(!replay)
    setTimeout(() => {
      setReplay(true)
    }, 600)
  }

  return (
    <motion.div
      className="App"
      initial="hidden"
      // animate="visible"
      animate={replay ? 'visible' : 'hidden'}
      variants={container}
    >
      <div className="container-txt">
        {placeholderText.map((item, index) => {
          return <AnimatedText {...item} key={index} />
        })}
      </div>
      <button className="title-btn-text" onClick={handleReplay}>
        Replay <span>⟲</span>
      </button>
    </motion.div>
  )
}
