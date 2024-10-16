export interface Quote {
  quote: string;
  author: string;
}

export interface QuoteControlsProps {
  onNewQuote: () => void;
  onCopyQuote: () => void;
}
