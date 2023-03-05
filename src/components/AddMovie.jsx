import React, { useState } from 'react'
import Modal from 'react-modal';
import StarRating from './StarRating';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement('#root');
const AddMovie = (handleadd) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
    }
  
    function closeModal() {
      setIsOpen(false);
    }
    const [form,setform]=useState({
name:'',
date:'',
img:'',
rating:1,


    })
    const handlechange=(e)=>
    setform({...form,[e.target.name]:e.target.value})
  return (
    <div><button className='btn-primary'  onClick={openModal}>Add movie</button>
    <div className='modal'>
    <Modal 
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      ><form  onSubmit={(e)=>{
e.preventDefault();
let newMovie={...form, id:Math.random};
handleadd(newMovie);
closeModal();
      }} >
        <label>Movie name</label>
        <input type="text"  value={form.name} name="name" onChange={handlechange}   />
        <label>Realse date</label>
        <input type="date" value={form.date} name="date" onChange={handlechange}  />
        <StarRating/>
        <label>Movie poster</label>
        <input type="URL"  value={form.img} name="img" onChange={handlechange}  />
        <button type='submit' >Add</button>
        <button onClick={closeModal}  >Cancel</button>
      </form>
      </Modal>
      </div>
    </div>
    
  )
}

export default AddMovie