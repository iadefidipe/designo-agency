import React from 'react'
import Image from 'next/image'

const Logo = ( { src,alt,header } ) => {
    return (
        <div className='logo' >
            <Image src={src} alt={alt} width={202} height={27} />
        </div>
    )
}

export default Logo
