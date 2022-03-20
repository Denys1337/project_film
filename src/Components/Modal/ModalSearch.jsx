import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import s from './Modal.module.scss'
import { useState } from 'react';
import useGetFilmByQuery from "../../AppServices/useGetFilmByQuery";
import { useNavigate } from 'react-router-dom';
import {BASE_URL} from '../../constant/constant'


  
  export default function ModalSearch() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = useState('');
  const posts = useGetFilmByQuery(value);
  
  const router = useNavigate();

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box >
        <div className={s.modalContent}>
          <input type="search" placeholder='Search...' onChange={(e) => setValue(e.target.value)} />
          <ul>
            {posts.map((post, id) => {
              return (
                  <li  key={id} onClick={()=> {
                    router(`/filmitem/${post.id}`)
                     handleClose()}} >
                       {post.poster_path
                       ?
                       <img src={BASE_URL + post.poster_path}  />
                       :
                       <h3>IMAGE</h3>
                       
                      }
                    
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
    </div>
  );
}

