import  { useEffect, useState } from 'react'
import logo from '../../../assets/image/undefined - Imgur.png'
import './style.css'
import CustomInput from '../Input/CustomInput'
import CustomButton from '../Button/CustomButton'
import { RiShoppingBag4Line } from 'react-icons/ri'
import { IoHomeOutline } from 'react-icons/io5'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdOutlineSell } from 'react-icons/md'
import { FaRegUserCircle } from 'react-icons/fa'
// import NavigationCard from '../../navigation/CardNavigation/NavigationCard'
import CustomButtonTool from '../ButtonTool/CustomButtonTool'
const HeaderComponent = () => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false); // Đánh dấu đã cuộn hay chưa

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop === 0) {
        // Khi quay lại đầu trang, reset trạng thái
        setIsScrollingDown(false);
        setHasScrolled(false);
        return;
      }

      if (!hasScrolled) {
        // Chỉ set khi lần đầu tiên rời khỏi đầu trang
        setIsScrollingDown(true);
        setHasScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled]);


  return (
    <div className="header pt-[var(--navbar-height)] bg-transparent">
      <div className={` container-scroll w-auto ${isScrollingDown ? 'slide-down' : 'visible'}`}>
        <div className={`container header-navbar flex `}>
          <div className="md:flex-nowrap w-full items-center flex justify-between gap-1 md:gap-3 lg:grid lg:gap-2 lg:grid-cols-[3fr_6fr_3fr] flex-wrap ">
            <div className="flex gap-2 items-center transition-all duration-150">
              <div className="xl:hidden menu-opener"></div>
              <a href="/" className="logo-wrapper" title="IGA Nội Thất Thông Minh">
                <img src={logo} alt="logo IGA Nội Thất Thông Minh" width="117" height="45" />
              </a>
            </div>
            <CustomInput />
            <div className="cart-card flex items-center ml-auto gap-0 relative">
              <a className="flex items-center bg-[var(--border-color)] hover:bg-neutral-200 active:scale-95 transition-allpl-1  rounded-xl">
                <RiShoppingBag4Line size={20} className="ml-3" />
                <span className="cart-announcement">0</span>
                <CustomButton text={'Giỏ Hàng'} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom hidden xl:flex items-center sub-header">
        <div className="container relative">
          <div className="grid grid-cols-[3fr_9fr] gap-2">
            <div className="navigation-header gap-6 flex relative w-full py-3.5">
              <div className="flex items-center text-white cursor-pointer hover:text-[var(--color-sub-header-link)] ">
                <div className="inline-flex  gap-3 items-center  flex-row ">
                  {/* dùng map hoặc forEach để đư ra dữ liệu */}
                  <IoHomeOutline size={20} />
                  <span className="font-semibold text-xl">Danh mục sản phẩm</span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white cursor-pointer hover:text-[var(--color-sub-header-link)] ">
                <div className="inline-flex items-center  flex-row gap-1 ">
                  {/* dùng map hoặc forEach để đư ra dữ liệu */}
                  <span className="font-semibold text-xl">Blog</span>
                </div>
              </div>
            </div>
            <div className="navigation--horizontal flex justify-between items-center">
              <div className="navigation-list overflow-hidden ">
                <nav>{/* <NavigationCard /> */}</nav>
              </div>
              <div className="flex gap-8 whitespace-nowrap ">
                <CustomButtonTool
                  className={
                    'text-black bg-[var(--white-color)] text-xl rounded-sm flex items-center justify-center'
                  }
                  text={'Tài khoản'}
                  icon={FaRegUserCircle}
                />
                <CustomButtonTool
                  className={'text-xl rounded-sm flex items-center justify-center'}
                  text={'Deal sốc'}
                  icon={MdOutlineSell}
                />
                <CustomButtonTool
                  className={
                    'text-black bg-[var(--white-color)] text-xl rounded-sm flex items-center justify-center'
                  }
                  text={'0395.757.650'}
                  icon={FaPhoneAlt}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderComponent
