
const SelectBox=(props)=>{


    return(
      <select>
          {props.options.map((option)=>(
              <option
                value={option.value}
                defaultValue="all"
              >
                  {option.name}
              </option>
          ))}
      </select>
    );
};

export default SelectBox;