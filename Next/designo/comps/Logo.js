import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Logo = ( { src,alt,href,scroll} ) => {
    return (
        <div className='logo' >
            <Link href={href} passHref scroll={scroll} ><Image src={src} alt={alt} width={202} height={27} /></Link>

           
        </div>
    )
}

export default Logo
