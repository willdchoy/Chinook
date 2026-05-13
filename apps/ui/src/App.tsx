import './App.css'

export type Test = {
  test: boolean
}

function App() {
  const test: Test = {
    test: true,
  }

  return <div className="test">{test.test.toString()}</div>
}

export default App
