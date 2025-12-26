
import { StrictMode } from 'react'
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'

export async function render(url, { posts }) {
   try {

    const appHtml = renderToString(<App initialPosts={posts} />)
    
    return {
      html: appHtml,
      head: '', 
      initialState: { posts } 
    }
  } catch (error) {
    console.error('SSR render failed:', error)
    return {
      html: '<div>Error loading content</div>',
      head: '',
      initialState: { posts }
    }
  }
}