// SlideshowComponent.js
import React, { useState, useEffect } from "react";
import p1Image from "../assets/p1.jpg";
import UserProfileCard from "./UserProfileCard";

const SlideshowComponent = () => {
  // Dummy data

  const [selectedTestimonials, setSelectedTestimonials] = useState([]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Initial random selection
    selectRandomTestimonials();

    // Set up interval for automatic update
    const intervalId = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        selectRandomTestimonials();
        setIsTransitioning(false);
      }, 500); // Adjust the transition duration as needed
    }, 2000);//change time according to need

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);  // Empty dependency array to run the effect only once

  const selectRandomTestimonials = () => {
    const shuffledTestimonials = shuffleArray(dummyData);
    const selected = shuffledTestimonials.slice(0, 3);
    setSelectedTestimonials(selected);
  };

  const shuffleArray = (array) => {
    // Fisher-Yates shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  const dummyData = [
    {
      id: 1,
      imageSrc: p1Image,
      name: "John Doe",
      designation: "Software Engineer",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tags: ["React", "JavaScript", "Node.js"],
    },
    {
      id: 2,
      imageSrc: p1Image,
      name: "Jane Smith",
      designation: "Frontend Developer",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      tags: ["HTML", "CSS", "React"],
    },
    {
      id: 3,
      imageSrc: p1Image,
      name: "Bob Johnson",
      designation: "Full Stack Developer",
      text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      tags: ["JavaScript", "Node.js", "MongoDB"],
    },
    {
      id: 4,
      imageSrc: p1Image,
      name: "Alice Brown",
      designation: "UI/UX Designer",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tags: ["UI/UX", "Design", "Figma"],
    },
    {
      id: 5,
      imageSrc: p1Image,
      name: "Charlie Green",
      designation: "Data Scientist",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      tags: ["Data Science", "Machine Learning", "Python"],
    },
    {
      id: 6,
      imageSrc: p1Image,
      name: "Eva White",
      designation: "Product Manager",
      text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
      tags: ["Product Management", "Agile", "Scrum"],
    },
    {
      id: 7,
      imageSrc: p1Image,
      name: "Michael Black",
      designation: "DevOps Engineer",
      text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      tags: ["DevOps", "CI/CD", "Docker"],
    },
    // Add more testimonials as needed
  ];

  return (
    <div className="h-screen bg-indigo-300 flex flex-col items-center justify-center">
      <div className=" flex">
        {/* Left half with larger curved rectangular box */}
        <div className="w-1/2 mx-24">
          <div className="bg-gray-300 w-96 h-64 rounded-3xl ">
            {/* Content of the larger box can be added here */}
          </div>
        </div>

        {/* Right half with three smaller curved boxes */}
        <div className="w-1/2 flex flex-col items-center justify-center">
          <p className="text-lg font-bold mb-4">Three Smaller Curved Boxes</p>
          <div className="flex items-center justify-center space-x-8">
            {selectedTestimonials.map((data) => (
              <UserProfileCard
                key={data.id}
                imageSrc={data.imageSrc}
                name={data.name}
                designation={data.designation}
                description={data.text}
                tags={data.tags}
                maxLines={3}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideshowComponent;
