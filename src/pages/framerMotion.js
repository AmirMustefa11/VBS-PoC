import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useState } from 'react'
import AnimateBetweenComponents from './components/playMotion/animateBetweenDifferentComponent'
import './components/playMotion/motionFramer3D'
import MotionFramer3D from './components/playMotion/motionFramer3D'
import SharedLayoutAnimation from './components/playMotion/SharedLayoutAnimation'

function Example3D() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [60, -60])
  const rotateY = useTransform(x, [-100, 100], [-60, 60])

  return (
    <div
      style={{
        width: 100,
        height: 100,
        borderRadius: '50%',
        background:
          'radial-gradient(rgba(255,255,255,0), rgba(255,255,255,0.3))',
        perspective: 800,
      }}
    >
      <motion.div
        style={{
          width: 150,
          height: 150,
          borderRadius: 30,
          backgroundColor: '#fff',
          left: -25,
          top: -25,
          position: 'relative',
          x: x,
          y: y,
          rotateX: rotateX,
          rotateY: rotateY,
          cursor: 'grab',
        }}
        drag
        dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
        dragElastic={0.6}
        whileTap={{ cursor: 'grabbing' }}
      />
    </div>
  )
}
const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: 'spring', duration: 10, bounce: 0 },
        opacity: { delay, duration: 0.05 },
      },
    }
  },
}

function Input({ value, children, set, min = -200, max = 200 }) {
  return (
    <label>
      <code style={{ color: 'white', padding: '5px' }}>{children}</code>
      <input
        color="white"
        value={value}
        type="range"
        min={min}
        max={max}
        onChange={(e) => set(parseFloat(e.target.value))}
      />
    </label>
  )
}

const FramerMotion = (props) => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [rotate, setRotate] = useState(0)
  return (
    <>
      <div
        className="example"
        style={{
          backgroundColor: 'black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '50px',
        }}
      >
        <div>
          <motion.div
            className="box"
            style={{
              width: '200px',
              height: '200px',
              marginTop: '90px',
              borderRadius: '20px',
              border: '3px dotted white',
              pointerEvents: 'none',
            }}
            animate={{ x, y, rotate }}
            transition={{ type: 'spring' }}
          />
        </div>
        <div
          className="inputs"
          style={{
            display: 'flex',
            flexDirection: 'column',
            paddingLeft: '50px',
          }}
        >
          <Input value={x} set={setX}>
            move x
          </Input>
          <Input value={y} set={setY}>
            move y
          </Input>
          <Input value={rotate} set={setRotate} min={-180} max={180}>
            rotate
          </Input>
        </div>
        <div>
          <AnimateBetweenComponents />
        </div>
      </div>

      {/* second examp  */}
      <div
        style={{
          width: '100vw',
          backgroundColor: 'black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            padding: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <motion.svg
            width="400"
            height="400"
            viewBox="0 0 600 600"
            initial="hidden"
            animate="visible"
          >
            <motion.circle
              cx="100"
              cy="100"
              r="80"
              stroke="#ff0055"
              variants={draw}
              custom={1}
            />
            <motion.line
              x1="220"
              y1="30"
              x2="360"
              y2="170"
              stroke="#00cc88"
              variants={draw}
              custom={2}
            />
            <motion.line
              x1="220"
              y1="170"
              x2="360"
              y2="30"
              stroke="#00cc88"
              variants={draw}
              custom={2.5}
            />
            <motion.rect
              width="140"
              height="140"
              x="410"
              y="30"
              rx="20"
              stroke="#0099ff"
              variants={draw}
              custom={3}
            />
            <motion.circle
              cx="100"
              cy="300"
              r="80"
              stroke="#0099ff"
              variants={draw}
              custom={2}
            />
            <motion.line
              x1="220"
              y1="230"
              x2="360"
              y2="370"
              stroke="#ff0055"
              custom={3}
              variants={draw}
            />
            <motion.line
              x1="220"
              y1="370"
              x2="360"
              y2="230"
              stroke="#ff0055"
              custom={3.5}
              variants={draw}
            />
            <motion.rect
              width="140"
              height="140"
              x="410"
              y="230"
              rx="20"
              stroke="#00cc88"
              custom={4}
              variants={draw}
            />
            <motion.circle
              cx="100"
              cy="500"
              r="80"
              stroke="#00cc88"
              variants={draw}
              custom={3}
            />
            <motion.line
              x1="220"
              y1="430"
              x2="360"
              y2="570"
              stroke="#0099ff"
              variants={draw}
              custom={4}
            />
            <motion.line
              x1="220"
              y1="570"
              x2="360"
              y2="430"
              stroke="#0099ff"
              variants={draw}
              custom={4.5}
            />
            <motion.rect
              width="140"
              height="140"
              x="410"
              y="430"
              rx="20"
              stroke="#ff0055"
              variants={draw}
              custom={5}
            />
          </motion.svg>
        </div>
        <div>
          <SharedLayoutAnimation />
        </div>
      </div>

      <div
        style={{
          padding: '100px',
          background: 'black',
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
        }}
      >
        <div style={{ margin: '50px' }}>
          <Example3D />
        </div>
        <div style={{ margin: '30px' }}>
          <MotionFramer3D />
        </div>
        {/* <div>
          <SharedLayoutAnimation />
        </div> */}
      </div>
    </>
  )
}
export default FramerMotion
