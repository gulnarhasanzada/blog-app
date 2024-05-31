import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react'

export const BlogContext = createContext();

export const useBlogContext =()=>{
    return useContext(BlogContext);
}


const BlogContextProvider = ({children}) => {
  const [blogs, setBlogs] = useState([]);
  const url = import.meta.env.VITE_BACKEND_URL;

  const fetchBlogs = async()=>{
    const res = await axios.get(`${url}/api/blogs/`)
    setBlogs(res.data)
  }

  useEffect(()=>{
    fetchBlogs();
  },[])

  const values = {
    blogs,
    fetchBlogs
  }
  return <BlogContext.Provider value={values}>{children}</BlogContext.Provider>
}

export default BlogContextProvider
