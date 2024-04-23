import swal from 'sweetalert';

const AddCoffe = () => {
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const cheef = form.cheef.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const suplier = form.suplier.value;
        const photo = form.photo.value;

        const newCofee = {name, cheef, taste, category, details, suplier, photo}
        console.log(newCofee)

    // Post method 
    fetch("http://localhost:5000/coffee", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(newCofee)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.acknowledged){
            swal("Good job!", "Successfully coffee added!", "success");

        }
    })
    }
    return (
        <div>
            <h3>Add Coffe</h3>
            <section className="p-6 bg-gray-800 text-gray-50">
                <form onSubmit={handleSubmit} className="container flex flex-col mx-auto space-y-12">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-900">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-medium">Personal Inormation</p>
                            <p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="firstname" className="text-sm">Name</label>
                                <input id="firstname" type="text" name="name" placeholder="First name" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="lastname" className="text-sm">Cheef</label>
                                <input id="lastname" type="text" name="cheef" placeholder="Last name" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="text" className="text-sm">Taste</label>
                                <input id="text" type="text" name="taste" placeholder="text" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="address" className="text-sm">Category</label>
                                <input id="address" type="text" name="category" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="city" className="text-sm">Details</label>
                                <input id="city" type="text" name="details" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="state" className="text-sm">Suplier</label>
                                <input id="state" type="text" name="suplier" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                            <div className="col-span-full sm:col-span-6">
                                <label htmlFor="zip" className="text-sm">Photo</label>
                                <input id="zip" type="text" name="photo" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                            <div className="col-span-full sm:col-span-6">
                                <input  type="submit" value="submit" className="w-full rounded-md focus:ring focus:ring-opacity-75 bg-white text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                        </div>
                    </fieldset>
            
                </form>
            </section>
        </div>
    );
};

export default AddCoffe;