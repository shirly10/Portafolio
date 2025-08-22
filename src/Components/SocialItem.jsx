import React from 'react'

function SocialItem({href, src, alt}) {
    return(
        <li className='SocialItem'>
            <a href={href}>
                <img src={src} alt={alt} />
            </a>
        </li>
    )
}

export default SocialItem;