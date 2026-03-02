import './App.css'
import { useDebounce } from './hooks/UseDebounce'
import { usePagination } from './hooks/UsePagination'

function App() {
  const data = [
    "item 1", "item 2", "item 3", "item 4", "item 5", "item 6", "item 7", "item 8", "item 9", "item 10",
    "item 11", "item 12", "item 13", "item 14", "item 15", "item 16", "item 17", "item 18", "item 19", "item 20",
    "item 21", "item 22", "item 23", "item 24", "item 25", "item 26", "item 27", "item 28", "item 29", "item 30"
  ]
  const { value, debounceValue, handleChange } = useDebounce(500)
  const {page, totalPages, firstContentIndex, lastContentIndex, nextPage, prevPage} = usePagination({contentPerPage: 10, count: data.length})

  const currrntPosts = data.slice(firstContentIndex, lastContentIndex)
  return (
    <>
      <hr />
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
        <hr />
        <hr />
      <div>
        {currrntPosts.map((post, index) => (<p key={index}>{post}</p>))}

        <button onClick={prevPage} desabled={page === 1}>Prev</button>
        <span>Page {page} of {totalPages}</span>
        <button onClick={nextPage} disabled={page === totalPages}>Next</button>
      </div>
      <hr />
    </>
  )
}

export default App