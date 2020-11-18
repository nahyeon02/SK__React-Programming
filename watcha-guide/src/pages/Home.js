import { Component } from 'react'
import Modal from '~/components/Modal'
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
    isOpenModal: false,
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

  openModal = () =>
    this.setState({
      isOpenModal: true,
    })

  closeModal = () =>
    this.setState({
      isOpenModal: false,
    })

  render() {
    const { sections, indicators, isOpenModal } = this.state

    return (
      <>
        <HeaderContainer />
        <IndicatorsContainer list={indicators} />
        <MainContainer list={sections} />
        <button
          type="button"
          style={{ color: '#000' }}
          onClick={() => this.openModal()}
        >
          포털을 이용해 모달 띄우기
        </button>
        <Modal
          open={isOpenModal}
          target=".modalContainer"
          onClose={this.closeModal}
        />
      </>
    )
  }
}
