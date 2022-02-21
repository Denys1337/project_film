import React from 'react';
import { Link } from 'react-router-dom';
import useGetTopFilm from '../../../APPServices/useGetTopFilm';
import s from './Top.module.scss'
import TopItem from './TopItem';

const Top = () => {
     const tops = useGetTopFilm(1)
   

  return <div className={s.top}>
      <div className={s.title}>
        <h2>TOP 250</h2>
        <Link to='/toplist'>see more</Link>
      </div>
      
      {tops.map((top,i)=> <TopItem top={top} key={i}/>).slice(0,6)}
  </div>;
};

export default Top;
