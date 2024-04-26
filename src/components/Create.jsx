import React, { useState } from 'react';
import '../styles/create.css';
import nft3Image from '../images/nft3.jpeg';
import { useNavigate } from 'react-router-dom';


const Create = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [error, setError] = useState(false);

 
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!image || !name || !price) {
      setError(true);
      return;
    }

    const formData = new FormData();
    formData.append('user_image', image);
    formData.append('name', name);
    formData.append('price', price);

    const userId = JSON.parse(localStorage.getItem('user'))._id;
    formData.append('ownerID', userId);

    fetch('http://localhost:5000/createnft', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to create NFT');
        }
        return response.json();
      })
      .then((result) => {
        console.log(result);
        alert('NFT Created Successfully!');
        navigate('/home');
      })
      .catch((error) => {
        console.error('Error creating NFT:', error);
        alert('Failed to create NFT. Please try again.');
      });

    setImage(null);
    setName('');
    setPrice('');
    setError(false);

  };

  // Function to connect with MetaMask
  const connectMetaMask = () => {
    if (window.ethereum) {
      window.ethereum.request({ method: 'eth_requestAccounts' })
        .then((accounts) => {
          console.log('Connected to MetaMask:', accounts[0]);
          // You can perform additional actions after connection here
        })
        .catch((error) => {
          console.error('Failed to connect to MetaMask:', error);
          alert('Failed to connect to MetaMask. Please make sure MetaMask is installed and unlocked.');
        });
    } else {
      console.error('MetaMask not detected.');
      alert('MetaMask not detected. Please make sure MetaMask is installed.');
    }
  };

  return (
    <>
      <img src={nft3Image} alt="" />
      <div className="con">
        <h1 style={{ padding: 0 }}>Create NFT</h1>
        <br />
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="image">Image File:</label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={(e) => setImage(e.target.files[0])}
              required
            />
            {error && !image && <span style={{ color: 'red' }}>Please select an image file</span>}
            <br />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
            {error && !name && <span style={{ color: 'red' }}>Enter valid Name</span>}
          </div>
          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input type="text" id="price" name="price" value={price} onChange={(e) => setPrice(e.target.value)} required />
            {error && !price && <span style={{ color: 'red' }}>Enter valid Price </span>}
          </div>
          <button type="submit">
            Create NFT
          </button>
          <button style={{ marginTop: 10,backgroundColor:'orange'}} type="button" onClick={connectMetaMask}>
            Connect with MetaMask
          </button>
        </form>
      </div>
    </>
  );
};

export default Create;
