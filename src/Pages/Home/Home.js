import React from 'react';
import HeroImage from '../../Utility/Image_Icon/Image/pierre-chatel-innocenti-AlSlE8IAjZo-unsplash 1.png';

const Home = () => {
    return (
        <div className='w-10/12 mx-auto my-14'>
            <div className="grid grid-cols-2 items-center justify-items-center">
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
        </div>
    );
};

export default Home;