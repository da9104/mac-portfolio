
import { StrictMode } from 'react'
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'

export function render(url, data) {
    const html = renderToString(
        <StrictMode>
            <App initialState={data.posts} />
        </StrictMode>
    )
    return {
        html,
        initialState: { posts: data.posts },
        head: ''
    }
}