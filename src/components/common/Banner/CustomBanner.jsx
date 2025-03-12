import Grid from '../Grid/Grid'
import Row from '../Row/Row'
import Column from '../Column/Column'

import Imgbanner from '../../../assets/image/banner.png'
import ImgGiuongngu from '../../../assets/image/avar-giuong-ngu-co-hoc-keo-300x122.png'
import ImgBantrangdiem from '../../../assets/image/ban-trang-diem-co-den-300x150.png'
import ImgYoutube from '../../../assets/image/youtube-removebg-preview.png'
const CustomBanner = () => {
  return (
    <div className="max-h-[499px] flex">
      <div className="container h-auto">
        <Grid
          cols={3}
          rows={3}
          gap={4}
          className="grid-chinh h-auto xs:grid-cols-1 xs:auto-rows-auto @maxxs
             sm:grid-cols-2 sm:auto-rows-auto
             md:grid-cols-3 md:auto-rows-auto"
        >
          {/* Left Section */}
          <Grid
            cols={3}
            rows={3}
            gap={4}
            className="grid-con col-span-2 row-span-2 mt-4 h-auto md:col-span-2 md:row-span-3
             sm:col-span-2 sm:row-span-3
             xs:col-span-1 xs:row-span-auto"
          >
            <div className="p-auto col-span-3 row-span-2 flex items-center justify-center">
              <img className="rounded-2xl min-h-[316px] h-full object-cover" src={Imgbanner} alt="" />
            </div>
            <Row className="rounded-2xl col-span-3 h-38 bg-white row-span-1 flex text-center">
              <button className="cursor-poiter ml-4 h-20 flex items-center border-l-0 border-t-0 border-b-0 bg-transparent flex-1 border-1 border-r-[var(--text-color)]">
                <div className="text-2xl text-[var(--black-color)] font-bold items-center  h-auto">
                  <p className="p-auto">Giảm 30% Cho Bàn Trà - Khi Mua Kèm Sofa</p>
                </div>
              </button>
              <button className="cursor-poiter h-20 flex items-center border-l-0 border-t-0 border-b-0 bg-transparent flex-1 border-1 border-r-[var(--text-color)]">
                <div className="text-2xl text-[var(--text-color)] items-center  h-auto">
                  <p className="pr-4">Giảm Tới 20% Khi Mua 2 Chiếc Tủ Để Đồ Cho Bé</p>
                </div>
              </button>
              <button className="cursor-poiter h-20 flex items-center bg-transparent flex-1 mr-4">
                <div className="text-2xl text-[var(--text-color)] items-center  h-auto">
                  <p className="p-auto">Giảm 13% bàn trà Giảm thêm 30% cho thảm</p>
                </div>
              </button>
            </Row>
          </Grid>

          {/* Middle Section */}
          <Column className=" scroll-mx-10 mt-4 col-span-1 row-span-2 h-auto hidden md:flex">
            <div className="w-full rounded-2xl bg-white flex-[1] flex items-center justify-center">
              <button className="text-left md:py-2 cursor-pointer pl-4 h-full font-bold text-2xl w-full text-[var(--primary-color)]">
                Chia sẻ hôm nay
              </button>
            </div>
            <div className="w-full rounded-2xl bg-white flex-[2] flex flex-col">
              <button className="item-img h-[50%] md:w-[100%] flex p-4 text-left ">
                <img className="w-60" src={ImgBantrangdiem} alt="" />
                <span className="px-2 text-2xl md:text-lg lg:text-xl text-[var(--black-color)]">
                  Bàn Trang điểm có đèn - xu hướng cho phòng ngủ hiện đại
                </span>
              </button>
              <button className="item-img h-[50%] md:w-[100%] flex p-4 text-left ">
                <img className="w-60" src={ImgGiuongngu} alt="" />
                <span className="px-2 text-2xl md:text-lg lg:text-xl text-[var(--black-color)]">
                  Bàn Trang điểm có đèn - xu hướng cho phòng ngủ hiện đại
                </span>
              </button>
            </div>
            <div className="w-full rounded-2xl bg-white flex-[1] flex items-center justify-center">
              <button className="cursor-pointer md:py-2 px-auto h-full w-full text-2xl font-bold text-[var(--primary-color)]">
                Xem thêm
              </button>
            </div>
          </Column>

          {/* Right Section */}
          <Row className="rounded-2xl bg-white h-auto col-span-1 w-full hidden md:flex">
            <a className="flex cursor-pointer" href="">
              <div className="flex-[1.5] flex items-center justify-center">
                <span className="md:text-xl lg:text-3xl ml-6 text-center text-[var(--black-color)] font-bold">
                  Hình ảnh hoạt động offline
                </span>
              </div>
              <div className="flex-[1] flex items-center justify-center">
                <img src={ImgYoutube} alt="" className="bg-white icon-youtube w-40" />
              </div>
            </a>
          </Row>
        </Grid>
      </div>
    </div>
  )
}

export default CustomBanner
