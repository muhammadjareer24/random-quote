import { useEffect, useState } from 'react'
import './App.css'
import './index.css'

function App() {
  const [quotes, setQuotes] = useState([])

  const [currentQuote, setCurrentQuote] = useState('')
  const [currentAuthor, setCurrentAuthor] = useState('')

  const url =
    'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch(url)
        const data = await response.json()

        setQuotes(data.quotes)
        displayRandomQuote(data.quotes)
      } catch (error) {
        console.log('Error in fetch request', error)
      }
    }

    fetchQuotes()
  }, [])

  const displayRandomQuote = (quotesArray) => {
    const randomIndex = Math.floor(Math.random() * quotesArray.length)

    const randomQuote = quotesArray[randomIndex]

    setCurrentQuote(randomQuote.quote)
    setCurrentAuthor(randomQuote.author)
  }

  const handleNewQuote = () => {
    displayRandomQuote(quotes)
  }

  const coptToClipboard = () => {
    const copyText = `Quote: ${currentQuote}\nAuthor:  ${currentAuthor}`

    navigator.clipboard
      .writeText(copyText)
      .then(() => alert('Quote has been copied'))
      .catch(() => alert('Failed to copy quote'))
  }

  return (
    <div className="bg-gradient-custom font-k2d flex justify-center items-center h-screen m-0 overflow-hidden">
      <div id="wrapper" className="text-center">
        <h1 id="title" className="title text-2xl md:text-2xl font-bold pb-3">
          Random Quote App
        </h1>
        <div
          id="quote-box"
          className="w-full max-w-md mx-5 p-5 font-semibold text-lg bg-white text-center rounded-lg shadow-lg"
        >
          <div id="text">
            <blockquote>
              <p className="font-josefin italic text-2xl text-gray-800 my-2">
                {currentQuote}
              </p>
            </blockquote>
          </div>
          <div id="author">
            <cite className="font-k2d text-xl text-gray-600 mt-4">
              {currentAuthor}
            </cite>
          </div>
          <div id="buttons" className="flex justify-between gap-2 mt-5">
            <button
              className="newBtn button"
              id="newBtn"
              onClick={handleNewQuote}
            >
              <i className="fas fa-sync-alt mx-0.5"></i> New Quote
            </button>
            <button
              className="copyBtn button"
              id="copyBtn"
              onClick={coptToClipboard}
            >
              <i className="fas fa-copy mx-0.5"></i> Copy Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
