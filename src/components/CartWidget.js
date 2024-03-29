import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from "../context/CartContext";

const CartWidget = () => {

    const {totalproductos} = useCartContext();

    return (
        <>
            {/* <label tabindex="0" class="btn btn-ghost btn-circle">
                <div class="indicator">
                    <Link to={'/cart'}><svg class="h-8 w-8" fill="none" viewBox="2 2 24 24" stroke="white"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        <span class="badge badge-sm indicator-item">8</span></Link>
                </div>
            </label> */}

            <Link to={'/cart'}><button type="button" class="btn position-relative mt-2">
                <svg class="h-8 w-8" fill="none" viewBox="2 2 24 24" stroke="white"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info">{totalproductos}</span>
            </button></Link>

        </>
    )
}

export default CartWidget