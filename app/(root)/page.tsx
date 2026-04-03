import Header from '@/components/Header'
import TradingViewWidget from '@/components/TradingViewWidget'
import TickerTapeWidget from '@/components/TickerTapeWidget'
import { HEATMAP_WIDGET_CONFIG, MARKET_DATA_WIDGET_CONFIG, MARKET_OVERVIEW_WIDGET_CONFIG, TOP_STORIES_WIDGET_CONFIG } from '@/lib/constants'
import React from 'react'

const Home = () => {
  const scriptUrl = "https://s3.tradingview.com/external-embedding/embed-widget-"
  return (
    <div>
      {/* <section>
        <TickerTapeWidget
          symbols="FOREXCOM:SPXUSD,FOREXCOM:NSXUSD,FOREXCOM:DJI,FX:EURUSD,BITSTAMP:BTCUSD,BITSTAMP:ETHUSD,CMCMARKETS:GOLD"
          height={100}
          className="mb-8 bg-gray-900 rounded-lg"
        />
      </section> */}
    
    <div className='flex flex-col min-h-screen home-wrapper'>
      <section className='grid w-full gap-8 home-section'>
        <div className='md:col-span-1 xl:col-span-1'>
          <TradingViewWidget 
            title="Trading Market Overview"
            scriptURL={`${scriptUrl}market-overview.js`}
            config={MARKET_OVERVIEW_WIDGET_CONFIG}
            className='custom-chart'
            height={600}
          />
        </div>
        <div className='md:col-span-1 xl:col-span-2'>
          <TradingViewWidget 
            title="Stock Heatmap"
            scriptURL={`${scriptUrl}stock-heatmap.js`}
            config={HEATMAP_WIDGET_CONFIG}
            height={600}
          />
        </div>
      </section>
      <section className='grid w-full gap-8 home-section'>
        <div className='h-full md:col-span-1 xl:col-span-1'>
          <TradingViewWidget 
            scriptURL={`${scriptUrl}timeline.js`}
            config={TOP_STORIES_WIDGET_CONFIG}
            className='custom-chart'
            height={600}
          />
        </div>
        <div className='h-full md:col-span-1 xl:col-span-2'>
          <TradingViewWidget 
            scriptURL={`${scriptUrl}market-quotes.js`}
            config={MARKET_DATA_WIDGET_CONFIG}
            height={600}
          />
        </div>
      </section>
    </div>
    </div>
  )
}

export default Home