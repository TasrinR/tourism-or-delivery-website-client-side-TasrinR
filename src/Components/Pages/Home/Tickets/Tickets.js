import userEvent from '@testing-library/user-event';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Ticket from './Ticket';

const Tickets = () => {
    const {user}= useAuth()
    const [tickets, setTickets] = useState([]);
    useEffect(()=>{
        fetch('https://quiet-scrubland-74220.herokuapp.com/tickets')
        .then(res=>res.json())
        .then(data=>{
            setTickets(data);
        })
    },[])
    
    return (
        <div>
            { 
                tickets?.map( ticket => <Ticket
                key={ticket._id}
                ticket={ticket}
                ></Ticket>)
            }
        </div>
    );
};

export default Tickets;