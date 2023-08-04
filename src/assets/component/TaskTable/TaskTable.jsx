import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const TaskTable = ({ task, tasks, setTasks }) => {

    const { _id, title, description, status } = task;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://task-management-server-puce.vercel.app/task/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = tasks.filter(t => t._id !== _id);
                            setTasks(remaining);
                        }
                       
                    })
            }
        })
    }

    return (
        <div className="card mb-2 bg-secondary text-white">
            <div className="card-body">
                <h5 className="card-title text-decoration-underline">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text font-bold">Status: {status}</p>
                <div>
                    <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                        <button onClick={() => handleDelete(_id)}
                            type="button" className="btn btn-danger mr-2">Delete</button>
                       <Link to={`/update/${_id}`}>
                       <button type="button" className="btn btn-warning">Edit</button>
                       </Link>
                        <button type="button" className="btn btn-success">View</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskTable;