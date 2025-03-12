import './input.css'
import { CiSearch } from "react-icons/ci";
const CustomInput = () => {
    return (
        <div className="  mx-auto md:flex-1 hidden md:block w-full  mw-full lg:order-none">
          <div className=" relative hidden md:block ">
            <div className="quick-search">
              <form className=" shadow-md m-0 flex  pl-5 py-3 rounded-full items-center  relative border-2 border-gray-200 focus:border-pink-200 text-xl ">
                <select
                  className="pl-4 border-0 focus:ring-transparent collection-options mr-4"
                >
                  <option>Danh mục sản phẩm</option>
    
                  <option>Sản phẩm bán chạy</option>
                </select>
    
                <div className="w-full relative flex items-center" >
                  <input
                    type="text"
                    className="text-xl px-4 h-10 border-0 border-l outline-none bg-transparent focus:ring-transparent p-0 w-full text-foreground border-l-gray-300"
                    required=""
                    placeholder="Tìm theo tên sản phẩm..."
                  />
                  <input type="hidden" name="type" value="product" />
                  <button
                    type="submit"
                    className="search-button px-10 rounded-l-0 text-xl right-0 flex  absolute justify-center text-foreground rounded-tr-full rounded-br-full pr-10 items-center"
                  >
                    <CiSearch size={20} className='text-white' />
                  </button>
                </div>
              </form>
              <div className="search-dropdown absolute bottom-0 top-full mt-1 left-0 bg-background rounded-lg py-3 text-foreground w-full px-2">
                <div className="search-loading absolute top-1/2 left-1/2   -translate-x-1/2 -translate-y-1/2 w-full h-full z-[1] bg-background flex items-center justify-center">
                  <span className="loading-icon gap-1 hidden items-center justify-center">
                    <span className="w-1.5 h-1.5 bg-[currentColor] rounded-full animate-pulse"></span>
    
                    <span className="w-1.5 h-1.5 bg-[currentColor] rounded-full animate-pulse"></span>
    
                    <span className="w-1.5 h-1.5 bg-[currentColor] rounded-full animate-pulse"></span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
}

export default CustomInput