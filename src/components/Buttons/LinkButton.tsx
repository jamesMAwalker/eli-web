'use client'

import Link from 'next/link'
import { twm } from '@/utils/twm'

interface LinkButtonProps {
  text?: string
  path?: string
  classes?: string
}

export const LinkButton = ({
  text = 'Learn More',
  path = '#',
  classes = ''
}: LinkButtonProps) => {
  return (
    <Link
      className={twm(
        'LINK_BUTTON general-btn sm !rounded-md lg:med',
        classes
      )}
      href={path}
    >
      {text}
    </Link>
  )
}
