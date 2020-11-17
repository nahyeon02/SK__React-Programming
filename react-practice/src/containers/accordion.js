import React from 'react'
import Accordion from 'components/compoundAccordion'

const AccordionContainer = ({ list }) => {
  return (
    <Accordion list={list}>
      {list.map(({ id, handleText, panelContent }, index) => (
        <Accordion.Item key={id}>
          <Accordion.Handle index={index} content={handleText} />
          <Accordion.Panel index={index}>{panelContent}</Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  )
}

export default AccordionContainer
