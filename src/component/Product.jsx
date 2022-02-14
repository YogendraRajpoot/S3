import React, { useState } from "react";
const initstate = {
  title: "",
  cost: "",
  file: "",
  category: "",
};

export const Product = () => {
  const fileref =React.useRef()

  const [formData, setformData] = useState(initstate);
  const { title, cost, category } = formData;

  const changes= (event) => {
      const {name,value} = event.target
      setformData( prev => ({ ...prev , [name]: value}))
  } 

  const onSubmit = () => {
    // event.preventdefault();
    console.log(formData);

    // console.log(ref.current.files[0]);
  };
  return (
    //<div ref={ref}>
    <div>
      <form onSubmit={onSubmit}>
        <label>
          TITLE:-
          <input type="text" name="title" value={title} onChange={changes}/>
        </label>
        <br />
        <label>
          COST
          <input type="number" name="cost" value={cost} onChange={changes}/>
        </label>
        <br />
        <label>
            IMAGE:-
          <input type="file" ref={fileref} />
        </label>
        <br />
        <label>
          CATEGORY:-
          <select name="category" value={category} onChange={changes}> 
            <option >Select</option>
            <option value="vegetables">Vegetables</option>
            <option value="fruits">Fruits</option>
            <option value="provisions">Provisions</option>
          </select>
        </label>
        <br/>
        <input type="submit"/>
        <br />
      </form>
    </div>
  );
};
