import React from 'react';

const AddService = () => {

    const handleSubmit = (event) => {
        event.preventDefault()
        const name = event.target.service.value
        const description = event.target.Description.value
        console.log(name, description);
    }
    return (
        <div className='mx-8'>
            <form onSubmit={handleSubmit}>
                <div className='grid gap-4 grid-cols-2 bg-white p-8 rounded-xl'>
                    <div>
                        <div class="form-control w-full max-w-sm">
                            <label class="label">
                                <span class="label-text">What is your name?</span>
                            </label>
                            <input type="text" placeholder="Type here" name='service' class="input input-bordered w-full max-w-sm" />
                        </div>
                        <div class="form-control w-full max-w-sm">
                            <label class="label">
                                <span class="label-text mt-5">Description</span>
                            </label>
                            <textarea name='Description' class="textarea textarea-bordered  h-28 w-full max-w-sm" placeholder="Description"></textarea><br />
                        </div>

                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Image</span>
                        </label>
                        <input type="file" name="Upload Image" id="" />
                    </div>
                </div>
                <div className='grid place-items-end'>
                    <button class="btn btn-active bg-indigo-900 mt-4 w-44">Submit</button>
                </div>


            </form>
        </div>
    );
};

export default AddService;