import Card from '../components/Card';
import React from 'react'

export default function Explore() {
    return (
        <div>
            <div className="flex flex-wrap justify-center">
      <Card
        imageUrl="https://img.freepik.com/free-vector/happy-students-jumping-with-flat-design_23-2147907626.jpg?w=2000"
        title="College Experience"
        linkUrl="../components/Collegecard"
      />
      <Card
        imageUrl="https://media.istockphoto.com/id/1227181130/vector/online-education-and-home-schooling-related-vector-flat-illustration-design.jpg?s=612x612&w=0&k=20&c=H3kjTRtzkzBPIPY9bA0hBn0eM3S0kxSWJlXhgvJHr8Y="
        title="Resume"
        linkUrl="../components/Resumecard"
      />
      <Card
        imageUrl="https://media.istockphoto.com/id/1245995671/vector/open-education-concept-getting-education-online-without-problems-study-in-the-internet.jpg?s=612x612&w=0&k=20&c=hqaTECITsiyvYzW9HWhR3lEw3xlKLSvKpIbnYzOxW5s="
        title="Work Experience"
        linkUrl="..components/Workcard"
      />
      {/* Add more cards as needed */}
    </div>
        </div>)
}