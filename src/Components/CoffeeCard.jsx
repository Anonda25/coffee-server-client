import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCard = ({ coffee, setCoffees,coffees }) => {
    const { _id, name, teast, quentity, category, supplier, details, photo } = coffee;
    const heandleDelete = _id => {
        // console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaning = coffees.filter(cfe => cfe._id !== _id)
                            setCoffees(remaning)
                        }
                    })
            }
        });
    }
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure>
                <img
                    src={photo}
                    alt="Movie" />
            </figure>
            <div className="flex w-full justify-between pr-10 items-center">
                <div className="">
                    <h2 className="card-title">{name}</h2>
                    <p>{quentity}</p>
                    <p>{teast}</p>
                    <p>{category}</p>
                    <p>{supplier}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="join join-vertical p-4 gap-3">
                        <button className="btn ">view</button>
                        <Link to={`/updateCoffee/${_id}`}>
                            <button className="btn">update</button>
                        </Link>
                        <button onClick={() => heandleDelete(_id)} className="btn ">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;