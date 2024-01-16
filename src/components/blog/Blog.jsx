import React from "react"
import Back from "../common/back/Back"
import BlogCard from "./BlogCard"
import "./blog.css"

const Blog = () => {
  return (
    <>
      <Back title='Notices' />
      <section className='blog padding'>
        
        <div className='container grid2'>
          <BlogCard />
          <a href="https://drive.google.com/drive/folders/1RmsOC2D4uQANwg0VStFamy4e7hhuKqwb?usp=drive_link" target="_blank">
            <button type="button" className='button1'>Click Here</button>
            
            </a>
        </div>
      </section>
    </>
  )
}

export default Blog
