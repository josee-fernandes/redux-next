import { increment } from '@/lib/redux/features/counter/counterSlice'
import { useAppDispatch } from '@/lib/redux/hooks'

export const IncrementButton = () => {
  const dispatch = useAppDispatch()

  const handleIncrement = () => dispatch(increment())

  return (
    <button
      className="rounded bg-emerald-500 px-4 py-2 font-bold text-white transition-all hover:bg-emerald-700"
      onClick={handleIncrement}
    >
      Increment
    </button>
  )
}
