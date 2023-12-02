import React from 'react'
import LandingPage from '../components/LandingPage'
import SlideshowComponent from '../components/SlideShow'
export default function Home() {
    return (
        <div>
            <LandingPage />
            <SlideshowComponent type="clgexp" />
            <SlideshowComponent type="workexp"/>
            <SlideshowComponent/>
        </div>)
}