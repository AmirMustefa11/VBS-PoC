import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import DraggableList from './components/reactSpring/animation2'
import Deck from './components/reactSpring/animation3'
import SpringAnimatedTitle from './components/reactSpring/SpringAnimatedTitle'
import SpringBox from './components/reactSpring/SpringBox'
import Goo from './components/reactSpring/SprintGoo'
import UseMeasure from './components/reactSpring/useMeasure'
import Animation4 from './components/SpringAnimation/animation4'

export default function SpringApp() {
  const [open, toggle] = useState(false)
  const [bind, { width }] = UseMeasure()
  const props = useSpring({
    width: open ? width : 0,
    backgroundColor: open ? 'hotpink' : 'turquoise',
    config: { duration: 1000 },
  })

  return (
    <>
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div style={{ margin: '20px' }}>
            <SpringAnimatedTitle />
          </div>
          <div>
            <DraggableList items={'Lorem ipsum dolor sit'.split(' ')} />
          </div>
        </div>
        <div {...bind} class="main_label" onClick={() => toggle(!open)}>
          <animated.div class="fill_label" style={props} />
          <animated.div class="content_label">
            {props.width.interpolate((x) =>
              Math.floor((x.toFixed(0) * 100) / width),
            )}
          </animated.div>
        </div>
        <Animation4 />
      </div>
    </>
  )
}
