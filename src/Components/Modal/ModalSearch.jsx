import React from 'react';
import {Modal,Box,Typography} from '@mui/material';
import s from './Modal.module.scss'
import { useState } from 'react';
import useGetFilms from "../../APPServices/useGetFilms";

function ModalSearch({ open, handleClose}) {
  const [value, setValue] = useState('')
  console.log(value);
  const posts = useGetFilms();
  const filterFilm = posts.filter(post=>{
    
    return post.original_title.toLowerCase().includes(value.toLowerCase())
  })
 console.log(filterFilm);
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box>
        <Typography id="modal-modal-title" variant="h6" component="h2">
         
        </Typography>
        <div className={s.modalContent}>
        <input type="search" onChange={(e) => setValue(e.target.value)}/>
        <div>
        {filterFilm.map((post,id)=>{
          return <p key={id}>{post.original_title} </p>
        })}
        </div>
        </div>
       
        
      </Box>
    </Modal>
  )
}

export default ModalSearch;
