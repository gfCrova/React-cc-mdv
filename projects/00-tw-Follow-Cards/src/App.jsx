
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
  const format = (userName) => `@${userName}`

  return (

    <section className='App'>
      <TwitterFollowCard formatUserName={format} userName="midudev" name="Miguel Ángel Durán" isFollowing />
      <TwitterFollowCard formatUserName={format} userName="pherald" name="Pable Hernández" isFollowing={false} />
      <TwitterFollowCard formatUserName={format} userName="elonmusk" name="Elon Musk" isFollowing />
      <TwitterFollowCard formatUserName={format} userName="vxnder" name="Vanderhart" isFollowing={false} />
    </section>

  )
}