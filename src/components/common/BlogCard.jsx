import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AiOutlineLike } from "react-icons/ai";
import { GrView  } from "react-icons/gr";
import { FaRegCommentDots } from "react-icons/fa";

function formatDate(isoString) {
    const date = new Date(isoString);

    const monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const day = date.getUTCDate();
    const month = monthNames[date.getUTCMonth()];
    const year = date.getUTCFullYear();

    return `${month} ${day}, ${year}`;
}

const BlogCard = ({blog}) => {
  return (
    <div className='flex flex-col px-4 py-8 border-b'>
        <div className='flex flex-row flex-wrap w-full gap-2 mb-3'>
            <FaUserCircle size="30"/>
            <span className='text-sm mt-1'>{blog.author}</span>
            <span className='text-sm text-gray-500 mt-1'>{formatDate(blog.publish_date)}</span>
        </div>
        <div className='flex flex-row justify-between gap-3'>
            <div>
                <Link to={`/api/blogs/${blog.id}/`}><h1 className='text-sm font-semibold'>{blog.title}</h1></Link>
                <p className='text-gray-800 text-sm'>{blog.content.replace(/<[^>]*>/g, '')}</p>
            </div>
            <div className='min-w-[200px]'>
                <img src={blog.image} alt={blog.title} className='w-[200px] h-[100px]'/>
            </div>
        </div>
        <div className='flex flex-row justify-between gap-3'>
            <div className='bg-gray-100 rounded-lg py-1 px-2 mt-2'>
                <Link className='text-xs text-gray-600' to={`/${blog.category}`}>{blog.category_name}</Link>
            </div>
            <div className='flex flex-row text-sm'>
                <div className='flex flex-row text-gray-600 font-extralight py-1 px-2 mt-2'>{blog.likes}<AiOutlineLike className='mt-1 ml-1'/></div>
                <div className='flex flex-row  text-gray-600 font-extralight py-1 px-2 mt-2'>{blog.post_views}<GrView className='mt-1 ml-1'/></div>
                <div className='flex flex-row text-gray-600 font-extralight py-1 px-2 mt-2'>{blog.comment_count}<FaRegCommentDots className='mt-1 ml-1'/></div>
            </div>
        </div>
    </div>
  )
}

export default BlogCard
