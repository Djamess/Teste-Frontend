import React from "react";

/**
 * Renderiza um componente select
 * Recebe um array de objetos e retorna uma tags options.
 *
 */

const SelectComponent = ({ name, id, options, className, onClick }) => {
  return (
    <div className={className}>
      <select onChange={(e) => onClick(options.find(item => item.value === e.target.value).text)} className="form-select form-select-md" name={name} id={id}>
        {options.map(({ value, text, titulo }, index) => (
          <option onClick={() => onClick({ value, text, titulo })} key={index} value={value}> {titulo} </option>
        ))}
      </select>
    </div>
  );
};

export default SelectComponent;
