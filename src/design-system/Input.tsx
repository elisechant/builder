import {twMerge} from "tailwind-merge";
import {forwardRef} from "react";
import type {HTMLProps} from "react";

const BASE = 'text-black relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input rounded-md placeholder-gray-400 text-sm px-4 py-2.5 shadow-sm bg-transparent'
const STYLISTIC = 'ring-1 ring-inset focus:ring-2 ring-gray-300 focus:ring-primary-300'
const HIDDEN = 'sr-only p-0 m-0 border-none ring-none'

type NativeProps = HTMLProps<HTMLInputElement>

type Props = NativeProps & {
  hidden?: boolean
}

const Input = forwardRef<HTMLInputElement, Props>(({ hidden = false, ...props }, ref) => {
  const tw = hidden ? [HIDDEN] : [BASE, STYLISTIC]
  return (
    <input {...props} className={twMerge(tw)} ref={ref}  />
  )
})

Input.displayName = 'FieldInput'

export default Input

