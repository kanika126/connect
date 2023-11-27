const Footer = () => {
    return (


<footer className="bg-indigo-100 rounded-lg shadow m-5 dark:bg-grey-800">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      
    <ul className="flex flex-wrap items-center mt-6 text-sm font-medium text-indigo-600 dark:text-indigo-400 sm:mt-0">
        <li>
            <a href="/" className="hover:underline me-4 md:me-6">Home</a>
        </li>
        <li>
            <a href="/explore" className="hover:underline me-4 md:me-6">Explore</a>
        </li>
        <li>
            <a href="/contribute" className="hover:underline me-4 md:me-6">Contribute</a>
        </li>
        <li>
            <a href="/resources" className="hover:underline me-4 md:me-6">Resources</a>
        </li>
    </ul>
    <ul className="flex flex-wrap items-center mt-6 text-sm font-medium text-indigo-600 dark:text-indigo-400 sm:mt-0">
        LETSCONNECT.
    </ul>
    </div>
</footer>

);
};

export default Footer;