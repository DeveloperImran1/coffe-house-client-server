import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffe = () => {
    const singleCoffee = useLoaderData();
    console.log(singleCoffee)
const {name, cheef, taste, category, details, suplier, photo, _id} = singleCoffee;
    const handleUpdated = e => {
        e.preventDefault();
        const form = e.target;
        const updatename = form.name.value;
        const updatecheef = form.cheef.value;
        const updatetaste = form.taste.value;
        const updatecategory = form.category.value;
        const updatesuplier = form.suplier.value;
        const updatephoto = form.photo.value;

        const newCofee = {updatename, updatecheef, updatetaste, updatecategory, updatesuplier, updatephoto}
        console.log(newCofee)

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newCofee)
        } )
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                Swal.fire({
                    title: "Updated!",
                    text: "Your coffee has been updated.",
                    icon: "success"
                  });
    
            }
        })
    }
    return (
        <div>
            <h3>UPdate coffe</h3>
            <section className="p-6 bg-gray-800 text-gray-50">
                <form onSubmit={handleUpdated} className="container flex flex-col mx-auto space-y-12">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-900">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-medium">Personal Inormation</p>
                            <p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="firstname" className="text-sm">Name</label>
                                <input id="firstname" type="text" name="name" defaultValue={name} placeholder="First name" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="lastname" className="text-sm">Cheef</label>
                                <input id="lastname" type="text" name="cheef" defaultValue={cheef} placeholder="Last name" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="text" className="text-sm">Taste</label>
                                <input id="text" type="text" name="taste" placeholder="text" defaultValue={taste} className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="address" className="text-sm">Category</label>
                                <input id="address" type="text" name="category" defaultValue={category} placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="city" className="text-sm">Details</label>
                                <input id="city" type="text" name="details" defaultValue={details} placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="state" className="text-sm">Suplier</label>
                                <input id="state" type="text" name="suplier" defaultValue={suplier} placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                            <div className="col-span-full sm:col-span-6">
                                <label htmlFor="zip" className="text-sm">Photo</label>
                                <input id="zip" type="text" name="photo" defaultValue={photo} placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                            <div className="col-span-full sm:col-span-6">
                                <input type="submit" value="submit" className="w-full rounded-md focus:ring focus:ring-opacity-75 bg-white text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                        </div>
                    </fieldset>

                </form>
            </section>
        </div>
    );
};

export default UpdateCoffe;