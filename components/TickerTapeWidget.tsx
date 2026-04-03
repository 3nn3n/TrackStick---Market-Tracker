"use client";

import React, { useEffect, useRef, memo } from 'react';

interface TickerTapeWidgetProps {
  symbols?: string;
  height?: number;
  className?: string;
}

declare global {
  interface Window {
    TradingView?: {
      widget?: () => void;
    };
  }
  namespace JSX {
    interface IntrinsicElements {
      'tv-ticker-tape': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { symbols?: string }, HTMLElement>;
    }
  }
}

const TickerTapeWidget = ({ 
  symbols = "FOREXCOM:SPXUSD,FOREXCOM:NSXUSD,FOREXCOM:DJI,FX:EURUSD,BITSTAMP:BTCUSD,BITSTAMP:ETHUSD,CMCMARKETS:GOLD",
  height = 100,
  className
}: TickerTapeWidgetProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    if (!containerRef.current || scriptLoadedRef.current) return;

    scriptLoadedRef.current = true;

    // Load the TradingView ticker tape script
    const script = document.createElement('script');
    script.src = 'https://widgets.tradingview-widget.com/w/en/tv-ticker-tape.js';
    script.async = true;
    script.type = 'module';
    
    script.onload = () => {
      // Trigger TradingView widget rendering
      if (window.TradingView?.widget) {
        window.TradingView.widget();
      }
    };

    containerRef.current.appendChild(script);

    return () => {
      scriptLoadedRef.current = false;
    };
  }, []);

  return (
    <div ref={containerRef} style={{ height }} className={className}>
      {/* @ts-ignore */}
      <tv-ticker-tape symbols={symbols}></tv-ticker-tape>
    </div>
  );
};

export default memo(TickerTapeWidget);
