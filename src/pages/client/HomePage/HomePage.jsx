import { Suspense, lazy } from 'react'
import CustomBanner from '../../../components/common/Banner/CustomBanner'
const ProductGrid = lazy(() => import('../../../components/common/Grid/ProductGrid/ProductGrid'))
const TrendsGrid = lazy(() => import('../../../components/common/Grid/TrendsGrid/TrendsGrid'))

const HomePage = () => {
  return (
    <section className="grid sm:grid-rows-[auto_auto_auto] md:grid-rows-[auto_auto_auto] lg:grid-rows-[auto_auto_auto] bg-gray-100">
      <CustomBanner />
      <Suspense fallback={<div>Loading products...</div>}>
        <ProductGrid />
      </Suspense>
      <Suspense fallback={<div>Loading trends...</div>}>
        <TrendsGrid />
      </Suspense>
    </section>
  )
}

export default HomePage
