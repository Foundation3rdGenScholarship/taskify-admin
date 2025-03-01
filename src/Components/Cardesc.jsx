import React from "react";

export default function Cardesc({ title, description, color }) {
  return (
    <section className="rounded-lg shadow">
      <div className="px-5 rounded-t-lg py-2.5 bg-secondary font-family">
        {title}
      </div>
      <div className="p-5 bg-transparent p- font-family">{description}</div>
    </section>
  );
}
