import React from "react";

export default function TableCell({ value }: { value: string | number }) {
  return (
    <div className="px-4 py-4 w-full border-b border-text-custom-gray-50">
      {value}
    </div>
  );
}
