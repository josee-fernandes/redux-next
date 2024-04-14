'use client'

import { selectCount } from '@/lib/redux/features/counter/counterSlice'
import { useAppSelector } from '@/lib/redux/hooks'

import { DecrementButton } from './decrement-button'
import { IncrementButton } from './increment-button'
import StoreProvider from './store-provider'

function RawCounter() {
  const count = useAppSelector(selectCount)

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center">
        <h1 className="text-lg font-bold">Redux Counter</h1>
        <p className="text-base">{count}</p>
      </div>
      <div className="flex gap-4">
        <IncrementButton />
        <DecrementButton />
      </div>
    </div>
  )
}

export function Counter() {
  return (
    <StoreProvider>
      <RawCounter />
    </StoreProvider>
  )
}
