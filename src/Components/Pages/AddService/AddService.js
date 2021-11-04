import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddService.css'
const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>{
        axios.post('https://quiet-scrubland-74220.herokuapp.com/tickets', data)
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
                <textarea {...register("name")} placeholder="Enter the new location" />
                <textarea {...register("description")} placeholder="Description" />
                <textarea {...register("location")} placeholder="Location" />
                <textarea {...register("time")} placeholder="Tour Duration" />
                <input type="number" {...register("price")} placeholder="Budget" />
                <textarea {...register("availability")} placeholder="Availability" />
                <textarea {...register("img")} placeholder="Enter a photo of the place" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;