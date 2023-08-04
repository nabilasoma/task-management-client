import React from 'react';
import { FormLabel } from 'react-bootstrap';
import Swal from 'sweetalert2'

const Home = () => {


    const handleTaskManagement = (event) => {
        event.preventDefault();

        const form = event.target;

        const title = form.title.value;
        const description = form.description.value;
        const status = form.status.value;

        const newTask = {title, description, status};
        console.log(newTask);

        // send data to the server
        fetch('https://task-management-server-puce.vercel.app/task', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTask)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success',
                    text: 'Successfully saved',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })


    }
    return (
        <div className='text-center m-auto'>
            <h2 className='text-center text-danger font-bold mt-4'>Task Management
                Application</h2>
            <h3 className='text-center text-success font-bold mt-2 mb-4'>Add A New Task</h3>
            <form onSubmit={handleTaskManagement}>
            <div className='w-50 m-auto mt-4 text-center'>
            <FormLabel className="font-bold">Title</FormLabel>
                <div className="input-group input-group-lg mb-3 border rounded border-danger">
                    <input type="text" name="title" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                </div>
                <FormLabel className="font-bold">Description</FormLabel>
                <div className="input-group input-group-lg border rounded border-danger">
                    <textarea type="text" name="description" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                </div>

                <div className="input-group input-group-lg mt-3 border rounded border-danger">
                    <input type="text" name="status" defaultValue={'completed'} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
                </div>
                <input type="submit" className="mt-2 text-center btn btn-success" />
            </div>
            </form>
        </div>
    );
};

export default Home;