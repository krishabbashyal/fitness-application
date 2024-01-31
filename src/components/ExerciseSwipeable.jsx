import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';

const ExerciseSwipeable = (props) => {
  // Initialize state 'items' with 'props.payload' (passed from parent component) or an empty array.
  const [items, setItems] = useState(props.payload || []);
 
  // Initialize a state 'swipeStatus' to keep track of which items are swiped.
  // It's a Map where keys are item names and values are boolean indicating swipe status.
  const [swipeStatus, setSwipeStatus] = useState(new Map());

  // useEffect hook to update the swipe status of items when 'items' changes.
  useEffect(() => {
    // Creating a new Map from existing 'swipeStatus'.
    const newSwipeStatus = new Map(swipeStatus);
    // Loop through each item in 'items'.
    items.forEach(item => {
      // If the item is not already in 'newSwipeStatus', add it with a default swipe status of false.
      if (!newSwipeStatus.has(item)) {
        newSwipeStatus.set(item, false);
      }
    });
    // Update 'swipeStatus' with this new Map.
    setSwipeStatus(newSwipeStatus);
  }, [items]); // The effect depends on 'items' and runs when 'items' changes.

  // Function to handle deletion of an item.
  const handleDelete = (itemToDelete) => {
    // Filter out the item to delete from 'items' and update the state.
    setItems(items.filter(item => item !== itemToDelete));
  };

  // Component to render each item.
  const ListItem = ({ item }) => {
    // Retrieve the swipe status (true/false) for the current item.
    const isSwiped = swipeStatus.get(item);

    // Handlers for swipe actions using 'useSwipeable' hook.
    const swipeHandlers = useSwipeable({
      // When the item is swiped left, update its swipe status to true.
      onSwipedLeft: () => {
        const newStatus = new Map(swipeStatus).set(item, true);
        setSwipeStatus(newStatus);
      },
      // When the item is swiped right, update its swipe status to false.
      onSwipedRight: () => {
        const newStatus = new Map(swipeStatus).set(item, false);
        setSwipeStatus(newStatus);
      },
      trackMouse: true // This allows swipe tracking with mouse on non-touch devices.
    });

    return (
      // List item container with swipe handlers.
      <div {...swipeHandlers} className="relative flex items-center p-3 border-b border-gray-300 overflow-hidden">
        {/* Item text */}
        <div className="flex-1 pr-4">{item}</div>
        
        {/* Delete button. It's position and visibility change based on swipe status. */}
        <button 
          onClick={() => handleDelete(item)} 
          className={`absolute right-0 p-2 bg-red-500 text-white transition-transform duration-300 ${
            isSwiped ? 'translate-x-0' : 'translate-x-full' // If swiped, translate to show, else hide.
          }`}>
          Delete
        </button>
      </div>
    );
  };

  return (
    // Render the list of items using 'ListItem' component.
    <div>
      {items.map((item, index) => (
        <ListItem key={index} item={item} />
      ))}
    </div>
  );
};

export default ExerciseSwipeable;
