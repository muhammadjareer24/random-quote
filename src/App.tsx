import { useEffect, useState } from 'react'
import './App.css'
import './index.css'
import QuoteDisplay from './components/QuoteDisplay'
import QuoteControls from './components/QuoteControls'
import { Quote } from './types'
import useQuotes from './hooks/useQuotes'
import { getRandomItem } from './utils/getRandomItem'

function App() {
  const { quotes, loading, error } = useQuotes()

  const [currentQuote, setCurrentQuote] = useState<string>('')
  const [currentAuthor, setCurrentAuthor] = useState<string>('')

  const [animationKey, setAnimationKey] = useState<number>(0)

  const displayRandomQuote = (quotesArray: Quote[]) => {
    const randomQuote = getRandomItem(quotesArray)

    if (randomQuote) {
      setCurrentQuote(randomQuote.quote)
      setCurrentAuthor(randomQuote.author)
      setAnimationKey((prevKey) => prevKey + 1)
    }
  }

  useEffect(() => {
    if (quotes.length > 0) {
      displayRandomQuote(quotes)
    }
  }, [quotes])

  const handleNewQuote = () => {
    displayRandomQuote(quotes)
  }

  const copyToClipboard = () => {
    const copyText = `Quote: ${currentQuote}\nAuthor:  ${currentAuthor}`

    navigator.clipboard
      .writeText(copyText)
      .then(() => alert('Quote has been copied'))
      .catch(() => alert('Failed to copy quote'))
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-blue-500 h-12 w-12 animate-spin-slow"></div>
      </div>
    )
  }
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-red-500 text-lg">{error}</div>
      </div>
    )
  }

  return (
    <>
      <div className="bg-gradient-custom font-k2d flex justify-center items-center min-h-screen m-0 overflow-hidden p-5 sm:p-10">
        <div id="wrapper" className="text-center w-full max-w-[600px]">
          <h1 id="title" className="title text-3xl md:text-4xl font-bold pb-10">
            Random Quote App
          </h1>
          <div
            id="quote-box"
            key={animationKey}
            className=" mx-5 p-5 font-semibold text-lg bg-white text-center rounded-lg shadow-lg space-y-4 animate-fade-in"
          >
            {/* Quote Display */}

            <QuoteDisplay quote={currentQuote} author={currentAuthor} />

            {/* Quote Controls */}

            <QuoteControls
              onNewQuote={handleNewQuote}
              onCopyQuote={copyToClipboard}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
