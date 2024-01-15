import React, {useState} from 'react';
import PaymentForm from './PaymentForm.tsx';
import ShoppingForm from "./ShoppingForm.jsx";
import ResumenPedido from "./ResumenPedido";
import {FaPlusCircle} from "react-icons/fa";

const OrderForm = () => {
    const unitPrice = 15; // Precio por unidad
    const shippingCost = 5; // Gastos de envío fijos

    const [step, setStep] = useState(1); // [1, 2, 3

    const [quantity, setQuantity] = useState(1);
    const totalPrice = unitPrice * quantity + shippingCost;
    const [showAdditionalAddressInfo, setShowAdditionalAddressInfo] = useState(false);
    const [showAddNotes, setShowAddNotes] = useState(false);

    const handleQuantityChange = (e) => {
        setQuantity(Math.max(1, e.target.value));
    };

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        setQuantity(Math.max(1, quantity - 1));
    };

    const styles = {
        bruno: {
            fontFamily: "'Bruno JB', cursive"
        }
    }

    return (
        <div className="relative pt-36 ml-auto">
                {step === 1 && (
                    <div className="flex flex-col md:flex-row">
                        <div className="md:basis-2/3">
                            <img src="/images/portada.jpg" alt="Portada disco Ruela 8" className="w-full"/>
                        </div>
                        <div className="md:basis-1/3">
                            <div
                                className="flex flex-col justify-center md:p-l-12 sm:p-l-0 md:p-t-0 xl:p-t-12 sm:p-t-12 xs:p-t-12 w-full">
                                <img src="/images/logo.png" alt="Logo Ruela 8" className="w-24"/>
                                <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 " style={styles.bruno}>La Sinfonía de una
                                    Década</p>


                                <div id="orderForm" className="space-y-6">
                                    <div>
                                        <label htmlFor="quantity"
                                               className="block text-sm font-medium text-gray-700">Cantidad</label>
                                        <div className="flex items-center mt-1">
                                            <button
                                                type="button"
                                                onClick={decrementQuantity}
                                                className="min-w-8 w-8 h-8 flex items-center justify-center border border-primary text-primary rounded-md"
                                            >
                                                -
                                            </button>
                                            <input
                                                type="number"
                                                id="quantity"
                                                name="quantity"
                                                min="1"
                                                value={quantity}
                                                onChange={handleQuantityChange}
                                                className="flex-1 max-w-full mx-2 block py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm text-center"
                                            />
                                            <button
                                                type="button"
                                                onClick={incrementQuantity}
                                                className="min-w-8 w-8 h-8 flex items-center justify-center border border-primary text-primary rounded-md"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex justify-between">
                                        <p className="text-sm font-medium text-gray-700">Precio unitario:</p>
                                        <p className="text-sm font-medium text-gray-700">{unitPrice} €</p>
                                    </div>

                                    <div className="flex justify-between">
                                        <p className="text-sm font-medium text-gray-700">Cantidad:</p>
                                        <p className="text-sm font-medium text-gray-700">{quantity}</p>
                                    </div>

                                    <div className="flex justify-between">
                                        <p className="text-sm font-medium text-gray-700">Subtotal:</p>
                                        <p className="text-sm font-medium text-gray-700">{unitPrice * quantity} €</p>
                                    </div>

                                    <div className="flex justify-between">
                                        <p className="text-sm font-medium text-gray-700">Gastos de envío:</p>
                                        <p className="text-sm font-medium text-gray-700">{shippingCost} €</p>
                                    </div>

                                    <div className="flex justify-between">
                                        <p className="text-lg font-semibold text-gray-900">Total:</p>
                                        <p className="text-lg font-semibold text-gray-900">{totalPrice} €</p>
                                    </div>

                                    <button
                                        className="w-full flex justify-center py-2 px-4 mt-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                                        onClick={() => setStep(2)}
                                    >Continuar
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div>
                        <div className="container mx-auto relative">
                            <div className="flex flex-col md:flex-row gap-10 relative">
                                <div className="md:basis-6/10">
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
                                                <label htmlFor="email"
                                                       className="block text-sm font-bold text-gray-700">Dirección
                                                    de Correo Electrónico&nbsp;
                                                    <abbr className="text-red-600 no-underline"
                                                          aria-label="(Obligatorio)"
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
                                                <p className="mt-1 text-xs text-gray-500">Te enviaremos un correo
                                                    electrónico con la
                                                    confirmación y el seguimiento de tu pedido.</p>
                                            </div>
                                        </div>
                                        <div className="px-3 mb-5">
                                            <div>
                                                <label htmlFor="phone"
                                                       className="block text-sm font-bold text-gray-700">Teléfono&nbsp;
                                                    <abbr className="text-red-600 no-underline"
                                                          aria-label="(Obligatorio)"
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
                                                <p className="mt-1 text-xs text-gray-500">Se usará en caso de incidencia
                                                    o para
                                                    preguntas relacionadas con el envío.</p>
                                            </div>
                                        </div>
                                        <div className="bg-gray-100 py-5 px-3">
                                            <h2 className="font-bold mb-3">Dirección de Envío</h2>
                                            <div className="flex flex-col md:flex-row gap-3">
                                                <div className="flex-1">
                                                    <div>
                                                        <label htmlFor="name"
                                                               className="block text-sm font-bold text-gray-700">
                                                            Nombre&nbsp;<abbr className="text-red-600 no-underline"
                                                                              aria-label="(Obligatorio)"
                                                                              title="obligatorio">*</abbr>
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
                                                        <label htmlFor="surname"
                                                               className="block text-sm font-bold text-gray-700">
                                                            Apellidos&nbsp;<abbr className="text-red-600 no-underline"
                                                                                 aria-label="(Obligatorio)"
                                                                                 title="obligatorio">*</abbr>
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
                                                    <abbr className="text-red-600 no-underline"
                                                          aria-label="(Obligatorio)"
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
                                                        <p><FaPlusCircle className="inline"/> Añadir más señas como
                                                            edificio, escalera, portal,
                                                            puerta,... (opcional)</p>
                                                    </div>
                                                </div>
                                            )}
                                            {showAdditionalAddressInfo && (
                                                <div className="mt-5">
                                                    <label htmlFor="address2"
                                                           className="block text-sm font-bold text-gray-700">Información
                                                        adicional de la
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
                                                               className="block text-sm font-bold text-gray-700">Código
                                                            Postal&nbsp;
                                                            <abbr className="text-red-600 no-underline"
                                                                  aria-label="(Obligatorio)"
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
                                                            <abbr className="text-red-600 no-underline"
                                                                  aria-label="(Obligatorio)"
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
                                                            <abbr className="text-red-600 no-underline"
                                                                  aria-label="(Obligatorio)"
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
                                                            <abbr className="text-red-600 no-underline"
                                                                  aria-label="(Obligatorio)"
                                                                  title="obligatorio">*</abbr>
                                                        </label>
                                                        <div className="mt-3 ml-3">
                                                            España*
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-5">
                                                * Si quieres que te enviemos el disco a otro país, ponte en contacto con
                                                nosotros en el correo o
                                                teléfono indicados en la parte inferior de la página.
                                            </div>


                                        </div>
                                        <div className="px-3 py-5 mb-5">
                                            {!showAddNotes && (
                                                <div
                                                    onClick={() => setShowAddNotes(true)}
                                                    className="text-sm font-bold text-gray-700 cursor-pointer hover:text-secondary"
                                                >
                                                    <p><FaPlusCircle className="inline"/> Añadir notas al pedido
                                                        (opcional)</p>
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
                                            <p>Pago</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:basis-4/10 sticky top-20">
                                    <div className="bg-white rounded shadow">
                                        <div className="border-b-1 py-2 px-3 flex justify-between">
                                            <h2 className="font-bold">Resumen del pedido</h2>
                                            <span className="text-primary">Editar</span>
                                        </div>
                                        <div className="border-b-1 py-2 px-3 flex">
                                            <div className="w-16">
                                <span
                                    className="inline-flex items-center rounded-md bg-gray-700 px-2 py-1 text-xs font-small text-gray-50 ring-1 ring-inset ring-gray-500/10 absolute top-11 left-15">&times; {quantity}</span>
                                                <img src="/images/portada.jpg" alt="Portada disco Ruela 8"
                                                     className="w-full"/>
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
                                                <p className="text-base text-gray-700">{quantity * 15} €</p>
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
                                                <p className="text-base text-gray-700">{totalPrice} €</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
        </div>
    );
};

export default OrderForm;
