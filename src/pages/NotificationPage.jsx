import React from 'react'
import roith from "../assets/roith.png"
import teacher from "../assets/Chaya.webp"
import { Notification } from '../Components/Notification'
import ly from "../assets/ly.png";
import huy1 from "../assets/huy1.png";
import pich1 from "../assets/pich1.png";
import lyzhia1 from "../assets/lyzhia1.png";
import pengseang from "../assets/pengseang.png";
import teachers from "../assets/teachers.png";
import narak from "../assets/narak.png";
export const NotificationPage = () => {
    const notification =[
        {
          profile:teachers,
          name: "Chan Chhaya",
          description: "Almost there! Let me know if you have any last-minute thoughts.",
        },
        {
        profile : lyzhia1,
        name:"Eung Lyzhia",
        description: "Changed the task label to 'Urgent' – needs immediate attention before the deadline",
        },
        {
        profile : huy1,
        name:"Tang Meng Huy",
        description: "Updated the task deadline to tomorrow – let's make sure everything is ready before the meeting!",
        },
        {
        profile : narak,
        name:"Leng Narak",
        description: "Updated the task status – now we wait, like watching paint dry… but with more stress!",
        },
        {
        profile : pich1,
        name:"Sam SokunSreyPich",
        description: "Reassigned the task to someone else for further updates – make sure it’s done!",
        },
        {
        profile : roith,
        name:"Srun OudomSambath",
        description: ".Moved the task to 'In Progress' – let's pretend we're working hard, shall we?",
        },
         {
        profile :pengseang,
        name:"Sim PengSeang",
        description: " Changed the task status to 'In Progress' – making good progress, let’s keep the momentum going!",
        },
         {
        profile : ly,
        name:"Sim Seangly",
        description: "Commented: 'This task is like a plot twist – unexpected, but we’re almost there!",
        },
    ]
  return (
    <>
     <div className="w-full p-4 sm:p-6 md:p-8 bg-background dark:bg-gray-900">
  {/* Notification Header */}
  <section className="bg-primary rounded-[30px] md:rounded-[50px] lg:rounded-[100px] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 px-4 py-3 md:px-6 md:py-4">
    <h1 className="text-white text-[14px] sm:text-[16px] md:text-[14px] font-roboto">
      Turn on push notifications to know when you get notifications from TASKIFY and interact with.
    </h1>
    <div className="flex space-x-2 md:space-x-4">
      <button className="flex items-center text-[14px] px-3 py-2 border border-secondary text-white transition-all duration-500 bg-primary rounded-2xl md:rounded-3xl hover:bg-blue-600">
        Allow push notification
      </button>
      <button className="flex items-center text-[14px] px-3 py-2 text-white transition-all duration-500 bg-primary rounded-2xl md:rounded-3xl hover:bg-blue-600">
        Dismiss
      </button>
    </div>
  </section>

  {/* Notification List */}
  <div className="mt-4 space-y-3">
    {notification.map((notification, index) => (
      <Notification
        key={index}
        profile={notification.profile}
        name={notification.name}
        description={notification.description}
      />
    ))}
  </div>
</div>

    
    </>
  )
}
