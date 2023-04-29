
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {

  return (

    <section className='App'>
      <TwitterFollowCard userName="midudev" name="Miguel Ángel Durán" isFollowing />
      <TwitterFollowCard userName="pherald" name="Pable Hernández" isFollowing={false} />
      <TwitterFollowCard userName="elonmusk" name="Elon Musk" isFollowing />
      <TwitterFollowCard userName="vxnder" name="Vanderhart" isFollowing={false} />
    </section>

  )
}