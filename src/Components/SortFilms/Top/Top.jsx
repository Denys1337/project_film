import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTopFilm } from '../../../AppServices/Services';
import s from './Top.module.scss'
import TopItem from './TopItem';

const Top = () => {
  const [tops, setTops] = useState('');
  useEffect(() => {
    async function fetchData() {
      const res = await fetchTopFilm(1);
      setTops(res)
    }
    fetchData()
  }, [])


  return <div className={s.top}>
    <div className={s.title}>
      <h2>TOP 250</h2>
      <Link to='/toplist'>see more</Link>
    </div>
    {tops
      ?
      tops.map((top, i) => <TopItem top={top} key={i} />).slice(0, 6)
      :
      <h1>Not Found</h1>
    }
  </div>;
};

export default Top;
