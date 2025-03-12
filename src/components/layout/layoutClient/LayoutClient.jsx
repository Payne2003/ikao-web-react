import HeaderComponent from '../../common/Header/HeaderComponent'
// eslint-disable-next-line react/prop-types
const LayoutClient = ({ children }) => {
  return (
    <div>
      <HeaderComponent />
      {children}
    </div>
  )
}

export default LayoutClient
