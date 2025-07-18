

const Section3 = () => {
    return (
        <>
            <div className="py-10 px-10 md:px-20 space-y-12">
                <div className="w-full flex gap-3 items-center flex-col">
                    <h2 className="heading text-4xl text-center font-medium w-full md:w-[40rem]">Manage your entire community in a single system</h2>
                    <p className="para ">Who is Nextcent suitable for?</p>
                </div>
                <div className="flex flex-wrap justify-center gap-32">
                    <div className="w-80 shadow-md rounded-md flex flex-col items-center p-8 space-y-3 text-center">
                        <img loading="lazy" src="images/Icon.png" alt="member" />
                        <h4 className="text-3xl font-semibold heading">Membership Organisations</h4>
                        <p className="para">Our membership management software provides full automation of membership renewals and payments</p>
                    </div>
                    <div className="w-80 shadow-md rounded-md flex flex-col items-center p-8 space-y-3 text-center">
                        <img loading="lazy" src="images/Icon-2.png" alt="Associations" />
                        <h4 className="text-3xl font-semibold heading">National Associations</h4>
                        <p className="para">Our membership management software provides full automation of membership renewals and payments</p>
                    </div>
                    <div className="w-80 shadow-md rounded-md flex flex-col items-center p-8 space-y-3 text-center">
                        <img loading="lazy" src="images/Icon-3.png" alt="Groups" />
                        <h4 className="text-3xl font-semibold heading">Clubs And Groups</h4>
                        <p className="para">Our membership management software provides full automation of membership renewals and payments</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section3
