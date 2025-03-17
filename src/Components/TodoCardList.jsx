import { ChevronLeft, ChevronRight, ClipboardList, Clock } from "lucide-react"
import { useState } from "react"
import {NavLink} from "react-router";
import { format } from "date-fns";
import { useGetCategoriesQuery } from "../features/categoriesApi";
import { useEffect } from "react";


function TodoCard({ item }) {
    const [isHovered, setIsHovered] = useState(false)
    // const id = item.id;
    // console.log('item.id', item.id)

     const [categoryTitle, setCategoryTitle] = useState("");
      
      const { data: categoriesdata, error, isLoading } = useGetCategoriesQuery({ limit: 20, offset: 0 });
    
      useEffect(() => {
        if (categoriesdata) {
          const foundCategory = categoriesdata.find((cat) => cat.id === item.category_id);
          setCategoryTitle(foundCategory ? foundCategory.title : "Unknown");
        }
      }, [categoriesdata, item.category_id]);

    const formatDate = (isoString) => {
        const date = new Date(isoString);
        return isNaN(date) ? "Invalid Date" : format(date, "MMM do, yyyy");
    };

    return (
        <div
            className="rounded-xl bg-white dark:bg-gray-700  p-4 border-2 dark:border-none dark:text-white w-72 space-y-4"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}

        >
            <div
              
            className="flex items-center justify-between text-txt20 font-bold text-gray-600 dark:text-white">
                <div>{item.title}</div>
                <div
                 
                className={"md:hidden"}>
                    <NavLink to={`/tododetail/${item.id}`}>
                        {isHovered ? (
                            <ChevronRight strokeWidth={1} className="mr-8" />
                        ) : (
                            <ChevronLeft strokeWidth={1} className="mr-8" />
                        )}
                    </NavLink>
                </div>
                <div className={"md:block hidden"}>
                    {isHovered ? (
                        <ChevronRight strokeWidth={1} className="mr-8" />
                    ) : (
                        <ChevronLeft strokeWidth={1} className="mr-8" />
                    )}
                </div>
            </div>
            <div className="text-gray-500 dark:text-white line-clamp-2 w-56">{item.note}</div>
            <div className="text-gray-500  dark:text-white my-4">Created at: <span>{formatDate(item.created_at)}</span></div>
            <div className="flex items-center text-gray-500  dark:text-white">
                <ClipboardList strokeWidth={1} className="mr-4" />
                {item.task} / {item.total}
            </div>
            {item.category_id && (
            <div className="flex items-center text-sm text-gray-600 mt-2 dark:text-white">
              <span className="pr-2">Category:</span>
              <span className="border-2 py-1 px-2 rounded-lg border-secondary text-secondary">
                {categoryTitle}
              </span>
            </div>
          )}
            <div className="flex items-center bg-red-200 rounded-md text-accent justify-center  p-1 text-txt12  ">
                <Clock strokeWidth={1} className="mr-1" />
                {formatDate(item.created_at)}
            </div>
        </div>
    )
}

export const TodoCardList = ({ tasks })=> {
    return (
        <section className=" md:my-16 lg:my-0 px-2 py-0 mx-5  lg:mx-0 w-75  space-y-custom-dashed-line h-[570px] 2xl:h-auto xl overflow-y-scroll overflow-hidden">
            {tasks.map((item) => (
                <TodoCard key={item.id} item={item}  />
            ))}
        </section>
    )
}

