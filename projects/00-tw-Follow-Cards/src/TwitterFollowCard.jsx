
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export function TwitterFollowCard ({ formatUserName, userName, name}) {

    const [isFollowing, setIsFollowing] = useState(false);

    const cambioTexto = isFollowing ? "Siguiendo" : "Seguir";
    const buttonClassName = isFollowing ? "tw-followCard-button is-following" : "tw-followCard-button";

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
            <img className='tw-followCard-img' 
                    alt="avatar-midudev" src={`https://unavatar.io/${userName}`} ></img>
            <div className='tw-followCard-info'>
                <strong>{name}</strong>
                <span className='tw-followCard-userName'>
                    {formatUserName(userName)}
                </span>
            </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {cambioTexto}
                </button>
            </aside>
        </article>
    )
}
