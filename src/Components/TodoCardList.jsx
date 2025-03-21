import { ChevronLeft, ChevronRight, ClipboardList, Clock } from "lucide-react"
import { useState,useEffect } from "react"
import {NavLink} from "react-router";
import { format } from "date-fns";
import { useGetCategoriesQuery } from "../features/categoriesApi";

// const DB = [
//     {
//         id: 1,
//         title: "Project Alpha",
//         description: "A comprehensive design system for web applications",
//         createdDate: "2023-05-15",
//         total: 10,
//         task: 2,
//         category: "Design",
//     },
//     {
//         id: 2,
//         title: "Website Redesign",
//         description: "Complete overhaul of the company website with modern UI/UX principles",
//         createdDate: "2023-06-20",
//         total: 15,
//         task: 8,
//         category: "Development",
//     },
//     {
//         id: 3,
//         title: "Mobile App",
//         description: "Cross-platform mobile application for customer engagement",
//         createdDate: "2023-07-10",
//         total: 20,
//         task: 5,
//         category: "Mobile",
//     },
// ]

function TodoCard({ item }) {
    const [isHovered, setIsHovered] = useState(false)



    const formatDate = (isoString) => {
        const date = new Date(isoString);
        return isNaN(date) ? "Invalid Date" : format(date, "MMM do, yyyy");
    };

      const [categoryTitle, setCategoryTitle] = useState("");
        
        const { data: categoriesdata, error, isLoading } = useGetCategoriesQuery({ limit: 20, offset: 0 });
      
        useEffect(() => {
          if (categoriesdata) {
            const foundCategory = categoriesdata.find((cat) => cat.id === item.category_id);
            setCategoryTitle(foundCategory ? foundCategory.title : "Unknown");
          }
        }, [categoriesdata, item.category_id]);
        

    return (
        <div
            className="rounded-xl bg-white dark:bg-gray-700  p-4 border-2 dark:border-none dark:text-white w-72 space-y-4"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}

        >
            <div className="flex items-center justify-between font-bold text-gray-600 text-txt20 dark:text-white">
                <div>{item.title}</div>
                <div className={"md:hidden"}>
                    <NavLink to="/tododetail">
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
            <div className="w-56 text-gray-500 dark:text-white line-clamp-2">{item.note}</div>
            <div className="my-4 text-gray-500 dark:text-white">Created at: <span>{formatDate(item.created_at)}</span></div>
            <div className="flex items-center text-gray-500 dark:text-white">
                <ClipboardList strokeWidth={1} className="mr-4" />
                {item.task} / {item.total}
            </div>
            {item.category_id && (
            <div className="flex items-center mt-2 text-sm text-gray-600 dark:text-white">
              <span className="pr-2">Category:</span>
              <span className="px-2 py-1 border-2 rounded-lg border-secondary text-secondary">
                {categoryTitle}
              </span>
            </div>
          )}
            <div className="flex items-center justify-center p-1 bg-red-200 rounded-md text-accent text-txt12 ">
                <Clock strokeWidth={1} className="mr-1" />
                {formatDate(item.created_at)}
            </div>
        </div>
    )
}

export const TodoCardList = ({tasks})=> {
    return (
        <section className=" md:my-16 lg:my-0 px-2 py-0 mx-5  lg:mx-0 w-75  space-y-custom-dashed-line h-[570px] 2xl:h-auto xl overflow-y-scroll overflow-hidden">
            {tasks.map((item) => (
                <TodoCard key={item.id} item={item}/>
            ))}
        </section>
    )
}

