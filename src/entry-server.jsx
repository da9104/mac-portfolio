
import { StrictMode } from 'react'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { getDatabaseContents } from '../server/notionHandler.js'
import App from './App'

export async function render(url) {
   try {
    // ✅ FETCH NOTION DATA HERE (server-only)
    const posts = await getDatabaseContents()
    
    // Render App with data
    const appHtml = renderToString(<App initialPosts={posts} />)
    
    return {
      html: appHtml,
      head: '', // Add meta tags if needed
      initialState: { posts }  // Serialized for client
    }
  } catch (error) {
    console.error('SSR render failed:', error)
    return {
      html: '<div>Error loading content</div>',
      head: '',
      initialState: { posts: [] }
    }
  }
}