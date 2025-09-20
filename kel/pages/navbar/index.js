import React from "react";
import Image from "next/image";

const Navbar = () => {}
    const myAbout = () => 
        window.location.href = "/about";
    const myHome = () => 
        window.location.href = "/";
    const myContact = () => {
        window.location.href = "/contact";


    return(

     <header className="text-gray-600 body-font">
<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
<Image
alt="Logo"
width={100}
height={200} />

<nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
<button
onClick={Home}
className="mr-5 hover:text-gray-900">Home </button>
<button
onClick={About}
className="mr-5 hover:text-gray-900">About </button>
<button
onClick={Contact}
className="mr-5 hover:text-gray-900">Contact</button>

</nav>

</div>
</header>
    )
}

export default Navbar;