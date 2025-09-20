'use client';

import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  SbBlokData,
  storyblokEditable
} from '@storyblok/react/rsc'

import { fadeIn, fadeInStagger, phases } from '@/animation'
import { LinkButton } from '../Buttons/LinkButton'

interface SbHeroData extends SbBlokData {
  headline: string
}

interface HeroProps {
  blok: SbHeroData
}

export const HeroPrimary: React.FunctionComponent<HeroProps> = ({
  blok
}) => {
  return (
    <section
      {...storyblokEditable(blok)}
      className='HERO_PRIMARY relative isolate flex-center full-screen m-0'
    >
      Test!
      <AnimatePresence>
        <div className='HERO_BG isolate full-bleed overflow-visible'>
          <motion.div
            key='SHADE'
            className='BG_SHADE_COLOR bg-gradient-to-r from-primary-500/70 to-accent-300/50 absolute-shade full z-20'
          />
          <motion.div className='BG_SHADE_DARK bg-black/40 absolute-shade full z-10' />
          <motion.video
            key='BG_VIDEO'
            className='BG_VIDEO absolute-img full z-0'
            src='https://res.cloudinary.com/jameswalker-work/video/upload/f_auto,q_auto:good/v1674832419/ELI/ocean_qxigpo.mp4'
            autoPlay
            muted
            loop
          />
        </div>
      </AnimatePresence>
      <motion.div
        {...phases}
        {...fadeIn}
        className='HERO_TEXT max-w-4/5 full flex-col-center gap-lg relative z-10'
      >
        <motion.h1
          {...phases}
          {...fadeInStagger}
          className='head-1 flex-col-center gap-sm text-center'
        >
          <motion.span
            {...fadeIn}
            {...storyblokEditable(blok)}
            className='text-white font-bold'
          >
            {blok?.HeadingLine1 as string || ''}
            {/* Transformational Change */}
          </motion.span>
          <motion.span
            {...fadeIn}
            {...storyblokEditable(blok)}
            className='text-[20px] lg:text-[24px] uppercase font-bold tracking-[3px] text-white'
          >
            Through
          </motion.span>
          <motion.span
            {...fadeIn}
            {...storyblokEditable(blok)}
            className='font-bold text-primary-300'
          >
            Embodied Learning
          </motion.span>
          <motion.span {...fadeIn}>
            <LinkButton
              text='Get Started'
              path='/#intro'
              classes='solid med lg:large !bg-primary-300 !border-none'
            />
          </motion.span>
        </motion.h1>
      </motion.div>
    </section>
  )
}
