import './App.css'
import { useDebounce } from './hooks/UseDebounce'

function App() {
  const { value, debouncedValue, handleChange } = useDebounce(500)

  return (
    <div>
      <h3>Debounce Search Demo</h3>
      <p>Debounce delay (ms): 500</p>

      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder='Typing....'
      />

      <p>Typing: {value}</p>
      <p>Debounced Value: {debouncedValue}</p>
    </div>
  )
}

export default App