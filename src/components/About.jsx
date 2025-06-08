import { motion } from 'framer-motion'
import React from 'react'
import { Tilt } from 'react-tilt'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'




const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>Introduction</p>
    <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>

    <motion.p variants={fadeIn("","",0.1,1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          I’m a full-stack developer with experience in React, Java Spring Boot, MERN, and AI-powered apps. I enjoy building web applications that solve real problems — from streamlining workflows to enhancing user experiences.

    I love learning new tools, tackling tough challenges, and diving deep into code — especially when it makes something better. Whether it’s developing RESTful APIs or crafting smooth interfaces, I aim to write clean, maintainable code that brings real value.

    If you're into building things that matter — we’re already on the same page.
    </motion.p>
    </>
  )
}

export default About