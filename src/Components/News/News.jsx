import React from 'react';
import BornToday from './BornToday/BornToday';
import LastNews from './LastNews/LastNews';
import WallPapers from './WallPapers/WallPapers';
import s from './News.module.scss'

const News = ({posts}) => {
  
  return <div className={s.news}>
      <LastNews posts = {posts}/>
      <BornToday posts = {posts}/>
      {posts.length > 0
                    ?
                    <div className={s.postersTitle} >
                         <h2>Todays wallpapers</h2>
                        {posts.map((post, i) => <WallPapers post={post} key={i} />).slice(0,3)}
                    </div>
                    :
                    <h1>Not Found Posters</h1>
                }
     
  </div>;
};

export default News;
