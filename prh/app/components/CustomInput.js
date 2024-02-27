import React from 'react'

const CustomInput = ({ label, placeholder, type, options }) => {
    return (
        <div className='input-custom'>
            <label>{label}</label>


            {
                type === "text" ? <input placeholder={placeholder} className='bg-gray-100 px-8 py-4' />
                 : <select name="pets" id="pet-select" className='bg-gray-100 px-8 py-4'>
                 {
                    options.map((element) => <option>{element}</option>)
                 }
               </select>
            }

        </div>
    )
}

export default CustomInput