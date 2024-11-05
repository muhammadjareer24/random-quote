import { Quote } from '../types'

const QuoteDisplay: React.FC<Quote> = ({ quote, author }) => {
  return (
    <>
      <div id="text">
        <blockquote>
          <p className="font-josefin italic text-2xl text-gray-800 my-2">
            {quote}
          </p>
        </blockquote>
      </div>
      <div id="author">
        <cite className="font-k2d text-xl text-gray-600 mt-4">{author}</cite>
      </div>
    </>
  )
}

export default QuoteDisplay
