import React, { useState } from 'react';
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

const AddMovie = ({ handleadd }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const [form, setForm] = useState({
    name: '',
    date: '',
    img: '',
    rating: 0,
  });

  const handlechange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
    const handlerating =(rate) =>setForm({...form,rating:rate});

  const handleSubmit = (e) => {
    e.preventDefault();
    let newMovie = { ...form, id: Math.random() };
    handleadd(newMovie);
    closeModal();
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const afterOpenModal = () => {};

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button className='btn-primary' onClick={openModal}>
        Add movie
      </button>
      {/* <button className='btn-primary' onClick={closeModal}>
        Delete
      </button> */}
      <div className='modal'>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
          <form onSubmit={handleSubmit}>
            <label>Movie name</label>
            <input type='text' value={form.name} name='name' onChange={handlechange} />
            <label>Release date</label>
            <input type='date' value={form.date} name='date' onChange={handlechange} />
            <StarRating  rating={form.rating} handlerating={handlerating} />
            <label>Movie poster</label>
            <input type='URL' value={form.img} name='img' onChange={handlechange} />
            <button type='submit'>Add</button>
            <button onClick={closeModal}>Cancel</button>
            
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default AddMovie;
