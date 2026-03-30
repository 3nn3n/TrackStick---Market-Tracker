import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="auth-layout">
      <section className='auth-left-section scrollbar-hide-default'>
        <Link href="/" className='auth-logo'>
          <Image src={"/assets/images/logo.png"} alt='TrackStick Logo' width={140} height={32} className='h-16 w-auto' />
        </Link>
        <div className='pb-6 lg:pb-8 flex-1'>{children}</div>
      </section>
      <section className='auth-right-section'>
        <div className='z-10 relative lg:mt-4 lg:mb-16'>
          <blockquote className='auth-blockquote'>
            "The stock market is filled with individuals who know the price of everything, but the value of nothing. TrackStick helps you understand the value."
          </blockquote>
          <div className='flex items-center justify-between'>
            <div>
              <cite className='auth-testimonial-author'>Josh Fisher</cite>
              <p className='max:md text-xs text-gray-500'>Banker & Investor</p>
            </div>
            <div className='flex items-center gap-0.5'>
              {[1, 2, 3, 4, 5].map((i) => (
                <Image key={i} src="/assets/icons/star.svg" alt="Star Icon" width={20} height={20} className='h-5 w-5' />
              ))}
            </div>
          </div>
        </div>
        <div className='flex-1 relative'>
          <Image src={"/assets/images/dashboard.png"} alt='Dashboard_Preview' width={1440} height={1140} className='auth-dashboard-preview absolute top-0' />
        </div>
      </section>

    </main>
  )
}

export default Layout