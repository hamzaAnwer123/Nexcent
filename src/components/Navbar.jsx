


import { useState } from "react"
import { RiCloseLine, RiMenu4Fill } from "react-icons/ri"

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const handleMenuClick = () => {
        setMenu(!menu);
    };
    return (
        <>
            <header className="bg-[#F5F7FA] z-50 sticky top-0 left-0 flex justify-between items-center py-6 px-6 md:px-16 ">
                <a href="#home">
                <img loading="lazy" src="images/Logo.png" alt="logo" />
                </a>
                <nav className="lg:flex gap-7 hidden">
                   <p><a  href="#home">Home</a></p>
                    <p><a href="#service">Service</a></p>
                    <p><a href="#feature">Feature</a></p>
                    <p><a href="#product">Product</a></p>
                    <p><a href="#testimonial">Testimonial</a></p>
                    <p><a  href="#FAQ">FAQ</a></p>
                </nav>
                <div className="space-x-6 lg:block hidden">
                    <button className="text-[#5EB761]">Login</button>
                    <button className="bg-[#4CAF4F] text-white px-3 py-2 rounded-md">Sign up</button>
                </div>
                <RiMenu4Fill className="text-3xl cursor-pointer block lg:hidden" onClick={handleMenuClick} />

                 {/* -------------------- menu items ------------------------  */}

                <div className={`absolute top-0 right-0 w-full h-screen flex flex-col lg:hidden items-center justify-center gap-7 bg-white bg-opacity-20 backdrop-blur-md text-xl transform transition-transform duration-300 ease-in-out ${menu ? "translate-y-0" : "translate-y-full"} overflow-hidden`}>
                    <RiCloseLine className="absolute right-6 top-6 text-3xl" onClick={handleMenuClick} />
                    <p><a onClick={handleMenuClick} href="#home">Home</a></p>
                    <p><a onClick={handleMenuClick} href="#service">Service</a></p>
                    <p><a onClick={handleMenuClick} href="#feature">Feature</a></p>
                    <p><a onClick={handleMenuClick} href="#product">Product</a></p>
                    <p><a onClick={handleMenuClick} href="#testimonial">Testimonial</a></p>
                    <p><a onClick={handleMenuClick} href="#FAQ">FAQ</a></p>
                    <button className="text-[#5EB761]">Login</button>
                    <button className="bg-[#4CAF4F] text-white px-3 py-2 rounded-md">Sign up</button>
                </div>
            </header>
        </>
    );
};

export default Navbar;