import React from 'react'
import LandingPage from '../components/HomePage/LandingPage'
import SlideshowComponent from '../components/HomePage/SlideShow'
export default function Home() {
    return (
        <div>
            <LandingPage />
            <SlideshowComponent type="clgexp" />
            <SlideshowComponent type="workexp"/>
            <SlideshowComponent/>
        </div>)
}