import React from 'react';
import { GetPersonBirthday } from '../../../Helpers/GetPersonBirthday';
import s from './BornToday.module.scss'

const BornToday = () => {
    const DATA = new Date().toLocaleDateString().split('/').slice(0,2).join('');

    GetPersonBirthday()
   

  return <div className={s.centerInfo}>
            <div className={s.bornSection}>
                <div className={s.titleBorn}>
                    <h2>Born Today</h2>
                    <a href='#'>See all birthdays</a>
                </div>
                <div className={s.topFilms}>
                   
                   
                   <p>{DATA}</p>
                </div>
             </div>
         </div>
};

export default BornToday;
