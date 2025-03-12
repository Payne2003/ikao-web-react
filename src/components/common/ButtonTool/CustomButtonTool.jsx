import CustomButton from '../Button/CustomButton'

// eslint-disable-next-line react/prop-types
const CustomButtonTool = ({ text, icon: Icon,className }) => {
    return (
        <a
            className="button-hover font-semibold ml-4 rounded-md inline-flex gap-1 items-center store-group"
            href=""
        >
            <div className={className}>
                <Icon size={20} className='ml-4' />
                <CustomButton text={text} />
            </div>
        </a>
    )
}

export default CustomButtonTool
