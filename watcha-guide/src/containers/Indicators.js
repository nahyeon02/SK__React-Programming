import { Indicators } from 'components'

/* -------------------------------------------------------------------------- */

export default function IndicatorsContainer({ list = [], activeIndex = 0 }) {
  return (
    <Indicators>
      <Indicators.Group>
        {list.map((item, index) => (
          <Indicators.Item key={item.id} active={activeIndex === index}>
            {item.abbr}
          </Indicators.Item>
        ))}
      </Indicators.Group>
    </Indicators>
  )
}
