const Footer = () => {
    return (
        <>
            <div className="py-16 px-10 md:px-28 bg-[#263238] text-white grid grid-cols-1 md:grid-cols-4 space-y-5 md:space-y-0">
                <div className="space-y-5">
                    <img loading="lazy" src="images/Footer-Logo.png" alt="logo" />
                    <p>Copyright &copy; 2025 Nexcent lts. All right reserved.</p>
                    <div className="flex gap-5">
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <img loading="lazy" src="images/instagramIcons.png" alt="icon" />
                        </a>
                        <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer">
                        <img loading="lazy" src="images/Social Icons.png" alt="icon" />
                        </a>
                        <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
                        <img loading="lazy" src="images/twitter Icons.png" alt="icon" />
                        </a>
                        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                        <img loading="lazy" src="images/youtube Icons.png" alt="icon" />
                        </a>
                    </div>
                </div>
                <div className="space-y-5">
                    <h5 className="text-xl font-semibold ">Company</h5>
                    <div className="para space-y-3">
                        <p>About us</p>
                        <p>Blog</p>
                        <p>Contact us</p>
                        <p>Pricing</p>
                        <p>Testimonials</p>
                    </div>
                </div>
                <div className="space-y-5">
                    <h5 className="text-xl font-semibold ">Support</h5>
                    <div className="para space-y-3">
                        <p>Help  center</p>
                        <p>Terms of service</p>
                        <p>Legal</p>
                        <p>Privacy Policy</p>
                        <p>Status</p>
                    </div>
                </div>
                <div className="space-y-5">
                    <h5 className="text-xl font-semibold">Stay up to date</h5>
                    <div className="flex  bg-[#515B60] w-72 items-center gap-3 overflow-hidden py-3 px-4 rounded-lg justify-between">
                        <input className="bg-transparent outline-none" type="text" placeholder="Your email address" />
                        <img  className="cursor-pointer" loading="lazy" src="images/send.png" alt="send icon" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
