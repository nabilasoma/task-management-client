import { FormLabel } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateTask = () => {

    const task = useLoaderData();
    const { _id, title, description, status } = task;

    const handleUpdatedTask = (event) => {
        event.preventDefault();

        const form = event.target;

        const title = form.title.value;
        const description = form.description.value;
        const status = form.status.value;

        const updateTask = {title, description, status};
        console.log(updateTask);

        // send data to the server
        fetch(`https://task-management-server-puce.vercel.app/task/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateTask)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success',
                    text: 'Successfully saved',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })


    };


    return (
        <div className='text-center m-auto'>
            <h3 className='text-center text-success font-bold mt-2 mb-4'>Update Your Task</h3>
            <form onSubmit={handleUpdatedTask}>
                <div className='w-50 m-auto mt-4 text-center'>
                    <FormLabel className="font-bold">Title</FormLabel>
                    <div className="input-group input-group-lg mb-3 border rounded border-danger">
                        <input type="text" name="title" defaultValue={title} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                    <FormLabel className="font-bold">Description</FormLabel>
                    <div className="input-group input-group-lg border rounded border-danger">
                    
                        <textarea type="text" name="description" defaultValue={description} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>

                    <div className="input-group input-group-lg mt-3 border rounded border-danger">
                        <input type="text" name="status" placeholder="Status" defaultValue={'completed'} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                    </div>
                    <input type="submit" className="mt-2 text-center btn btn-success" />
                </div>
            </form>
        </div>
    );
};

export default UpdateTask;