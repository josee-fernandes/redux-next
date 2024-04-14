import { decrement } from '@/lib/redux/features/counter/counterSlice'
import { useAppDispatch } from '@/lib/redux/hooks'

export const DecrementButton = () => {
  const dispatch = useAppDispatch()

  const handleDecrement = () => dispatch(decrement())

  return (
    <button
      className="rounded bg-rose-500 px-4 py-2 font-bold text-white transition-all hover:bg-rose-700"
      onClick={handleDecrement}
    >
      Decrement
    </button>
  )
}
