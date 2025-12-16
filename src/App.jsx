import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import './App.css'
gsap.registerPlugin(Draggable);

import { Dock, Home, Navbar, Welcome } from '@components';
import { Contact, Finder, Safari, Image, Text, Terminal, Photos, Resume } from '@windows'



function App() {
  return (
    <main>
      <Dock />
      <Home />
      <Navbar />
      <Welcome />
      <Contact />
      <Safari />
      <Finder />
      <Image />
      <Text />
      <Terminal />
      <Photos />
      <Resume />
    </main>
  )
}

export default App
