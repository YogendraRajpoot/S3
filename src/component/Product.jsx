import React from "react";

export const Product = () => {
  return (
    <div>
      <form>
        <label>
            TITLE:-
          <input type="text" />
        </label>
        <br />
        <label>
            COST            
          <input type="number" />
        </label>
        <br />
        <label>
            IMAGE:-
          <input type="file" />
        </label>
        <br />
        <label>
            CATEGORY:-
          <select>
              <option>Select</option>
              <option>Vegetables</option>
              <option>Fruits</option>
              <option>Provisions</option>
          </select>
        </label>
        <br />
      </form>
    </div>
  );
};
