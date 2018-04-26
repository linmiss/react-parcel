import * as React from 'react'
import { withState } from 'recompose'
import './index.scss'

// type Props = {
//   color: string,
//   num: 2 | 4,
//   age: number
// }

// type State = {}

// export default class Demo extends React.Component<Props, State> {
//   render() {
//     return <div>deom</div>
//   }
// }
const enhance = withState('counter', 'setCounter', 0)
export default enhance(({ counter, setCounter }) => (
  <div>
    count: {counter}
    <button onClick={() => setCounter(n => n + 1)}>Increment</button>
    <button onClick={() => setCounter(n => n - 1)}>Decrement</button>
  </div>
))
