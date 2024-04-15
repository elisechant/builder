import type {ReactNode} from "react";

export const BuilderLayout = ({ children }: { children: ReactNode }) => (
  <div className={'h-full flex items-stretch overflow-hidden'}>{children}</div>
)

export const BuilderLayoutPanel = ({ children }: { children: ReactNode }) => (
  <section className={'flex-1 p-8 overflow-scroll'}>{children}</section>
)

export const BuilderLayoutPreview = ({ children }: { children: ReactNode }) => (
  <section className={'flex-1 items-center p-8 bg-gray-200 overflow-scroll'}>
    <div className={'h-full flex flex-col justify-center items-center'}>
      {children}
    </div>
  </section>
)
