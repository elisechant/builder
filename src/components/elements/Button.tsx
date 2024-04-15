import type {HTMLProps, ReactNode} from "react";
import {twMerge} from "tailwind-merge";

const BASE = 'focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-normal rounded-sm gap-x-1.5 px-2.5 py-2.5 inline-flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 border-b-2'
const BLOCK = 'w-full justify-center'
const SIZE = {
  SM: 'text-sm',
  LG: 'text-lg',
}
const COLOR = {
  PRIMARY: 'text-white bg-blue-500 hover:bg-blue-600 disabled:bg-blue-500 focus-visible:outline-blue-500 border-b-blue-800',
  SECONDARY: 'text-white bg-gray-600 hover:bg-gray-700 disabled:bg-gray-600 focus-visible:outline-gray-600 border-b-gray-800',
}

type NativeProps = Omit<HTMLProps<HTMLButtonElement>, 'size' | 'type'> & {
  type?: "submit" | "reset" | "button"
}

export interface ButtonProps extends NativeProps {
  children: ReactNode
  color?: 'primary' | 'secondary'
  size?: 'sm' | 'lg'
  block?: boolean
}

export default function Button({ children, color = 'primary', size = 'sm', block = false, ...props }: ButtonProps) {
  let tw = [BASE]
  if (block) {
    tw.push(BLOCK)
  }

  if (size === 'sm') {
    tw.push(SIZE.SM)
  } else if (size === 'lg') {
    tw.push(SIZE.LG)
  } else {
    throw new Error(`size:${size} not handled`)
  }
  if (color === 'primary') {
    tw.push(COLOR.PRIMARY)
  } else if (color === 'secondary') {
    tw.push(COLOR.SECONDARY)
  } else {
    throw new Error(`color:${color} not handled`)
  }

  return (
    <button {...props} className={twMerge(tw)}>{children}</button>
  )
}

