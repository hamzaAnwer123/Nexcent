const Section5 = () => {
    return (
        <>
            <section id="product" className="py-16 px-10 md:px-20 bg-[#F5F7FA] flex justify-around items-center flex-wrap gap-12">
                <div>
                    <h2 className="text-3xl text-[#4d4d4d] font-semibold">Helping a local <span className="block text-[#4CAF4F]">business reinvent itself</span></h2>
                    <p className="text-[#929393]">We reached here with our hard work and dedication</p>
                </div>
                <div className="grid grid-cols-2 gap-9">
                    <div className="flex gap-3 items-center">
                        <img loading="lazy" src="images/Icon (3).png" alt="members" />
                        <div>
                            <h5 className="text-xl font-semibold heading">2,245,341</h5>
                            <p className="para text-xs">Members</p>
                        </div>
                    </div>
                    <div className="flex gap-3 items-center">
                        <img loading="lazy" src="images/Icon (4).png" alt="members" />
                        <div>
                            <h5 className="text-xl font-semibold heading">46,328</h5>
                            <p className="para text-xs">Clubs</p>
                        </div>
                    </div>
                    <div className="flex gap-3 items-center">
                        <img loading="lazy" src="images/Icon (5).png" alt="members" />
                        <div>
                            <h5 className="text-xl font-semibold heading">828,867</h5>
                            <p className="para text-xs">Event Bookings</p>
                        </div>
                    </div>
                    <div className="flex gap-3 items-center">
                        <img loading="lazy" src="images/Icon (6).png" alt="members" />
                        <div>
                            <h5 className="text-xl font-semibold heading">1,926,436</h5>
                            <p className="para text-xs">Payments</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section5
