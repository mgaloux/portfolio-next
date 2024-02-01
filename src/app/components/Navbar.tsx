import Link from 'next/link'
import Image from 'next/image'
import { lilitaOne } from '../styles/fonts/fonts'


const LogoBackHomeButton = () => {
  return (
    <Link href="/#home">
      <Image className="hover:scale-110" width={40} height={40} src='/images/logo.svg' alt='salope' />
    </Link>
  )
}

const Links = () => {
  return (
    <div className='' style={lilitaOne.style}>
      <div className='flex flex-row text-xl gap-8 items-center'>
        <div className='hover:underline'>
          <Link href='/projects'>Projects</Link>
        </div>
        <div className='hover:underline'>
          <Link href='/blog'>Blog</Link> 
        </div>
        <div className='hover:underline'>
          <Link href='/contact'>Contact me</Link>
        </div>
      </div>
    </div>
  )
}

const Navbar = () => {
  return (
    <header className='bg-black bg-opacity-60 border-b border-gray-700 w-screen px-[15%] flex justify-between items-center h-16 fixed top-0 z-20'>
      <LogoBackHomeButton/>
      <Links/>
    </header>
  )
}

export default Navbar
