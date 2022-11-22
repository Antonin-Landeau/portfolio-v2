import React, { Children, FunctionComponent, ReactNode } from 'react'
interface Props {
  variant: string;
  children: ReactNode;
}

const SectionFooter: FunctionComponent<Props> = ({variant, children}) => {
  return (
    <>
      <div className={`${variant === "white" ? 'bg-primary-orange' : 'bg-secondary-font'} h-[2px] w-20`}></div>
      {children}
    </>
  )
}

export default SectionFooter