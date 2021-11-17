import { useState, useContext } from 'react'
import { ContextList } from '../Context';
const stylebutton = "uppercase w-full h-full py-2 text-left";
const stylecategory = "z-10 relative hover:bg-yellow-500 hover:opacity-80 transform hover:translate-y-1 transition-all duration-500";
function DropDown(props) {
  const categories = useContext(ContextList).categories;
  const [dropDown, setDropDown] = useState(false);
  let categoriesToRender = [];
  if (categories) {
    categoriesToRender = categories.map((category) => {
      return (
        <li className={stylecategory} key={category.id} >
          <button className={stylebutton}
            onClick={() => handleClick(category.name)}
          >
            <i className={category.icon}></i>
            {category.name}
          </button>
        </li>
      )
    }
    )
  }
  const handleClick = (category) => {
    if (props.foodSwitch === 0 && category === props.currentCategory) {
      props.setFoodSwitch(1);
      props.onChangeCategory("");
    }
    else {
      props.setFoodSwitch(0);
      props.onChangeCategory(category);
    }
  };

  return (
    <div>
      {dropDown ? (
        <div className="w-36 mt-8  font-semibold category relative z-10">
          <h4
            style={{
              background: "var(--primary1)",
              color: "#ffffff",
              textTransform: "uppercase",
            }}
          >
            {" "}
          </h4>
          <ul
            onMouseEnter={() => {
              setDropDown(true)
              props.setCurrentPage(1)
            }}
            onMouseLeave={() => setDropDown(false)}
            className="font-normal text-xs"
            style={{
              background: "white",
              color: "#000",
              textTransform: "uppercase",
            }}
          >
            {categoriesToRender}
          </ul>
        </div>
      ) : (
        <button
          onMouseEnter={() => setDropDown(true)}
          onMouseLeave={() => setDropDown(false)}
        >
          <i
            className="fas fa-sort-down text-lg border-2 "
            style={{
              color: "#000",
            }}
          ></i>
        </button>
      )}
    </div>
  );
}
export default DropDown