import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutFrom'

const stripePromise = loadStripe('pk_test_51L1uuUCT1NJC8mjcbixyYrLbVw6nYtMtyiOJbmqtN7bxmX1mSwSQREZdjJqZldjHOa5Ax3xAPDdzNfP7Ayr3nZuH00SokcmCZ1');

const PaymentGetway = () => {

    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title justify-center font-bold mb-3 border-b-4 rounded-lg border-green-200 ">PAY YOUR BILL</h2>
                <Elements stripe={stripePromise}>
                    <CheckOutForm />
                </Elements>
            </div>
        </div>
    );
};

export default PaymentGetway;