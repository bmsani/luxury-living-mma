import React from 'react';
import HeroImage from '../../Utility/Image_Icon/Image/pierre-chatel-innocenti-AlSlE8IAjZo-unsplash 1.png';
import House1 from '../../Utility/Image_Icon/Image/bernard-hermant-6ftZuO_-b64-unsplash 1 (1).png';
import House2 from '../../Utility/Image_Icon/Image/pierre-chatel-innocenti--u4ddXsjULQ-unsplash 1 (1).png';
import House3 from '../../Utility/Image_Icon/Image/bernard-hermant-l2D4Naz7XqQ-unsplash 1.png';
import Project1 from '../../Utility/Image_Icon/Icon/apartment 1.png';
import Project2 from '../../Utility/Image_Icon/Icon/affordable 1.png';
import Project3 from '../../Utility/Image_Icon/Icon/lessee 1.png';

const Home = () => {
    return (
        <div>
            <div className='w-10/12 mx-auto'>
                <div className="grid grid-cols-2 items-center justify-items-center my-14">
                    <div className="col-span-1">
                        <h1 className='text-6xl font-bold pb-5'>We build <br /> Your dream</h1>
                        <h2 className='pb-3'>Online Easte Agency, the mordern way to sell your own home,
                            You can use Griffin Residential to market your property</h2>
                        <button className='btn px-8 bg-indigo-900'>Booking</button>
                    </div>
                    <div className="col-span-1">
                        <img className='w-[35vw]' src={HeroImage} alt="" />
                    </div>
                </div>
                <div className="text-center pb-12">
                    <h2 className='font-bold text-xl text-gray-500'>Projects</h2>
                    <h2 className='text-4xl font-bold'>Discover latest Interior Design <br />available today</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    <div className="col-span-1">
                        <div class="card bg-base-100 shadow-xl">
                            <figure class="">
                                <img src={House1} alt="Shoes" className="rounded-t-lg w-full" />
                            </figure>
                            <div class="card-body items-center text-center">
                                <h2 class="card-title">Villa on Washington Avenue</h2>
                                <p>Dhaka, Bangladesh</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div class="card bg-base-100 shadow-xl">
                            <figure class="">
                                <img src={House2} alt="Shoes" class="rounded-t-lg w-full" />
                            </figure>
                            <div class="card-body items-center text-center">
                                <h2 class="card-title">Villa on Washington Avenue</h2>
                                <p>Dhaka, Bangladesh</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div class="card bg-base-100 shadow-xl">
                            <figure class="">
                                <img src={House3} alt="Shoes" class="rounded-t-lg w-full" />
                            </figure>
                            <div class="card-body items-center text-center">
                                <h2 class="card-title">Villa on Washington Avenue</h2>
                                <p>Dhaka, Bangladesh</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center pt-20 pb-14'>
                    <h2 className='font-bold text-xl text-gray-500'>Service</h2>
                    <h2 className='text-4xl font-bold'>We're an agency tailored to all <br /> clients'needs that always delivers </h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    <div className="col-span-1">
                        <div class="card bg-base-100 shadow-xl">
                            <figure class="">
                                <img src={Project1} alt="Shoes" className="w-[80px]" />
                            </figure>
                            <div class="card-body items-center text-center">
                                <h2 class="card-title">Office Interior Design</h2>
                                <h2 class="card-title">$299</h2>
                                <p className='px-9'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div class="card bg-base-100 shadow-xl">
                            <figure class="">
                                <img src={Project2} alt="Shoes" className="w-[80px]" />
                            </figure>
                            <div class="card-body items-center text-center">
                                <h2 class="card-title">Showroom Design</h2>
                                <h2 class="card-title">$399</h2>
                                <p className='px-9'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div class="card bg-base-100 shadow-xl">
                            <figure class="">
                                <img src={Project3} alt="Shoes" className="w-[80px]" />
                            </figure>
                            <div class="card-body items-center text-center">
                                <h2 class="card-title">Residential/ Home</h2>
                                <h2 class="card-title">$499</h2>
                                <p className='px-9'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                            </div>
                        </div>
                    </div>

                </div>
                <button className='btn px-8 bg-indigo-900 block mx-auto my-14'>Explore more</button>
            </div>
            <div className='bg-gray-200'>
                <div className='w-10/12 mx-auto'>
                    <h2 className='text-4xl font-bold text-center pt-24 pb-12'> Testimonials </h2>
                </div>
            </div>
        </div>
    );
};

export default Home;