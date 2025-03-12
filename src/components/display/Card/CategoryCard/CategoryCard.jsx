// eslint-disable-next-line react/prop-types
const CategoryCard = ({ id, name }) => {
    return (
      <li className="active">
        <button key={id} type="button" className="button-category cursor-pointer px-8 py-8 text-3xl hover:text-[var(--text-hover-color)] bg-transparent text-[var(--text-color)] rounded">
          {name}
        </button>
      </li>
    );
  };
  
  export default CategoryCard;
  