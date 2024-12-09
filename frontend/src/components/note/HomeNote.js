import React from "react";

export default function HomeNote() {
  return (
    <div className="bg-red-200 p-2 h-32 flex justify-between">
      <div className="flex flex-col justify-between">
        <div className="font-bold font-Silkscreen text-2xl">Título</div>
        <div>Body</div>
        <div>Footer</div>
      </div>
      <div className="w-20">
        Just a test s<i class="bx bxs-edit"></i>
      </div>
    </div>
  );
}
