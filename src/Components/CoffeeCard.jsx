import { Link } from "react-router-dom";
import swal from "sweetalert2";
import Swal from 'sweetalert2'
const CoffeeCard = ({coffee, setCoffees, coffees}) => {

    const {name, cheef, taste, category, details, suplier, photo, _id} = coffee;
const handleDelete = _id => {
    console.log(_id)
    swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
      

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: "DELETE",
     
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount){
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });

                  const currentCoffees = coffees.filter(cof => cof._id !== _id );
                  setCoffees(currentCoffees)
            }
        })
        }
      });
}
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={photo} className="w-[100px] h-[100px]" alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {name} </h2>
                    <p>{cheef}</p>
                    <p>{taste}</p>
                    <p>{suplier}</p>
                    <div className="card-actions felx-col justify-end">
                        <button className="btn btn-primary">View</button>
                       <Link to={`/updateCoffee/${_id}`} > <button  className="btn btn-primary">Edit</button> </Link>
                        <button onClick={ () => handleDelete(_id)} className="btn btn-primary">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;