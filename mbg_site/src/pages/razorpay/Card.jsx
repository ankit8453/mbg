import {VStack, Text} from '@chakra-ui/react'
import React from 'react'
import { Button } from '@mui/material';

const Card = ({amount, checkoutHandler}) => {
  return (
    <VStack>
        <Text>{amount}</Text>
        <Button variant="contained" onClick={() => checkoutHandler(amount)}>Checkout</Button>
    </VStack>
  );
}

export default Card;