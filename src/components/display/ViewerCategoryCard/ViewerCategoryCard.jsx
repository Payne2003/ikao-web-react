import Column from "../../common/Column/Column"
// eslint-disable-next-line react/prop-types
const ViewerCategoryCard = ({ title, viewCount = 0, onClick }) => {
    return (
      <div
        className="bg-[var(--white-color)] category-viewer rounded-lg shadow-sm py-3 lg:w-[19.2%]  md:w-[32.333334%] cursor-pointer hover:shadow-md transition-shadow"
        onClick={onClick}
      >
        <Column className="w-auto flex ml-4" align="start" justify="center" gap={4}>
          <h3 className="text-[var(--back-color)] w-50 text-2xl ">{title}</h3>
          <p className="text-xl text-[var(--text-color)]">{viewCount.toLocaleString()} lượt xem</p>
        </Column>
      </div>
    )
  }
  
  export default ViewerCategoryCard