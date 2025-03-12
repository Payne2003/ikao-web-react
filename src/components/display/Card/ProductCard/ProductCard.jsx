import clsx from 'clsx'
import Column from '../../../common/Column/Column'
import Row from '../../../common/Row/Row'

// eslint-disable-next-line react/prop-types
const ProductCard = ({ image, description, rating, price }) => {
  return (
    <Column
      justify="center"
      align="none"
      className="cart-item ml-1 cursor-pointer group flex lg:w-[18%] sm:w-[48.2%] md:w-[31.99999%] rounded-2xl bg-white shadow-md hover:shadow-lg select-none"
    >
      <div className=" div-hover h-[48%]  group-hover:h-[60%] transition-all">
        {/* Hình ảnh sản phẩm */}
        <img
          src={image}
          alt={description}
          className="mt-10 w-full h-80 rounded-2xl overflow-hidden object-cover"
        />

        {/* Tiêu đề sản phẩm */}
        <h3 className="description-product text-xl mx-5 lg:w-full sm:w-[70%] h-[26%] md:w-[90%] sm:line-clamp-2 md:line-clamp-2 lg:line-clamp-2 font-bold">
          {description}
        </h3>

        {/* Xếp hạng sao */}
        <Row justify='start' className="mt-1 ml-5">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={clsx('text-yellow-400 text-3xl ', { 'opacity-50': i >= rating })}
            >
              ★
            </span>
          ))}
        </Row>
        <p className="w-auto pb-4 pl-5 text-3xl font-bold mt-1 text-left">
          {price.toLocaleString('vi-VN')}đ
        </p>

        {/* Phần mở rộng chứa button */}
        <div className="w-auto h-0 overflow-hidden transition-all duration-300 group-hover:h-[38px] bg-white rounded-b-2xl shadow-md">
          <button className=" cursor-pointer flex  items-center justify-between w-full h-full text-left pl-5 text-xl font-bold text-white bg-[var(--primary-color)] rounded-b-2xl">
            Giao hàng lấy ngay
            <img
              className="w-10 text-white mr-4"
              decoding="async"
              src="https://gotrangtri.vn/wp-content/plugins/dln-product/assets/images/free-shipping.png"
            />
          </button>
        </div>
      </div>
    </Column>
  )
}
export default ProductCard
