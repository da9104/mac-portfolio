import React, { useState, useEffect } from 'react'
import gsap from 'gsap';
import './App.css'
import { Draggable } from 'gsap/Draggable';
gsap.registerPlugin(Draggable);

import { ClientOnly } from '@/ClientOnly';
import { Dock, Home, Navbar, Welcome } from '@components';
import { Contact, Finder, Safari, Image, Text, Terminal, Photos, Resume } from '@windows'

function App({ initialPosts = [] }) {

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
