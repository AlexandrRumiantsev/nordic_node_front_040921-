import React, { useState } from "react";
import { useSelector } from 'react-redux'

import {Auth} from "./Components/Auth"
import {Reg} from "./Components/Reg"

export function Login() {

    const [currentPage, setCurrentPage] = React.useState("Auth");

    const itemUser = useSelector((state) => state.User.item);
    const errorMassage = useSelector((state) => state.User.error);

    return (
        !itemUser ? (
            <div>
                {
                    currentPage === "Auth" ? 
                        <Auth 
                            setCurrentPag={setCurrentPage}
                        />
                    :
                    <Reg
                        setCurrentPag={setCurrentPage}
                    />
                }
                <h4>{errorMassage}</h4>
            </div>
        ) 
        : <h1>Вы уже авторизованы</h1>


    )
}
