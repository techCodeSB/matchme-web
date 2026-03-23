import React, { Children, cloneElement } from "react";

const SbRadioGroup = ({ children, value, onChange, name }) => {
  return (
    <div className="w-full flex items-center gap-4">
      {Children.map(children, (child) =>
        cloneElement(child, {
          selectedValue: value,
          onChange,
          name,
        })
      )}
    </div>
  
  );
};

const SbRadio = ({ title, value, selectedValue, onChange, name }) => {
  const isChecked = selectedValue === value;

  return (
    <div
      onClick={() => onChange(value)}
      className={`w-full p-4 rounded cursor-pointer flex items-center justify-between shadow transition 
        ${isChecked ? "bg-blue-100 border border-blue-500" : "bg-white"}
      `}
    >
      <p className="text-xs">{title}</p>
      <input
        type="radio"
        name={name}
        value={value}
        checked={isChecked}
        onChange={() => onChange(value)}
      />
    </div>
  );
};

export { SbRadioGroup, SbRadio };