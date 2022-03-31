import ModalSearch from "../../Modal/ModalSearch";
import React, { useState } from "react";
import s from "./Search.module.scss";



function Search() {
  const [open, setOpen] = useState(false);
 
  return (

    <div className={s.container}>
      {/* <form role="search" method="get" className={s.searchForm} action="">
        <label >
        
          <input type="search" className={s.searchField}   onClick={() => setOpen(true)} title="Search for:"  />
        </label>
        <input type="submit" className={s.searchSubmit} value="Search" />

      </form> */}
      <ModalSearch open={open} handleClose={() => setOpen(false)} />
    </div>


  );
}

export default Search;