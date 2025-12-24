import gsap from 'gsap';
import React, { useState, useEffect } from 'react'
import { Draggable } from 'gsap/Draggable';
import './App.css'
gsap.registerPlugin(Draggable);

import { ClientOnly } from '@/ClientOnly';

import { Dock, Home, Navbar, Welcome } from '@components';
import { Contact, Finder, Safari, Image, Text, Terminal, Photos, Resume } from '@windows'
import { blogPosts } from '@constants'

function App({ initialState }) {
  const [posts, setPosts] = useState(initialState?.posts || []);

  useEffect(() => {
    if (posts.length === 0) {
      setPosts(blogPosts)
    }
  }, [posts.length]);

  return (
    <main suppressHydrationWarning>
      <Dock />
      <Home />
      <Navbar  />
      <Welcome />
      <Contact />
      <Safari posts={posts}/>
      <Finder />
      <Image />
      <Text />
      <Terminal />
      <Photos />

      <ClientOnly>
        <Resume />
      </ClientOnly>

    </main>
  )
}

export default App
