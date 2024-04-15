import type {ReactNode} from "react";

const BASE = 'w-full uppercase text-[10px] font-semibold text-gray-400 border-gray-300 pt-2 mb-5 pb-0.5'

type Props = {
  children: ReactNode
}

export default function Legend({ children, ...props }: Props) {
  return (
    <legend {...props} className={BASE} style={{borderBottomWidth: '1px'}}>{children}</legend>
  )
}

