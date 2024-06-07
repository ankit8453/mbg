import React from 'react'
import { Box } from '@mui/system';
import {Stack} from '@mui/material';
import Card from './Card';
import axios from 'axios'
import Icon from 'C:/Users/HP/Desktop/internship/mbg_site/mbg_site/src/assets/mbg.png'
const Razorpay = () => {

    const checkoutHandler = async (amount) => {

        const { data: { key } } = await axios.get("http://localhost:4000/api/getkey")

        const { data:{ order } } = await axios.post("http://localhost:4000/api/checkout", {amount})

        const options = {
            key, 
            amount: order.amount, 
            currency: "INR",
            name: "MBG Cards",
            description: "API Solutions",
            image: Icon,
            order_id: order.id, 
            callback_url: "http://localhost:4000/api/paymentverification",
            prefill: {
                "name": "Ankit Pawar",
                "email": "ankit.pawar@example.com",
                "contact": "9000090000"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#3f8aeb"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open();
    }

  return (
    <Box>
        <Stack direction={"row"}>
            <Card amount={30} checkoutHandler={checkoutHandler} />
        </Stack>
    </Box>
  );
};

export default Razorpay;