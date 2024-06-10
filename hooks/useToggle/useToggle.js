'use client'

import { useState } from "react"


export function useToggle(){
    const [toggle, setToggle] = useState(false)
    
    function switchToggle(){
        setToggle(!toggle)
        console.log(toggle);
    }

    return[toggle, switchToggle]
}