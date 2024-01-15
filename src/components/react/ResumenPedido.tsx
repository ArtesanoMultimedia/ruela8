import React from 'react';

const ResumenPedido = (props: { quantity: number, totalPrice: number }) => {
    return (
        <div className="bg-white rounded shadow">
            <div className="border-b-1 py-2 px-3 flex justify-between">
                <h2 className="font-bold">Resumen del pedido</h2>
                <span className="text-primary">Editar</span>
            </div>
            <div className="border-b-1 py-2 px-3 flex">
                <div className="w-16">
                                <span
                                    className="inline-flex items-center rounded-md bg-gray-700 px-2 py-1 text-xs font-small text-gray-50 ring-1 ring-inset ring-gray-500/10 absolute top-11 left-15">&times; {props.quantity}</span>
                    <img src="/images/portada.jpg" alt="Portada disco Ruela 8" className="w-full"/>
                </div>
                <div className="flex flex-col justify-center ml-5">
                    <h3 className="text-lg font-bold text-gray-900">Ruela 8</h3>
                    <p className="text-base text-gray-700">La Sinfonía de una Década</p>
                </div>
                <div className="flex flex-col justify-center ml-auto">
                    <p className="text-base text-gray-700">15 €</p>
                </div>
            </div>
            <div className="border-b-1 py-2 px-3 flex font-bold">
                <div className="flex flex-col justify-center">
                    <p className="text-base text-gray-700">Subtotal</p>
                </div>
                <div className="flex flex-col justify-center ml-auto">
                    <p className="text-base text-gray-700">{props.quantity * 15} €</p>
                </div>
            </div>
            <div className="border-b-1 py-2 px-3 flex font-bold">
                <div className="flex flex-col justify-center">
                    <p className="text-base text-gray-700">Envío</p>
                </div>
                <div className="flex flex-col justify-center ml-auto">
                    <p className="text-base text-gray-700">5 €</p>
                </div>
            </div>
            <div className="border-b-1 py-2 px-3 flex font-bold">
                <div className="flex flex-col justify-center">
                    <p className="text-base text-gray-700">Total</p>
                </div>
                <div className="flex flex-col justify-center ml-auto">
                    <p className="text-base text-gray-700">{props.totalPrice} €</p>
                </div>
            </div>
        </div>
    );
}

export default ResumenPedido;