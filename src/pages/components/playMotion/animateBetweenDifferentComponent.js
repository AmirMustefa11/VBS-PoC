import React from 'react'
import { useState } from 'react'
import { motion, AnimateSharedLayout } from 'framer-motion'

/**
 * This is an example of animating between different components in Framer Motion 2.
 *
 * By wrapping a tree with AnimateSharedLayout, children can be given a layoutId.
 *
 * When a component with a layoutId is removed and a new one with the same layoutId
 * is added elsewhere, the new component will animate from the old one.
 *
 * The outline being animated here is four different components, animated like one.
 */

export default function AnimateBetweenComponents() {
  const [selected, setSelected] = useState(colors[0])

  return (
    <AnimateSharedLayout>
      <ul
        style={{
          listStyle: 'none',
          margin: '0',
          padding: '0',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          width: '280px',
          height: '280px',
        }}
      >
        {colors.map((color) => (
          <Item
            key={color}
            color={color}
            isSelected={selected === color}
            onClick={() => setSelected(color)}
          />
        ))}
      </ul>
    </AnimateSharedLayout>
  )
}

function Item({ color, isSelected, onClick }) {
  return (
    <li
      className="item"
      onClick={onClick}
      style={{
        backgroundColor: color,
        display: 'block',
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        margin: '20px',
        position: 'relative',
        cursor: 'pointer',
        flexShrink: '0',
      }}
    >
      {isSelected && (
        <motion.div
          layoutId="outline"
          className="outline"
          style={{
            position: 'absolute',
            top: '-20px',
            left: '-20px',
            right: '-20px',
            bottom: '-20px',
            border: '10px solid white',
            borderRadius: '50%',
          }}
          initial={false}
          animate={{ borderColor: color }}
          transition={spring}
        />
      )}
    </li>
  )
}

const colors = ['#ff0055', '#0099ff', '#22cc88', '#ffaa00']

const spring = {
  type: 'spring',
  stiffness: 500,
  damping: 30,
}
