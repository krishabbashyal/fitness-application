import React from 'react'
import CategoryCard from './CategoryCard'

const CategoryCardScroller = () => {
  return (
    <div className="flex space-x-1 overflow-x-scroll pb-3">
      <CategoryCard label="Chest" active={true}/>
      <CategoryCard label="Back" active={false}/>
      <CategoryCard label="Legs" active={false}/>
      <CategoryCard label="Shoulders" active={false}/>
      <CategoryCard label="Arms" active={false}/>
      <CategoryCard label="Abs" active={false}/>

    </div>
  )
}

export default CategoryCardScroller