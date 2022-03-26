import React from "react";

const ProductTable = () => {
  return (
    <table className="mx-2 mt-[50px] md:mt-[70px] md:w-[670px]">
      <thead className="border-b border-[#D6D6DB] text-[#7A7A7D] text-xs md:text-base font-medium text-left">
        <tr>
          <th className="pb-[14px] pr-3">PRODUCT NAME</th>
          <th className="pb-[14px] pr-3">TYPE</th>
          <th className="pb-[14px] pr-3">SALES</th>
          <th className="pb-[14px] pr-3">PRICE</th>
        </tr>
      </thead>
      <tbody className="text-sm md:text-lg font-medium text-left">
        <tr className="">
          <td className="pt-[17px] pr-3">High Performance Formula</td>
          <td className="pt-[17px]">Ebook</td>
          <td className="pt-[17px] pl-3">3</td>
          <td className="pt-[17px]">NGN 44</td>
        </tr>
        <tr>
          <td className="pt-[18px] pr-3">High Performance Formula</td>
          <td className="pt-[18px]">Ebook</td>
          <td className="pt-[18px] pl-3">3</td>
          <td className="pt-[18px]">NGN 44</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ProductTable;
