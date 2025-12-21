import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const renderText = (text, className, baseWeight = 400) => {
    return [...text].map((char, i) => (
        <span 
        key={i} 
        className={className} 
        style={{ fontVariationSettings: `'wght' ${baseWeight}` }}
        >
            { char === ' ' ? '\u00A0' : char }
        </span>
    ))
}

const FONT_WEIGHT = {
    subtitle: { min: 100, max: 400, default: 100 },
    title: { min: 400, max: 900, default: 400 }
}

const setupTextHover = (container, type) => {
    if (!container) return;

    const letters = container.querySelectorAll('span')

    const config = FONT_WEIGHT[type]
    const { min, max } = config

    const animateLetter = (letter, weight, duration = 0.25) => {
        return gsap.to(letter, {
            duration,
            ease: 'power2.out',
            fontVariationSettings: `'wght' ${weight}`,
        })
    }

    const handleMouseMove = (e) => {
        const { left } = container.getBoundingClientRect()
        const mouseX = e.clientX - left

        letters.forEach((letter) => {
            const { left: l, width: w } = letter.getBoundingClientRect()
            const distance = Math.abs(mouseX - (l - left + w / 2))
            const intensity = Math.exp(-(distance**2) / 2000)
            const newWeight = min + (max - min) * intensity

            animateLetter(letter, newWeight)
        })
    }

    const handleMouseLeave = () => {
            letters.forEach((letter) => {
                animateLetter(letter, config.default, 0.5)
        })
    }

    container.addEventListener("mousemove", handleMouseMove)
    container.addEventListener("mouseleave", handleMouseLeave)

    return () => {
        container.removeEventListener("mousemove", handleMouseMove)
        container.removeEventListener("mouseleave", handleMouseLeave)
    }
}

const Welcome = () => {
    const titleRef = useRef(null)
    const subtitleRef = useRef(null)

    useGSAP(() => {
        const cleanup1 = setupTextHover(titleRef.current, 'title')
        const cleanup2 = setupTextHover(subtitleRef.current, 'subtitle')

        return () => {
            cleanup1?.()
            cleanup2?.()
        }
    }, [])

    return <section id='welcome'>
        <p ref={titleRef} data-testid='hello'>
            {
                renderText("Hello", "text-9xl italic font-georama")
            }
        </p>
          <p ref={subtitleRef}>
            {
                renderText(`Welcome to my portfolio`, "text-3xl font-georama", 100)
            }
        </p>
           <div className="small-screen">
            <p>This website provides a good user experience on desktop screens.</p>
        </div>
    </section>
}

export default Welcome