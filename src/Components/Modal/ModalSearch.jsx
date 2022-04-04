import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import s from "./Modal.module.scss";
import { useState } from "react";
import useGetFilmByQuery from "../../APPServices/useGetFilmByQuery";
import { useNavigate } from "react-router-dom";
import {BASE_URL} from "../../constant/constant";
import wing from "../../images/wing.png";


  
  export default function ModalSearch() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = useState("");
  const posts = useGetFilmByQuery(value);
  
  const router = useNavigate();

  return (
    <div>
      <button onClick={handleOpen} className={s.Openbutton}><img src={wing} alt="Search film"/></button>
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
                    router(`/filmitem/${post.id}`);
                     handleClose();}} >
                       {post.poster_path
                       ?
                       <img src={BASE_URL + post.poster_path} alt={"myProj"}/>
                       :
                       <h3>IMAGE</h3>
                       
                      }
                    
                    <div>
                    <h3>{post.original_title} </h3>
                    <p>{post.release_date}</p>
                    </div>
                  </li>
                );
            }).slice(0, 4)}
          </ul>
        </div>
        </Box>
      </Modal>
    </div>
  );
}

