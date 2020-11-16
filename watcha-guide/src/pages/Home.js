import { Component } from 'react'
import {
  HeaderContainer,
  IndicatorsContainer,
  MainContainer,
} from '~/containers'

const { PUBLIC_URL } = process.env

export default class Home extends Component {
  state = {
    sections: [],
    indicators: [],
    activeIndex: 0,
    isLoading: false,
    hasError: false,
  }

  componentDidMount() {
    this.fetchData()
  }

  /* -------------------------------------------------------------------------- */
  async fetchData() {
    try {
      this.setState({ isLoading: true })
      const data = await (
        await fetch(`${PUBLIC_URL}/api/sectionList.json`)
      ).json()

      this.setState({
        isLoading: false,
        sections: data,
        indicators: data.map(({ headline, id }) => ({
          abbr: headline.abbr,
          id,
        })),
      })
    } catch ({ message }) {
      this.setState({
        hasError: {
          message,
        },
      })
    }
  }

  render() {
    const { sections, indicators, activeIndex } = this.state

    return (
      <>
        <HeaderContainer />
        <IndicatorsContainer list={indicators} activeIndex={activeIndex} />
        <MainContainer list={sections} />
      </>
    )
  }
}
