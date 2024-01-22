import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

const ExerciseSwipeable = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
  const [swipedItem, setSwipedItem] = useState(null); // Track which item is swiped

  const handleDelete = (itemToDelete) => {
    setItems(items.filter(item => item !== itemToDelete));
    setSwipedItem(null); // Reset swiped item state after deletion
  };

  const ListItem = ({ item }) => {
    const swipeHandlers = useSwipeable({
      onSwipedLeft: () => setSwipedItem(item), // Set the swiped item
      trackMouse: true
    });

    const isSwiped = item === swipedItem;

    return (
      <div {...swipeHandlers} className="relative flex items-center p-2 border-b border-gray-300">
        <div className={`flex-1 pr-4 ${isSwiped ? 'translate-x-[-50%]' : ''} transition-transform`}>
          {item}
        </div>
        <button 
          onClick={() => handleDelete(item)} 
          className={`absolute right-0 p-2 bg-red-500 text-white ${isSwiped ? 'block' : 'hidden'}`}>
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
