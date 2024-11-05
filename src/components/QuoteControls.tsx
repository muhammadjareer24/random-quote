import { QuoteControlsProps } from '../types'

const QuoteControls: React.FC<QuoteControlsProps> = ({
  onNewQuote,
  onCopyQuote,
}) => {
  return (
    <div id="buttons" className="flex justify-between gap-2 mt-5">
      <button className="newBtn button" id="newBtn" onClick={onNewQuote}>
        <i className="fas fa-sync-alt mx-0.5"></i> New
        <span className="hidden xs:inline-block">Quote</span>
      </button>
      <button className="copyBtn button" id="copyBtn" onClick={onCopyQuote}>
        <i className="fas fa-copy mx-0.5"></i> Copy
        <span className="hidden xs:inline-block">Quote</span>
      </button>
    </div>
  )
}

export default QuoteControls
