import { useEffect, useState } from 'react'
import Grid from '../Grid'
import Row from '../../Row/Row'
import ViewerCategoryCard from '../../../display/ViewerCategoryCard/ViewerCategoryCard'

const TrendsGrid = () => {
  const [categories, setCategory] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/categories')
      .then((res) => res.json())
      .then((data) => setCategory(data))
      .catch((err) => console.error('Error fetching products:', err))
  }, [])

  const [itemsToShow, setItemsToShow] = useState(6)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setItemsToShow(categories.length) // Hiện tất cả nếu trên desktop
      } else {
        setItemsToShow(6) // Mobile chỉ hiện 6
      }
    }

    handleResize() // Gọi ngay khi component mount
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [categories])

  return (
    <div className="container h-auto pt-20">
      <div className="flex justify-center flex-col items-center">
        <button className="mt-10 bg-white text-[var(--text-color)] text-xl px-8 py-4 rounded-full shadow-sm hover:shadow-md hover:text-[var(--text-hover-color)] transition-shadow">
          Khám phá tất cả
        </button>
        <h2 className="text-6xl text-center font-bold px-10 py-10">Xu hướng mua sắm</h2>
      </div>
      <Grid rows={5} cols={3} gap={4} className="w-full h-auto px-4">
        <Row justify="between" className="row-viewer flex-wrap col-span-5 row-span-3 ">
          {categories.slice(0, itemsToShow).map((category, index) => (
            <ViewerCategoryCard
              key={index}
              title={category.name}
              viewCount={category.usersViewed.length}
              onClick={() => console.log(`Clicked ${category.name}`)}
            />
          ))}
        </Row>
      </Grid>
      {/* Pagination dots */}
      <div className="flex justify-center gap-2 p-10">
        <div className="w-8 h-8 rounded-full bg-gray-300" />
        <div className="w-8 h-8 rounded-full bg-blue-600" />
        <div className="w-8 h-8 rounded-full bg-gray-300" />
      </div>
    </div>
  )
}

export default TrendsGrid
