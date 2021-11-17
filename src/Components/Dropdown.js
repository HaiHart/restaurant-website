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
    // if (props.foodSwitch === 0 && category === props.currentCategory) {
    //   props.setFoodSwitch(1);
    //   props.onChangeCategory("");
    // }
    // else {
    //   props.setFoodSwitch(0);
    //   props.onChangeCategory(category);
    // }
    if (props.currentCategory === "")
      props.setFoodSwitch(0);
      props.onChangeCategory(category);
  };

  return (

    <div>
      {dropDown ? <div className="flex-inital w-full divide-y divide-teal-400 font-semibold category relative z-10">
        <h4
          style={{
            background: "var(--primary1)",
            color: "#ffffff",
            textTransform: "uppercase",
          }}
        >
          {" "}
          <button
            onMouseEnter={() => setDropDown(true)}
            onMouseLeave={() => setDropDown(false)}>
            <i className="fas fa-align-justify"></i> <span className="md:inline-block hidden">Danh mục</span>
          </button>
        </h4>
        <ul
          onMouseEnter={() => setDropDown(true)}
          onMouseLeave={() => setDropDown(false)}
          className="divide-y font-normal text-xs"
          style={{
            background: "var(--primary4)",
            color: "#ffffff",
            textTransform: "uppercase",
          }}
        >
          {categoriesToRender}
        </ul>
      </div> :
        <button
          onMouseEnter={() => setDropDown(true)}
          onMouseLeave={() => setDropDown(false)}>
          <i className="fas fa-align-justify text-lg"
            style={{
              color: "#333",
              background: ""
            }}>
            <span className="lg:inline-block hidden">Danh mục</span>
          </i>
        </button>
      }
    </div>
  )
}
export default DropDown