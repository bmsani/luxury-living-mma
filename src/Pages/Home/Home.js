import React from 'react';
import HeroImage from '../../Utility/Image_Icon/Image/pierre-chatel-innocenti-AlSlE8IAjZo-unsplash 1.png';
import House1 from '../../Utility/Image_Icon/Image/bernard-hermant-6ftZuO_-b64-unsplash 1 (1).png';
import House2 from '../../Utility/Image_Icon/Image/pierre-chatel-innocenti--u4ddXsjULQ-unsplash 1 (1).png';
import House3 from '../../Utility/Image_Icon/Image/bernard-hermant-l2D4Naz7XqQ-unsplash 1.png';

const Home = () => {
    return (
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
            <div className="grid grid-cols-3">
                <div className="col-span-1">
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure class="">
                            <img src={House1} alt="Shoes" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">Villa on Washington Avenue</h2>
                            <p>Dhaka, Bangladesh</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure class="">
                            <img src={House2} alt="Shoes" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">Villa on Washington Avenue</h2>
                            <p>Dhaka, Bangladesh</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure class="">
                            <img src={House3} alt="Shoes" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">Villa on Washington Avenue</h2>
                            <p>Dhaka, Bangladesh</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;