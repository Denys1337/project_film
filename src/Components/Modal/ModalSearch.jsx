import React from 'react';
import { Modal, Box, Typography } from '@mui/material';
import s from './Modal.module.scss'
import { useState } from 'react';
import useGetFilmByQuery from "../../APPServices/useGetFilmByQuery";
import { useNavigate } from 'react-router-dom';


function ModalSearch({ open, handleClose }) {
  const [value, setValue] = useState('');
  const posts = useGetFilmByQuery(value);
  const BASE_URL = "https://image.tmdb.org/t/p/w500/";
  const router = useNavigate();

 
  console.log(posts);
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box>
        
        <div className={s.modalContent}>
          <input type="search" placeholder='Search...' onChange={(e) => setValue(e.target.value)} />
          <ul>
            {posts.map((post, id) => {
              return (
                  <li  key={id} onClick={()=> {
                    router(`/filmitem/${post.id}`)
                    return handleClose()}} >
                    <img src={BASE_URL + post.poster_path}  />
                    <div>
                    <h3>{post.original_title} </h3>
                    <p>{post.release_date}</p>
                    </div>
                  </li>
                )
            }).slice(0, 4)}
          </ul>
        </div>


      </Box>
    </Modal>
  )
}

export default ModalSearch;
