const Footer = () => {
    return (


<footer className="bg-indigo-100 rounded-lg shadow m-3 ">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      
    <ul className="flex flex-wrap items-center mt-2 text-l font-medium text-indigo-600 ">
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
    <ul className="flex flex-wrap items-center mt-2 text-l font-medium text-indigo-600 ">
        LETSCONNECT.
    </ul>
    </div>
</footer>

);
};

export default Footer;