import React from "react";
import teacher from "../assets/Chaya.webp"
import ly from "../assets/ly.png";
import huy1 from "../assets/huy1.png";
import pich1 from "../assets/pich1.png";
import lyzhia1 from "../assets/lyzhia1.png";
import pengseang from "../assets/pengseang.png";
import teachers from "../assets/teachers.png";
import narak from "../assets/narak.png";
import roith from "../assets/roith.png"

const DB_member = [
    {
        id:1,
        img:teachers,
        name:"Chan Chhaya",
        email:"Chaya@gmail.com"
    },

    {
        id:2,
        img: lyzhia1,
        name:"Eung Lyzhia",
        email:"Lyzhia@gmail.com"
        },
        {
        id:3,
        img: huy1,
        name:"Tang Meng Huy",
        email:"MengHuy@gmail.com"
        },
        {
            id:4,
        img: narak,
        name:"Leng Narak",
        email:"Narak@gmail.com"},
        {
            id:5,
        img: pich1,
        name:"Sam SokunSreyPich",
        email:"SreyPich@gmail.com"
        },
        {
            id:6,
        img : roith,
        name:"Srun OudomSambath",
        email:"Chaya@gmail.com"
        },
         {
            id:7,
        img :pengseang,
        name:"Sim PengSeang",
        email:"PengSeang@gmail.com"
        },
         {
            id:8,
        img : ly,
        name:"Sim Seangly",
        email:"Seangly@gmail.com"
        },
   
]





 function Cardmember({item}) {
    return (
        <div className="w-full my-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        {/* User Info */}
        <div className="flex items-center gap-3">
          <img
            className="w-12 h-12 border-2 rounded-full border-primary"
            src={item.img}
            alt=""
          />
          <div>
            <h1 className="font-bold text-lg sm:text-txt18 dark:text-white">
              {item.name}
            </h1>
            <p className="text-sm sm:text-txt14 dark:text-gray-300">
              {item.email}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2">
          <button className="w-full sm:w-auto rounded-lg px-4 py-2 bg-gray-50 hover:text-white hover:bg-primary transition">
            Member of Workspace
          </button>
          <button className="w-full sm:w-auto rounded-lg px-4 py-2 bg-gray-50 hover:text-white hover:bg-primary transition">
            Remove
          </button>
        </div>
      </div>

      <hr className="border-dashed border-amber-400 my-2" />
    </div>
    )
}
export default function Listmember () {
     return (
         <section className={"w-auto h-auto px-4 md:px-8"}>
             {DB_member.map((item) => (
                 <Cardmember key={item.id} item={item}></Cardmember>
             ))}
         </section>
     )
}