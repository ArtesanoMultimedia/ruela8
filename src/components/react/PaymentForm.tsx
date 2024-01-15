import React from 'react';
import ResumenPedido from './ResumenPedido';
import ShoppingForm from './ShoppingForm.jsx';

const PaymentForm = (props: { quantity: number, totalPrice: number }) => {
    return (
        <div className="container mx-auto relative">
            <div className="flex flex-col md:flex-row gap-10 relative">
                <div className="md:basis-6/10">
                    <ShoppingForm/>
                </div>
                <div className="md:basis-4/10 sticky top-20">
                    <ResumenPedido quantity={props.quantity} totalPrice={props.totalPrice}/>
                </div>
            </div>
        </div>
    );
};


export default PaymentForm;