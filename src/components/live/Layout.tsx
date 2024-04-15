import type {ReactNode} from "react";

export const LiveLayout = ({ children }: { children: ReactNode }) => (
  <div className={'h-full flex flex-col justify-center items-center bg-blue-100'}>{children}</div>
)
