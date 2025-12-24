import { WindowControls } from '@components'
import WindowWrapper from '@hoc/WindowWrapper'
import React, { useState, useEffect } from 'react'
import {
    ChevronLeft,
    ChevronRight,
    Copy,
    MoveRight,
    PanelLeft,
    Plus,
    Search,
    Share,
    ShieldHalf
} from 'lucide-react'
import { blogPosts } from '@constants'

const Safari = ({ initialState }) => {
      const [posts, setPosts] = useState(initialState?.posts || []);
    
      useEffect(() => {
        if (posts.length === 0) {
          setPosts(blogPosts)
        }
      }, [posts.length]);
    
      const getTitle = (item) => item?.properties?.Title?.title?.[0]?.plain_text || 'Untitled'
      
      // console.log(posts)
    return (
        <>
            <div id='window-header'>
                <WindowControls target='safari' />
                <PanelLeft className='ml-10 icon' />
                <div className='flex items-center gap-1 ml-5'>
                    <ChevronLeft className='icon' />
                    <ChevronRight className='icon' />
                </div>

                <div className='flex-1 flex-center gap-3'>
                    <ShieldHalf className='icon' />
                    <input type='text' placeholder='search' className='flex-1 border-none outline-none' />
                </div>

                <div className='flex items-center gap-5' >
                    <Share className='icon' />
                    <Plus className='icon' />
                    <Copy className='icon' />
                </div>
            </div>

            <div className='blog' >
                <h2>My blog</h2>

                <div className='space-y-8'>

                    {posts && posts.map((item, index) => {
                        const publishedDate = item.properties?.PublishedDate?.date?.start || '--'

                        return (
                            <div key={item.id} className='blog-post'>
                                <div className='content'>
                                    <p className='text-xs'>{publishedDate}</p>
                                    <a href={item.public_url ?? null}>
                                        <h3>{getTitle(item)}</h3>
                                    </a>
                                </div>
                            </div>
                        )
                    })}


                </div>
            </div>
        </>
    )
}

export default WindowWrapper(Safari, 'safari')