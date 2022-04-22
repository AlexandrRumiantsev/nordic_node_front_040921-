import { useState } from "react";
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

import {Auth} from "./Components/Auth"
import {Reg} from "./Components/Reg"

export function Login() {

    const [currentPage, setCurrentPage] = useState("Auth");

    const itemUser = useSelector((state: any) => state.User.item);
    const errorMassage = useSelector((state: any) => state.User.error);

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
        :  <Navigate to="/" />


    )
}
