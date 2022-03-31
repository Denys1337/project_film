import React from "react";
import TopPage from "./TopPage";
import ReactPaginate from "react-paginate";
import axios from "axios";
import { useState } from "react";
import s from "./TopPage.module.scss";


const TopList = () => {
  const [page,setPage] = useState([]);

  const handlePageClick = async (data) => {
    const currentPage = data.selected + 1;
    const API_KEY = "0c6e06ac468d17f199af4a1b4426b740";
   
    axios.get(`/movie/top_rated?api_key=${API_KEY}&page=${currentPage}`).then((result) => {
      setPage(result.data.results);
        
    });
   
  };
 
  return <div>
   <ol className={s.topList}> {page.map((top, i) => <TopPage key={i} top={top} />)}</ol>
    
    <ReactPaginate
    initialPage ={0}
      breakLabel="..."
      nextLabel=">>"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={12}
      marginPagesDisplayed={3}
      previousLabel="<<"
      className={s.paginate}
      pageClassName = {s.paginate__page}
      nextClassName = {s.paginate__next}
      previousClassName ={s.paginate__next}
      activeClassName ={s.paginate__active}
    />
  </div>;
};

export default TopList;
