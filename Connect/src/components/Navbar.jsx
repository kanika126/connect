const Navbar = () => {
  return (
    

<nav className="bg-teal-100 rounded-lg shadow m-1 dark:bg-grey-800">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  
      <div className="self-center text-2xl font-semibold whitespace-nowrap text-indigo-600 dark:text-indigo-600">LETSCONNECT.</div>
  
  <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        
        <a className="w-8 h-8 rounded-full" href="/profile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzBXNuO6PezhC18aYH_2cYtS0I7KbxoKYdwA&usqp=CAU" alt="user photo"/>
      </button>
      
      
  </div>
  <div className="items w-full md:flex md:w-auto md:order-1" id="navbar-user">
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 ">
      <li>
        <a href="/" className="block py-2 px-3 text-indigo-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-grey-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</a>
      </li>
      <li>
        <a href="/explore" className="block py-2 px-3 text-indigo-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-grey-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Explore</a>
      </li>
      <li>
        <a href="/contribute" className="block py-2 px-3 text-indigo-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-grey-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contribute</a>
      </li>
      <li>
        <a href="/resources" className="block py-2 px-3 text-indigo-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-grey-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Resources</a>
      </li>
    </ul>
  </div>
  </div>
</nav>

  );
};

export default Navbar;

