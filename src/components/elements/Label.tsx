import type {HTMLProps, ReactNode} from "react";

const BASE = 'block uppercase text-[11px] text-slate-700 pb-0.5'

type Props = HTMLProps<HTMLLabelElement> & {
  children: ReactNode
}

export default function Label({ children, ...props }: Props) {
  return (
    <label {...props} className={BASE}>{children}</label>
  )
}
