import { motion } from "framer-motion";
import { Clock,CheckSquare } from "lucide-react"; // Import icons for date & checklist
import { FiLink } from "react-icons/fi";
import { useGetCategoriesQuery } from "../features/categoriesApi";
import { useEffect, useState } from "react";
import { format } from 'date-fns';
import { Link } from "react-router";

const DropIndicator = ({ beforeId, column }) => {
  return (
    <div
      data-before={beforeId || "-1"}
      data-column={column}
      className="my-0.5 h-0.5 w-full  opacity-0"
    />
  );
};

const TaskCard = ({ title, id,note,link,created_at,checklist,category_id,due_date, column, handleDragStart }) => {
  const [categoryTitle, setCategoryTitle] = useState("");
  // console.log("id in TaskCard :",id)
  
  const { data: categoriesdata, error, isLoading } = useGetCategoriesQuery({ limit: 20, offset: 0 });

  useEffect(() => {
    if (categoriesdata) {
      const foundCategory = categoriesdata.find((cat) => cat.id === category_id);
      setCategoryTitle(foundCategory ? foundCategory.title : "Unknown");
    }
  }, [categoriesdata, category_id]);

  
const formatDate = (isoString) => {
  return format(new Date(isoString), "MMM do, yyyy");
};

// console.log(formatDate(created_at));
   return (
    <Link to={`/todolistdetail/${id}`}>
      <DropIndicator beforeId={id} column={column} />
      <motion.div
        layout
        layoutId={id}
        draggable="true"
        onDragStart={(e) => handleDragStart(e, { title, id, column })}
        className="p-3 rounded cursor-grab active:cursor-grabbing"
      >
        <div className="px-3 py-6 bg-white rounded-lg shadow-md font-roboto dark:bg-gray-700 hover:shadow-xl">
          <p className="font-bold text-gray-700 text-[18px] dark:text-white">{title}</p>
          <div className="mt-2 text-sm text-gray-500 line-clamp-2 dark:text-white">
            {note}
          </div>
           {/* Task Created Date */}
            <div className="mt-4 text-sm text-gray-600 dark:text-white"> {/* Added spacing */}
               Created at : <span className="text-[13px] text-gray-500 dark:text-gray-100">{formatDate(created_at)}</span>
            </div>

              {checklist && (
                <div className="flex items-center mt-2 text-sm text-blue-500 dark:text-white">
                    {/* Positioned immediately below "Created At" */}
                    <CheckSquare className="mr-2" size={16} /> {/* Icon */}
                    Checklist: {checklist}
                </div>
            )}


          <div className="flex items-center mt-2 mb-2 text-sm text-gray-600">
            
             {/* {category && (
                <div className="flex items-center mt-2 text-sm text-gray-600">
                    <span className="pr-2 dark:text-gray-200">Category:</span>
                    <span
                        className={`border-2 py-1 px-2 rounded-lg ${
                            category === "Design"
                                ? "border-amber-300 text-amber-300"
                                : category === "Coding"
                                    ? "border-blue-300 text-blue-300"
                                    : "border-green-300 text-green-300"
                        }`}
                    >
                        {category}
                    </span>
                </div>
            )} */}
           {category_id && (
            <div className="flex items-center mt-2 text-sm text-gray-600 dark:text-white">
              <span className="pr-2">Category:</span>
              <span className="px-2 py-1 border-2 rounded-lg border-secondary text-secondary">
                {categoryTitle}
              </span>
            </div>
          )}
         
          </div>  
           {due_date && (
                <div className="flex items-center justify-center p-1 mt-4 text-sm text-red-500 bg-red-200 rounded-md w-36">
                    <Clock strokeWidth={1} className="mr-1" width={18} height={18} />
                    {formatDate(due_date)}
                </div>
            )}

             {link && (
                <div className="flex mt-4 space-y-1 "><FiLink className="mr-2 text-gray-600 dark:text-gray-200 "/>
                    {link.map((link, index) => (
                        <a
                            key={index}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-xs text-blue-500 underline hover:text-blue-700"
                        >
                            {link}
                        </a>
                    ))}
                </div>
            )}
        </div>
      </motion.div>
    </Link>
  );
};

export default TaskCard;



