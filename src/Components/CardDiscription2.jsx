import React from 'react'

export default function CardDiscription2
({title, description,color,colorline}) {
  return (
    <section className={`rounded-lg shadow bg-white/10 backdrop-opacity-5 backdrop-invert backdrop-blur-3xl p-5 border-l-10 dark:text-white`}>
      <div className=" p-2.5 rounded-t-lg font-family text-txt20 font-medium">{title}</div>
      <hr className={`bg- mb-3 h-1 rounded-full m-2.5 ${colorline} border-0`}/>
      <div className="bg-transparent p-2.5 font-family leading-7">{description}</div>
     
    </section>
  )
}
