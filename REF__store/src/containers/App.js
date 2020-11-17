import React, { Component } from 'react'
import { Provider } from 'react-redux'
import './App.css'

import store from 'store'
import Shelf from 'components/shelf/Shelf'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <main>
            <Shelf />
          </main>
        </div>
      </Provider>
    )
  }
}

export default App
