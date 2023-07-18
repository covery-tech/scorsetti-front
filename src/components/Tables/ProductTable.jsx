import React from "react";

const ProductTable = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          {Object.keys(data).map((key) => (
            <th key={key}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {Object.values(data).map((value, index) => (
            <td key={index}>{value}</td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default ProductTable;
