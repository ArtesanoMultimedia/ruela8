import React from 'react';
import {FaPlusCircle} from 'react-icons/fa';
import {IconContext} from 'react-icons';
import provinciasData from '../../../src/data/provinciasData.json';
import {loadStripe} from '@stripe/stripe-js';
import {CardElement, Elements, PaymentElement, useStripe, useElements} from '@stripe/react-stripe-js';
import {paymentIntent} from "../../utils/stripe/payment-intent-utils.ts";

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        // const {error, paymentMethod} = await stripe.createPaymentMethod({
        //     type: 'card',
        //     card: elements.getElement(CardElement),
        // });
    }

    return (
        <form>

            <button type="submit" disabled={!stripe}>Pagar</button>
        </form>
    )
}

const ShoppingForm = () => {
    const [showAdditionalAddressInfo, setShowAdditionalAddressInfo] = React.useState(false);
    const [showAddNotes, setShowAddNotes] = React.useState(false);
    const [provincias, setProvincias] = React.useState([]);
    const [selectedProvincia, setSelectedProvincia] = React.useState('');
    const stripePromise = loadStripe('pk_test_51NIyNaKvJU3yepItWHXwEEXUoMuk9Ni0hmtS3nTURkxbt4EpEgTh4LdPgl9gkbkEYgyKWFSmoG4EAkGNW0OrHw4y006pWUv6yD');
    const options = {
        clientSecret: 'sk_test_51NIyNaKvJU3yepItaxqBBRcEi41JdyilzFT2sxyI52g9gz9QX26TGPFNP0u5AdsHvZ4lsU2dWWTEeIfPYYC7Mk5v00xssqOW6f',
    };


    return (
        <div className="bg-white rounded shadow">
            <h2 className="py-2 px-3 font-bold">Mi Contacto</h2>
            <div className="px-3">
                <div className="bg-gray-100 text-center py-3">
                    <p className="text-sm font-light">¿Ya tienes una cuenta? <span
                        className="font-bold">Inicia sesión</span>
                    </p>
                </div>
            </div>
            <div className="px-3 py-1 mt-6">
                <hr className="border-gray-300"/>
                <p className="text-sm text-center relative z-20 -top-3"
                ><span className="bg-white px-2">O crea una nueva</span></p>
            </div>
            <div className="px-3 mb-5">
                <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700">Dirección
                        de Correo Electrónico&nbsp;
                        <abbr className="text-red-600 no-underline" aria-label="(Obligatorio)"
                              title="obligatorio">*</abbr>
                    </label>
                    <div className="mt-1">
                        <input
                            type="text"
                            id="email"
                            name="email"
                            autoComplete="email"
                            className="max-w-full w-full block py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm"
                        />
                    </div>
                    <p className="mt-1 text-xs text-gray-500">Te enviaremos un correo electrónico con la
                        confirmación y el seguimiento de tu pedido.</p>
                </div>
            </div>
            <div className="px-3 mb-5">
                <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-700">Teléfono&nbsp;
                        <abbr className="text-red-600 no-underline" aria-label="(Obligatorio)"
                              title="obligatorio">*</abbr>
                    </label>
                    <div className="mt-1">
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            autoComplete="phone"
                            className="max-w-full w-full block py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm"
                        />
                    </div>
                    <p className="mt-1 text-xs text-gray-500">Se usará en caso de incidencia o para
                        preguntas relacionadas con el envío.</p>
                </div>
            </div>
            <div className="bg-gray-100 py-5 px-3">
                <h2 className="font-bold mb-3">Dirección de Envío</h2>
                <div className="flex flex-col md:flex-row gap-3">
                    <div className="flex-1">
                        <div>
                            <label htmlFor="name" className="block text-sm font-bold text-gray-700">
                                Nombre&nbsp;<abbr className="text-red-600 no-underline"
                                                  aria-label="(Obligatorio)" title="obligatorio">*</abbr>
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    autoComplete="name"
                                    className="max-w-full w-full block py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div>
                            <label htmlFor="surname" className="block text-sm font-bold text-gray-700">
                                Apellidos&nbsp;<abbr className="text-red-600 no-underline"
                                                     aria-label="(Obligatorio)" title="obligatorio">*</abbr>
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    id="surname"
                                    name="surname"
                                    autoComplete="surname"
                                    className="max-w-full w-full block py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <label htmlFor="address"
                           className="block text-sm font-bold text-gray-700">Dirección&nbsp;
                        <abbr className="text-red-600 no-underline" aria-label="(Obligatorio)"
                              title="obligatorio">*</abbr>
                    </label>
                    <div className="mt-1">
                        <input
                            type="text"
                            id="address"
                            name="address"
                            autoComplete="address"
                            className="max-w-full w-full block py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm"
                        />
                    </div>
                </div>
                {!showAdditionalAddressInfo && (
                    <div className="mt-5">
                        <div
                            onClick={() => setShowAdditionalAddressInfo(true)}
                            className="text-sm font-bold text-gray-700 cursor-pointer hover:text-secondary"
                        >
                                <p><FaPlusCircle className="inline"/> Añadir más señas como edificio, escalera, portal,
                                    puerta,... (opcional)</p>
                        </div>
                    </div>
                )}
                {showAdditionalAddressInfo && (
                    <div className="mt-5">
                        <label htmlFor="address2"
                               className="block text-sm font-bold text-gray-700">Información adicional de la
                            dirección</label>
                        <div className="mt-1">
                            <input
                                type="text"
                                id="address2"
                                name="address2"
                                autoComplete="address2"
                                className="max-w-full w-full block py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm"
                            />
                        </div>
                    </div>
                )}
                <div className="flex flex-col md:flex-row md:gap-3">
                    <div className="flex-1">
                        <div className="mt-5">
                            <label htmlFor="postal-code"
                                   className="block text-sm font-bold text-gray-700">Código Postal&nbsp;
                                <abbr className="text-red-600 no-underline" aria-label="(Obligatorio)"
                                      title="obligatorio">*</abbr>
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    id="postal-code"
                                    name="postal-code"
                                    autoComplete="postal-code"
                                    className="max-w-full w-full block py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="mt-5">
                            <label htmlFor="city"
                                   className="block text-sm font-bold text-gray-700">Ciudad&nbsp;
                                <abbr className="text-red-600 no-underline" aria-label="(Obligatorio)"
                                      title="obligatorio">*</abbr>
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    autoComplete="city"
                                    className="max-w-full w-full block py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row md:gap-3">
                    <div className="flex-1">
                        <div className="mt-5">
                            <label htmlFor="state"
                                   className="block text-sm font-bold text-gray-700">Provincia&nbsp;
                                <abbr className="text-red-600 no-underline" aria-label="(Obligatorio)"
                                      title="obligatorio">*</abbr>
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    id="state"
                                    name="state"
                                    autoComplete="state"
                                    className="max-w-full w-full block py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="mt-5">
                            <label htmlFor="country"
                                   className="block text-sm font-bold text-gray-700">País&nbsp;
                                <abbr className="text-red-600 no-underline" aria-label="(Obligatorio)"
                                      title="obligatorio">*</abbr>
                            </label>
                            <div className="mt-3 ml-3">
                                España*
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-5">
                    * Si quieres que te enviemos el disco a otro país, ponte en contacto con nosotros en el correo o
                    teléfono indicados en la parte inferior de la página.
                </div>


            </div>
            <div className="px-3 py-5 mb-5">
                {!showAddNotes && (
                    <div
                        onClick={() => setShowAddNotes(true)}
                        className="text-sm font-bold text-gray-700 cursor-pointer hover:text-secondary"
                    >
                            <p><FaPlusCircle className="inline"/> Añadir notas al pedido (opcional)</p>
                    </div>
                )}
                {showAddNotes && (

                    <div>
                        <label htmlFor="message"
                               className="block text-sm font-bold text-gray-700">Mensaje</label>
                        <div className="mt-1">
                                    <textarea
                                        id="message"
                                        name="message"
                                        autoComplete="message"
                                        className="max-w-full w-full block py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm"
                                    />
                        </div>
                    </div>
                )}
            </div>
            <div className="px-3 mb-5">

            </div>
        </div>
    )
}

export default ShoppingForm;