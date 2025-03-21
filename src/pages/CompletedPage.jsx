import NavbarForworkShop from "../Components/NavbarForworkShop.jsx";
import React, {useState} from "react";
import CompletedCardList from "../Components/CompletedCardList.jsx";
import CompletedCardDetail from "../Components/CompletedCardDetail.jsx";

export default function CompletedPage() {
    const [progress, setProgress] = useState(false)

   return (

            <div className=" w-auto bg-background p-8 dark:bg-gray-900">
                <NavbarForworkShop title={"Completed List"} link={"/completed"} />
                <div className={"flex justify-center md:justify-normal"}>
                    <div onClick={() => {setProgress(!progress)}}>
                        <CompletedCardList/>
                    </div>

                    <div className={"lg:w-[780px] w-96 lg:mt-0 md:mt-16 overscroll-none hidden md:block md:h-[600px] lg:h-[570px] 2xl:h-auto bg-white  dark:bg-gray-700  overflow-hidden rounded-2xl overflow-y-scroll scroll-smooth "}>
                        {progress &&(<CompletedCardDetail/>)}
                    </div>


                </div>
            </div>
            

    )
}

