import React from 'react'
import { useBlogContext } from '../../context/blogContext'
import BlogCard from '../../components/common/BlogCard';

const Home = () => {
  const {blogs} = useBlogContext();
  console.log(blogs)

  return (
    <main className='flex flex-row xs:w-full lg:w-2/3 mx-auto flex-wrap'>
      <section className='flex flex-col w-2/3'>
        {blogs?.map(blog=>(<BlogCard key={blog.id} blog={blog}/>))}
      </section>
      <aside>
      
      </aside>
    </main>
  )
}

export default Home
