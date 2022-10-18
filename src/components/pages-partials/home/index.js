import SharedLayout from '@/components/layout/shared-layout'
import ContentSection from './content'
import Testimonial from './testimonial'
import Incentive from './incentive'
import Hero from './hero'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <SharedLayout title="Home">
      <Hero />
      <div>
        <motion.div
          animate={{
            x: -67,
            y: -6,
            scale: 1,
            rotate: 0,
          }}
        />
      </div>

      <Incentive />
      <ContentSection />
      <Testimonial />
    </SharedLayout>
  )
}

export default Home
