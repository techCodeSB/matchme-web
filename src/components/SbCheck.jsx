import React, { Children, cloneElement } from 'react'
import { FiCheck } from "react-icons/fi";

const SbCheckGroup = ({ children, value = [], onChange }) => {
    return (
        <div className='w-full flex items-center gap-3 flex-wrap'>
            {
                Children.map(children, (child, index) => {
                    return cloneElement(child, {
                        key: index,
                        selectedValue: value,
                        onChange
                    })
                })
            }
        </div>
    )
}

const SbCheckItem = ({ title, value, selectedValue = [], onChange }) => {
    const isSelected = selectedValue.includes(value);

    return (
        <div
            onClick={() => onChange(value)}
            className={`px-3 py-2 select-none rounded-full cursor-pointer flex items-center gap-3 shadow transition text-[12px]
            ${isSelected
                    ? "bg-blue-100 border border-blue-500 text-black"
                    : "bg-white text-gray-800"}
        `}
        >
            {title}
            {isSelected && <FiCheck className='inline' />}
        </div>
    )
}

export { SbCheckGroup, SbCheckItem }