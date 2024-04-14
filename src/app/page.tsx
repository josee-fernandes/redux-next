import { NextPage } from 'next'

import { Counter } from '@/components/counter'

const HomePage: NextPage = () => {
  return (
    <div>
      <Counter />
    </div>
  )
}

export default HomePage

HomePage.displayName = 'HomePage'
