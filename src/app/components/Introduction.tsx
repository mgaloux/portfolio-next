'use client'

import Photo from '@/images/ProfilePicture.jpg'
import { motion as m } from 'framer-motion'
import Image from 'next/image'
import { lilitaOne, poppins } from "@/fonts/fonts";

function Introduction() {
  return (
    <div>
      <m.h2
        style={lilitaOne.style}
        className="special-underline py-4"
        initial={{ y: '-100%', opacity: 0 }}
        animate={{ y: '0%', opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Who is he ?
      </m.h2>
      <div className="flex my-8 p-8 justify-center text-justify align-center bg-black rounded-3xl gap-8">
        <div>
          <p style={poppins.style} >
            Welcome, Martin here. <br />
            <br />
            I'm a <b>creative</b> Blockchain Developer based in France and I
            decided to master Web2 and Web3 development to build my dream
            products. <br />
            <br />
          </p>
          <p>
            My current technical skills revolves around Ethereum, Solidity,
            React & TypeScript. See more in&nbsp;
            <a
              href='/documents/CV.pdf'
              download={'Martin_Galoux_CV'}
              target="_blank"
              rel="noopener noreferrer"
              className="arrow-animation underline underline-color"
            >
              my CV
            </a>
          </p>
          <br />
          <p>
            <b>Don't be shy !</b> Scroll down to discover my journey.
          </p>
        </div>

        <Image
          alt='ProfilePicture'
          className="rounded-3xl min-w-[150px] w-1/2 min-h-1/3 max-h-1/3 object-cover"
          src={Photo}
        />
      </div>
    </div>
  )
}

export default Introduction
