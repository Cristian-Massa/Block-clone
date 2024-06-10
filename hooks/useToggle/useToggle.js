'use client'

import { useState } from "react"


export function useToggle(){
    const [toggle, setToggle] = useState(false)
    
    function switchToggle(){
        setToggle(!toggle)
    }

    return[toggle, switchToggle]
}