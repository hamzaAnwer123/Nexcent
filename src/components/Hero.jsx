const Hero = () => {
    return (
        <>
            <section id="home" className="bg-[#F5F7FA] md:h-[90vh] py-10 px-10 md:px-20 flex items-center justify-around flex-wrap-reverse gap-5">
                <div className="space-y-5">
                    <h1 className="text-6xl text-[#4d4d4d]">Lessons and insights <span className="block text-[#4CAF4F]">from 8 years</span></h1>
                    <p className="text-[#929393]">where to grow your business as a photographer: site or social media?</p>
                    <button className="bg-[#4CAF4F] text-white px-5 py-2 rounded-md">Register</button>

                </div>
                <div>
                    <img loading="lazy" src="images/Illustration.png" alt="Illustration" />
                </div>
            </section>
        </>
    )
}

export default Hero
