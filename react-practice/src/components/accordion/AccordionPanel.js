import { useContext } from 'react'
import { AccordionContext } from './AccordionList'

const AccordionPanel = ({ index, children, ...restProps }) => {
  const { currentIndex } = useContext(AccordionContext)

  return (
    <div
      {...restProps}
      style={{
        display: currentIndex === index ? 'block' : 'none',
      }}
    >
      {children}
    </div>
  )
}

export default AccordionPanel
