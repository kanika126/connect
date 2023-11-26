import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg">LetsConnect.</div>
        <ul className="flex space-x-4">
          <li>
            <a className="text-white" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="text-white" href="/explore">
              Explore
            </a>
          </li>
          <li>
            <a className="text-white" href="/contribute">
              Contribute
            </a>
          </li>
          <li>
            <a className="text-white" href="/helpdesk">
              Helpdesk
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

