import { WindowControls } from '@components'
import WindowWrapper from '@hoc/WindowWrapper'
import React from 'react'
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

const Safari = () => {
    return (
        <>
            <div id='window-header'>
                <WindowControls target='safari'/>
                <PanelLeft className='ml-10 icon' />
                <div className='flex items-center gap-1 ml-5'>
                    <ChevronLeft className='icon'/>
                    <ChevronRight className='icon'/>
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
                    {blogPosts.map(({ id, image, title, date, link }) => (
                        <div key={id} className='blog-post'>
                            <div className='col-span-2'> 
                               <img src={image} alt={title} />
                            </div>

                            <div className='content'>
                                <p>{date}</p>
                                <h3>{title}</h3>
                                {/* <a href={link} target='_blank'>
                                    Check out the 
                                </a> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default WindowWrapper(Safari, 'safari')