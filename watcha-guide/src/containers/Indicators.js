import { Indicators } from 'components'

/* -------------------------------------------------------------------------- */

export default function IndicatorsContainer({ list = [] }) {
  return (
    <Indicators>
      <Indicators.Group
        list={list}
        render={(item, index) => (
          <Indicators.Item key={item.id} item={item} index={index} />
        )}
      ></Indicators.Group>
    </Indicators>
  )
}
