import React from "react";

export default function CardDesc1({ title, description, color, linecolor }) {
  return (
    <section className={`rounded-lg shadow bg-${color} p-5`}>
      <div className=" p-2.5 rounded-t-lg font-family text-txt20 font-medium">
        {title}
      </div>
      <div className="bg-transparent p-2.5 font-family leading-7">
        {description}
      </div>
      <hr className={`bg- mb-3 h-1 rounded-full m-2.5 border-0 ${linecolor}`} />
    </section>
  );
}
