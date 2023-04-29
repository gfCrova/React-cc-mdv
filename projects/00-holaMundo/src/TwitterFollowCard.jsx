
// eslint-disable-next-line react/prop-types
export function TwitterFollowCard ({ userName, name, isFollowing }) {

    console.log(isFollowing);

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
            <img className='tw-followCard-img' 
                    alt="avatar-midudev" src={`https://unavatar.io/${userName}`} ></img>
            <div className='tw-followCard-info'>
                <strong>{name}</strong>
                <span className='tw-followCard-userName'>@{userName}</span>
            </div>
            </header>

            <aside>
                <button className='tw-followCard-button'>Seguir</button>
            </aside>
        </article>
    )
}