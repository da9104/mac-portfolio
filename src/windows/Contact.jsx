import { WindowControls } from '@components'
import { socials } from '@constants'
import WindowWrapper from '@hoc/WindowWrapper'
import React from 'react'

export const Contact = () => {
    return (
        <>
            <div id='window-header'>
                <WindowControls target="contact" />
                <h2>Contact</h2>
            </div>

            <div className='p-5 space-y-5'>
                <img src='/images/dami1.jpeg' alt='dami' className='w-20 rounded-full'/>
                <h3>Let's talk</h3>
                <p>damikang@kakao.com</p>
                <ul>
                    {socials.map(({ id, bg, link, icon, text}) => (
                        <li key={id} style={{ background: bg }}>
                            <a href={link} target='_blank' rel='noopener noreferrer' title={text}>
                                <img src={icon} alt={text} className='size-5'/>
                                <p>{text}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default WindowWrapper(Contact, 'contact')