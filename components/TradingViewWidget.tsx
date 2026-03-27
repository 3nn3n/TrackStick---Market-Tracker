"use client";

import useTradingViewWidget from '@/hooks/useTradingViewWidget';
import { cn } from '@/lib/utils';
// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

interface TradingViewWidgetProps {
  title?: string;
  scriptURL: string;
  config: Record<string, unknown>;
  height?: number;
  className?: string;
}

const TradingViewWidget = ({ title, scriptURL, config, height = 600, className }: TradingViewWidgetProps) => {
  const containerRef = useTradingViewWidget(scriptURL, config, height);



  return (
    <div className='w-full'>
      {title && <h3 className='text-2xl text-gray-100 font-semibold mb-5'>{title}</h3>}
      <div className={cn('tradingview-widget-container', className)} ref={containerRef} >
        <div className="tradingview-widget-container__widget" style={{ height, width: "100%" }}/>
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
