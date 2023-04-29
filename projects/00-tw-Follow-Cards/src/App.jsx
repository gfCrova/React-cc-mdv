
//import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
    {
      userName: "elonmusk",
      name: "Elon Musk",
      isFollowing: false
    },
    {
      userName: "midudev",
      name: "Miguel Ángel Durán",
      isFollowing: true
    },
    {
      userName: "Martinpdisalvo",
      name: "Martin Pérez Di Salvo",
      isFollowing: false
    },
    {
      userName: "leomessi",
      name: "Leonel Andrés Messi",
      isFollowing: true
    }
  ];


export function App () {
  
  const format = (userName) => `@${userName}`

  // useState a nivel de app
  //const [name, setName] = useState("elonmusk");

  return (

    <section className='App'>
      {/*<TwitterFollowCard formatUserName={format} userName="midudev" name="Miguel Ángel Durán" isFollowing initialIsFollowing={true}/>
      <TwitterFollowCard formatUserName={format} userName="leomessi" name="Pable Hernández" isFollowing={false} />
      <TwitterFollowCard formatUserName={format} userName={name} name="Elon Musk" isFollowing />
      <TwitterFollowCard formatUserName={format} userName="vxnder" name="Vanderhart" isFollowing={false} />
      */}
      
      {
        users.map(({userName, name, isFollowing}) => {
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
        

      {/*<button onClick={() => setName("giancrova")}>
        Cambiar Nombre
    </button>*/}
    
    </section>
  )
}