import React from 'react'
import {
  SbBlokData,
  storyblokEditable,
  StoryblokServerComponent
} from '@storyblok/react/rsc'
import type { ISbStoryData } from '@storyblok/react'

interface SbPageData extends SbBlokData {
  body: SbBlokData[]
}

interface PageProps {
  blok: SbPageData
  story: ISbStoryData
}

export const Page: React.FunctionComponent<PageProps> = ({
  blok,
  story
}) => {
  return (
    <main {...storyblokEditable(blok)}>
      {blok.body.map((nestedBlok) => (
        <StoryblokServerComponent
          story={story}
          blok={nestedBlok}
          key={nestedBlok._uid}
        />
      ))}
    </main>
  )
}