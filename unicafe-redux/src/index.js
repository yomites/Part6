import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

store.subscribe(() => {
  const storeNow = store.getState()
  console.log('Store Now', storeNow)
})

const Statistics = ({ all, good, neutral, bad, average, positive }) => {
  if (all === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (
    <table>
      <tbody>
        <Statistic text="good" value={good} />
        <Statistic text="neutral" value={neutral} />
        <Statistic text="bad" value={bad} />
        <Statistic text="all" value={all} />
        <Statistic text="average" value={average} />
        <Statistic text="positive" value={positive} />
      </tbody>
    </table>
  )
}

const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>
        {text}
      </td>
      <td>
        {value}
      </td>
    </tr>
  )
}

const App = () => {

  const feedback = "give feedback"
  const statistics = "statistics"

  const good = () => {
    store.dispatch({
      type: 'GOOD'
    })
  }

  const neutral = () => {
    store.dispatch({
      type: 'OK'
    })
  }

  const bad = () => {
    store.dispatch({
      type: 'BAD'
    })
  }

  const reset = () => {
    store.dispatch({
      type: 'ZERO'
    })
  }

  const all = store.getState().good + store.getState().ok + store.getState().bad
  const feedbackValues = (store.getState().good * 1) + (store.getState().ok * 0) + (store.getState().bad * -1)
  const average = (feedbackValues / all)
  const positive = (store.getState().good * 100 / all)
  const positiveWithPercentSign = positive + " %"

  return (
    <div>
      <h1>{feedback}</h1>
      <button onClick={good}>good</button>
      <button onClick={neutral}>neutral</button>
      <button onClick={bad}>bad</button>
      <button onClick={reset}>reset stats</button>
      <h2>{statistics}</h2>
      <Statistics
        good={store.getState().good}
        neutral={store.getState().ok}
        bad={store.getState().bad}
        all={all}
        average={average}
        positive={positiveWithPercentSign}
      />
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)