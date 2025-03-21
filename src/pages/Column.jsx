import { useState } from "react";
import TaskCard from "./TaskCard";
import { useParams } from "react-router-dom";

// DropIndicator component
const DropIndicator = ({ beforeId, column }) => {
  return (
    <div
      data-before={beforeId || "-1"}
      data-column={column}
      className="my-0.5 h-0.5 w-full bg-primary opacity-0"
    />
  );
};

const Column = ({ title, headingColor, cards = [], column, setCards, workspace_id }) => {
  const { id } = useParams();
  const [active, setActive] = useState(false);

  console.log("Cards in Column:", cards);
  console.log("Workspace ID:", workspace_id);

  // Filters tasks for the current workspace
  const filteredCards = cards.filter((c) => c.workspace_id === workspace_id);
  console.log("Filtered Cards:", filteredCards);

  // Handles when dragging starts
  const handleDragStart = (e, card) => {
    e.dataTransfer.setData("cardId", card.id);
    e.dataTransfer.effectAllowed = "move"; // Allows moving
    console.log("Dragging Card:", card);
  };

  // Handles when dropping
  const handleDrop = (e) => {
    e.preventDefault();

    const cardId = e.dataTransfer.getData("cardId");
    if (!cardId) return;

    setActive(false);
    clearHighlights();

    const indicators = getIndicators();
    const { element } = getNearestIndicator(e, indicators);

    const before = element.dataset.before || "-1";
    let copy = [...cards];

    let cardToMove = copy.find((c) => c.id === cardId);
    if (!cardToMove) return;

    cardToMove = { ...cardToMove, column }; // Update the column

    copy = copy.filter((c) => c.id !== cardId); // Remove from old position

    if (before === "-1") {
      copy.push(cardToMove); // Move to end
    } else {
      const insertAtIndex = copy.findIndex((el) => el.id === before);
      if (insertAtIndex !== -1) {
        copy.splice(insertAtIndex, 0, cardToMove);
      }
    }

    console.log("Updated Cards Order:", copy);
    setCards(copy);
  };

  // Handles when dragging over a column
  const handleDragOver = (e) => {
    e.preventDefault();
    highlightIndicator(e);
    setActive(true);
  };

  // Handles when dragging leaves a column
  const handleDragLeave = () => {
    clearHighlights();
    setActive(false);
  };

  // Removes highlight from drop indicators
  const clearHighlights = () => {
    getIndicators().forEach((i) => (i.style.opacity = "0"));
  };

  // Highlights the nearest drop indicator
  const highlightIndicator = (e) => {
    const indicators = getIndicators();
    clearHighlights();
    const { element } = getNearestIndicator(e, indicators);
    element.style.opacity = "1";
  };

  // Finds the nearest drop indicator
  const getNearestIndicator = (e, indicators) => {
    const DISTANCE_OFFSET = 50;

    return indicators.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = e.clientY - (box.top + DISTANCE_OFFSET);

        return offset < 0 && offset > closest.offset
          ? { offset, element: child }
          : closest;
      },
      {
        offset: Number.NEGATIVE_INFINITY,
        element: indicators[indicators.length - 1],
      }
    );
  };

  // Retrieves all drop indicators for this column
  const getIndicators = () => {
    return Array.from(document.querySelectorAll(`[data-column="${column}"]`));
  };

  return (
    <div className="flex flex-col w-full p-4 bg-white rounded-md min-w-80 dark:bg-gray-800">
      {/* Column Header */}
      <div className="flex items-center justify-between text-lg font-bold dark:text-white">
        <span>{title}</span>
      </div>

      {/* Task List */}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`mt-4 flex flex-col gap-4 h-auto w-full transition-colors ${
          active ? "bg-neutral-800/50" : "bg-neutral-800/0"
        }`}
        style={{ overflowY: "hidden", flexGrow: 1 }}
      >
        {filteredCards.length > 0 ? (
          filteredCards.map((card) => (
            <div key={card.id}>
              <TaskCard {...card} handleDragStart={handleDragStart} />
            </div>
          ))
        ) : (
          <div className="flex items-center justify-center h-24 text-sm italic text-gray-500 dark:text-white">
            No tasks available
          </div>
        )}

        {/* Drop Indicator */}
        <DropIndicator beforeId={null} column={column} />
      </div>
    </div>
  );
};

export default Column;
