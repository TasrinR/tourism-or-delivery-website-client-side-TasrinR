import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddService.css'
const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>{
        axios.post('http://localhost:5000/tickets', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
                console.log(res.data);
            })
    }
    return (
        <div className="add-service m-5 p-5">
            <form onSubmit={handleSubmit(onSubmit)}>
                <textarea {...register("New Tour")} placeholder="Enter the new location" />
                <textarea {...register("description")} placeholder="Description" />
                <textarea {...register("country")} placeholder="Country" />
                <textarea {...register("city")} placeholder="City" />
                <input type="number" {...register("contactNo")} placeholder="Contact No" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;