import { FunctionComponent } from 'react'

import { IconProps } from '../utils'

const Note: FunctionComponent<IconProps> = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='lucide lucide-notebook'
    >
      <path d='M2 6h4' />
      <path d='M2 10h4' />
      <path d='M2 14h4' />
      <path d='M2 18h4' />
      <rect width='16' height='20' x='4' y='2' rx='2' />
      <path d='M16 2v20' />
    </svg>
  )
}

export default Note