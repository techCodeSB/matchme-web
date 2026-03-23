import { Children, cloneElement } from "react";

const SbRadioGroup = ({ children, value, onChange, name }) => {
  return (
    <div className="w-full flex items-center gap-4 flex-wrap">
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
      className={`min-w-15 p-3 rounded cursor-pointer flex items-center gap-4 shadow transition text-[13px]
        ${isChecked ? "bg-blue-100 border border-blue-500 text-black" : "bg-white text-gray-800"}
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