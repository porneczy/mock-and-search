import { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import LoadingMask from "./components/LoadingMask";
import Book from "./components/Book"

function App() {

  const [loading, setLoading] = useState(false)
  const [books, setBooks] = useState([])
  const [input, setInput] = useState("")
  const [sort, setSort] = useState("desc")

  async function fetchBooks() {
    const response = await fetch("https://www.asd.com/v1/api/books")
    const responseJSON = await response.json()
    console.log(responseJSON);

    setBooks(responseJSON)
    setLoading(false)
  }

  useEffect(() => {
    setLoading(true)
    fetchBooks()
  }, [])

 function sortBooks() {
   setBooks([...books.sort((a, b) => sort === "desc" ? b.year - a.year : a.year - b.year)])
   setSort(sort === "desc" ? "asc" : "desc")
 }

  return (
    <div className="App">
           {
                loading ? 
                <LoadingMask/> :
                <>
                <Button variant="contained" onClick={sortBooks}>sort</Button>
                <TextField id="outlined-basic" label="Search" variant="outlined" placeholder="Search..." value={input} onChange={
                    ({target}) =>{
                        setInput(target.value);
                    }
                }/>
                
                {books.map(({title, author, year}) => 
                    title.toLowerCase().includes(input.toLowerCase()) &&
                    <Book key={title} title={title} year={year} author={author} />
                )}
                </>
            }
        </div>
  );
}

export default App;
