import './App.css'
import { useDebounce } from './hooks/UseDebounce'
import { usePagination } from './hooks/UsePagination'

function App() {
  const data = ["item 1", "item 2", "item 3", "item 4", "item 5", "item 6", "item 7", "item 8", "item 9", "item 10"]
  const { value, debounceValue, handleChange } = useDebounce(500)
  const {page, totalPages, firstContentIndex, lastContentIndex, nextPage, prevPage} = usePagination({contentPerPage: 10, count: data.length})

  const currrntPosts = data.slice(firstContentIndex, lastContentIndex)
  return (
    <>
      <div>
        <h3>Debounce Search Demo</h3>
        <p>Debounce delay (ms): 500</p>

        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder='Typing....'
        />

        <p>Curring Input: {value}</p>
        <p>Debounced Value(afther 500ms): {debounceValue}</p>
      </div>

      <div>
        {currrntPosts.map((post, index) => (<p key={index}>{post}</p>))}

        <button onClick={prevPage} desabled={page === 1}>Prev</button>
        <span>Page {page} of totalPages</span>
        <button onClick={nextPage} disabled={page === totalPages}>Next</button>
      </div>
    </>
  )
}

export default App