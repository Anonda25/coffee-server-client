import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const updateCoffees = useLoaderData()
    console.log(updateCoffees);
    const { _id, name, teast, quentity, supplier, category, details, photo }= updateCoffees;
    const handelUpdateCoffee = event => {
        event.preventDefault()
        const from = event.target;
        const name = from.name.value;
        const teast = from.teast.value;
        const quentity = from.quentity.value;
        const category = from.category.value;
        const details = from.details.value;
        const photo = from.photo.value;
        const newusers = { name, teast, quentity, category, details, photo };
        console.log(newusers);
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newusers)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount >0) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Update coffee successfully ',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }
    return (
        <div className="w-11/12 mx-auto">
            

            <div className="bg-[#F4F2F0]">

                <form onSubmit={handelUpdateCoffee} className="card-body">
                    <h1>Update  coffee {name}</h1>
                    {/* from row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Coffee Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={name} placeholder=" coffee name" className="input input-bordered" required />
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Availale Quentity</span>
                            </label>
                            <input type="text" name="quentity" defaultValue={quentity} placeholder="Add coffee" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* from row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Supplier Name</span>
                            </label>
                            <input type="text" name="supplier" defaultValue={supplier} placeholder="Supplier name" className="input input-bordered" required />
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Teast</span>
                            </label>
                            <input type="text" name="teast" defaultValue={teast} placeholder="Teast" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* from row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input type="text" name="category" defaultValue={category} placeholder="category" className="input input-bordered" required />
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <input type="text" name="details" defaultValue={details} placeholder="details" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* from row */}
                    <div className="md:flex mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Photo url</span>
                            </label>
                            <input type="text" name="photo" defaultValue={photo} placeholder="photo Url" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="md:flex mb-8">
                        <div className="form-control w-full">

                            <input type="submit" className="btn btn-block" value="Update Coffee" />
                        </div>
                    </div>



                </form>
            </div>

        </div>

    );
};

export default UpdateCoffee;