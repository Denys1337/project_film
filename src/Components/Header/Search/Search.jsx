import React, { useState } from "react";
import s from './Search.module.scss';

function Search(){
  const [value,setValue]=useState('')
   console.log(value);
    return (
        
      <div className={s.container}>
<form role="search" method="get" className={s.searchForm} action="">
	<label>

		<input type="search" className={s.searchField} placeholder="Search …"  title="Search for:" onChange={(e)=>setValue(e.target.value)}/>
	</label>
	<input type="submit" className={s.searchSubmit} value="Search" />
</form>
</div>
    
       
    )
}

export default Search