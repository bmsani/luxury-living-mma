import React from 'react';

const Review = () => {

    const handleSubmit = (event) => {
        event.preventDefault()
        const name = event.target.name.value;
        const Designation = event.target.Designation.value;
        const Description = event.target.Description.value;
        console.log(name, Designation, Description);
    }
    return (
        <div className='mx-9'>

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Your Name" name='name' class="input  w-full max-w-xl" /> <br />
                <input type="text" placeholder="Company’s name, Designation" name='Designation' class="input  w-full my-4 max-w-xl" /><br />
                <textarea name='Description' class="textarea  h-28 w-full max-w-xl" placeholder="Description"></textarea><br />
                <button class="btn btn-active bg-indigo-900  mt-4 w-44">Submit</button>
            </form>
        </div>
    );
};

export default Review;