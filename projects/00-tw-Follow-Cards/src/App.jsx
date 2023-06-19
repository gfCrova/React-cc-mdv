
//import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
import {users as user} from './data/Users'

export function App () {
  
  const format = (userName) => `@${userName}`

  // useState a nivel de app
  //const [name, setName] = useState("elonmusk");

  return (

    <section className='App'>
    
      {/* Método - 1
      
      <TwitterFollowCard formatUserName={format} userName="midudev" name="Miguel Ángel Durán" isFollowing initialIsFollowing={true}/>
      <TwitterFollowCard formatUserName={format} userName="leomessi" name="Pable Hernández" isFollowing={false} />
      <TwitterFollowCard formatUserName={format} userName={name} name="Elon Musk" isFollowing />
      <TwitterFollowCard formatUserName={format} userName="vxnder" name="Vanderhart" isFollowing={false} />
      */
      
      }

      { // Método - 2
        user.map(({userName, name, isFollowing}) => {
          return (
            <TwitterFollowCard
              key={userName}
              formatUserName={format}
              userName={userName}
              initialIsFollowing={isFollowing}
              >{name}</TwitterFollowCard>
          )
        })
      }
    
    </section>
  )
}