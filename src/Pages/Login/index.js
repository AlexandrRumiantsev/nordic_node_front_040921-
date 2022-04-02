import React, { useState } from "react";

import {Auth} from "./Components/Auth"
import {Reg} from "./Components/Reg"

export function Login() {

    const [currentPage, setCurrentPage] = React.useState("Auth");

    return (
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
        </div>
    )
}
