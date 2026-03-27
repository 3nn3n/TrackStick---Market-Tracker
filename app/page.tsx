import React from 'react'
import { Button } from '@/components/ui/button'

const page = () => {
  return (
    <>
    <div>
      <Button variant="default">Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>
    </div>
    </>
  )
}

export default page