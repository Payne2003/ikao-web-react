import { useEffect, useState } from "react"
import CategoryCard from "../../../display/Card/CategoryCard/CategoryCard"
import Grid from "../Grid"
import Row from "../../Row/Row"
import ProductCard from "../../../display/Card/ProductCard/ProductCard"

const ProductGrid = () => {
    const [products, setProducts] = useState([])
    
      useEffect(() => {
        fetch('http://localhost:5000/products')
          .then((res) => res.json())
          .then((data) => setProducts(data))
          .catch((err) => console.error('Error fetching products:', err))
      }, [])
      const [categories, setCategory] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/categories')
      .then((res) => res.json())
      .then((data) => setCategory(data))
      .catch((err) => console.error('Error fetching products:', err))
  }, [])
  return (
    <div className="container h-auto pt-10">
        <h2 className="text-6xl text-center font-bold px-10 py-10">Sản phẩm mới</h2>
        <ul className="flex justify-center">
          {categories.length > 0 ? (
            [{ id: 'all', name: 'Tất cả' }, ...categories.slice(0, 5)].map((category) => (
              <CategoryCard key={category.id} {...category} />
            ))
          ) : (
            <p className="text-center text-gray-500">Không có danh mục nào.</p>
          )}
        </ul>

        <Grid cols={5} rows={2} gap={2} className="w-full h-auto">
          <Row justify="between" className="flex-wrap col-span-5 row-span-2">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </Row>
        </Grid>
      </div>
  )
}

export default ProductGrid