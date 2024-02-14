'use client'

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Link from 'next/link'
import { lilitaOne, poppins } from "@/fonts/fonts";
import "../index.css";

const BlogPreview = ({
  title,
  preview,
  date,
  id,
}: {
  title: string
  preview?: string
  date: string
  id: string
}) => {

  return (
    <Link href={`/blog/${id}`} style={poppins.style} className='group truncate flex flex-col p-4 border-b border-gray-500 hover:border-[#646cff] bg-black rounded-lg gap-2 w-full'>
        <div className="flex justify-between items-center">
          <h4 className="text-wrap truncate group-hover:underline"><b>{title}</b></h4>
          <p style={poppins.style}  className="text-sm text-gray-600">{date}</p>
        </div>
        { preview && 
          <div style={poppins.style} className="poppins flex text-sm text-gray-500">
            <span className="overflow-hidden">{preview}</span>
            <span>...</span>
          </div>
        }
        
    </Link>
  )
}

function Blog() {
  return (
    <div>
      <Navbar />
      <main className="w-[100vw] px-[15%] my-32">
        <h1 style={lilitaOne.style}>Martin's Tech Thoughts</h1>
        <p style={poppins.style} className="text-gray-500 my-2">
          Here, I gather all my insightful findings from my developer journey.
          You may find content about Frontend Development, Blockchain security,
          and how to stand out as a developer !
        </p>
        <h2 className="my-8 special-underline" style={lilitaOne.style}>Latest articles</h2>
        <div className="flex flex-row flex-wrap justify-between my-4 gap-4">
          <BlogPreview
            title="Responsive Design : 3 ways to implement it"
            preview="Responsive web design is crucial in today's digital landscape, where users access websites from a variety of devices with different screen sizes. As a senior developer, it's essential to follow best practices to ensure that your web applications provide a seamless and enjoyable user experience across all devices. In this article, we'll explore three key practices for effective web responsive design."
            date="01-12-2023"
            id='responsive-design'
          />
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default Blog
