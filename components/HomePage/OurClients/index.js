/* eslint-disable @next/next/no-img-element */
import React from 'react'

function OurClients() {
    return (
        <section className='bg-slate-800 font-fraunces'>
            <div className='flex flex-col justify-center items-center py-10 '>
                <h1 className='font-medium text-2xl text-secondarytext italic text-center md:text-3xl'>More than 150 happy<br className='md:hidden' /> clients</h1>
                <div className='flex flex-col justify-center items-center gap-8 py-10 md:flex-row md:px-20'>
                    <img src="ourClient1.svg" alt="icon1" className="h-10 w-[6rem] md:w-[5rem]" />
                    <img src="ourClient2.svg" alt="icon2" className="h-10 w-[7rem] md:w-[5rem]" />
                    <img src="ourClient3.svg" alt="icon3" className="h-10 w-[9rem] md:w-[5rem]" />
                    <img src="ourClient4.svg" alt="icon4" className="h-10 w-[6rem] md:w-[5rem]" />
                    <img src="ourClient5.svg" alt="icon5" className="h-10 w-[8rem] md:w-[5rem]" />
                    <img src="ourClient6.svg" alt="icon6" className="h-10 w-[7rem] md:w-[5rem]" />
                    <img src="ourClient7.svg" alt="icon7" className="h-10 w-[4rem] md:w-[4rem] md:h-[2rem]" />
                </div>
            </div>
        </section>
    )
}

export default OurClients