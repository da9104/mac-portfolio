import React, { useState, useEffect } from 'react'
import './App.css'
import { gsap } from "gsap";
import { Draggable } from "gsap/all";
gsap.registerPlugin(Draggable);

import { ClientOnly } from '@/ClientOnly';
import { Dock, Home, Navbar, Welcome } from '@components';
import { Contact, Finder, Safari, Image, Text, Terminal, Photos, Resume } from '@windows'

function App({ initialPosts }) {

  useEffect(() => {
    console.log(initialPosts)
  }, [])

  return (
    <main suppressHydrationWarning>
      <Dock />
      <Home />
      <Navbar  />
      <Welcome />
      <Contact />
      <Safari initialPosts={initialPosts}/>
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
