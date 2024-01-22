import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import 'tailwindcss/tailwind.css';

const ExerciseSwipeable = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

  const handleDelete = (itemToDelete) => {
    setItems(items.filter(item => item !== itemToDelete));
  };

  const ListItem = ({ item }) => {
    const swipeHandlers = useSwipeable({
      onSwipedLeft: () => console.log('Swiped left!'),
      preventDefaultTouchmoveEvent: true,
      trackMouse: true
    });

    return (
      <div {...swipeHandlers} className="flex items-center justify-between p-2 border-b border-gray-300">
        <div className="flex-1 pr-4">{item}</div>
        <button onClick={() => handleDelete(item)} className="hidden p-2 bg-red-500 text-white">
          Delete
        </button>
      </div>
    );
  };

  return (
    <div>
      {items.map((item, index) => (
        <ListItem key={index} item={item} />
      ))}
    </div>
  );
};

export default ExerciseSwipeable;
