import React from "react";
import teacher from "../assets/Chaya.webp";
import ly from "../assets/ly.png";
import huy1 from "../assets/huy1.png";
import pich1 from "../assets/pich1.png";
import lyzhia1 from "../assets/lyzhia1.png";
import pengseang from "../assets/pengseang.png";
import teachers from "../assets/teachers.png";
import narak from "../assets/narak.png";
import roith from "../assets/roith.png";
import { useGetMemberQuery } from "../features/workspaceApi";

const DB_member = [
  {
    id: 1,
    img: teachers,
    name: "Chan Chhaya",
    email: "Chaya@gmail.com",
  },

  {
    id: 2,
    img: lyzhia1,
    name: "Eung Lyzhia",
    email: "Lyzhia@gmail.com",
  },
  {
    id: 3,
    img: huy1,
    name: "Tang Meng Huy",
    email: "MengHuy@gmail.com",
  },
  {
    id: 4,
    img: narak,
    name: "Leng Narak",
    email: "Narak@gmail.com",
  },
  {
    id: 5,
    img: pich1,
    name: "Sam SokunSreyPich",
    email: "SreyPich@gmail.com",
  },
  {
    id: 6,
    img: roith,
    name: "Srun OudomSambath",
    email: "Chaya@gmail.com",
  },
  {
    id: 7,
    img: pengseang,
    name: "Sim PengSeang",
    email: "PengSeang@gmail.com",
  },
  {
    id: 8,
    img: ly,
    name: "Sim Seangly",
    email: "Seangly@gmail.com",
  },
];

// Log data once it's available

function Cardmember({ item }) {
  const { data, isLoading, isError, error } = useGetMemberQuery();
  console.log("dataGetMember :>> ", data);

  if (isLoading) {
    console.log("Loading data...");
  }

  if (isError) {
    console.log("Error fetching data:", error);
  }

  return (
    <div className={"w-full my-8"}>
      <div className={"flex justify-between"}>
        <div className={"flex space-x-2 align-middle items-center"}>
          <div className="">
            <img
              className="w-12 h-12 border-2 rounded-full border-primary"
              src={item.img}
              alt=""
            />
          </div>
          <div>
            <h1 className={"font-bold text-txt18 dark:text-white"}>
              {item.name}
            </h1>
            <p className={"text-txt14 dark:text-gray-300"}>{item.email}</p>
          </div>
        </div>
        <div className={"flex space-x-2 h-10"}>
          <button
            className={
              "w-auto rounded-lg px-4 h-30 bg-gray-50 hover:text-background hover:bg-primary"
            }
          >
            Member of Workspace
          </button>
          <button
            className={
              "w-auto rounded-lg px-4 h-30 bg-gray-50 hover:text-background hover:bg-primary"
            }
          >
            Remove
          </button>
        </div>
      </div>
      <hr className={"border-dashed border-amber-400 my-2"} />
    </div>
  );
}
export default function Listmember() {
  return (
    <section className={"w-auto h-auto"}>
      {DB_member.map((item) => (
        <Cardmember key={item.id} item={item}></Cardmember>
      ))}
    </section>
  );
}
