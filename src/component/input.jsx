import { useState } from 'react'
import './input.css'
export function Input({value, setValue}) {

    return (
        <div className='inputt'>
            <input className='input' placeholder='name'  value={value} onChange={e=>setValue(e.target.value)}/>
        </div>
    )
}