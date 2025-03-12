
// eslint-disable-next-line react/prop-types
const CustomButton = ({ text, type = "button" }) => {
    return (
      <button
        type={type}
        className='p-4 text-xl md:w-40'
      >
        {text}
      </button>
    );
  };

export default CustomButton