// import React, { useEffect, useState } from 'react';
// import '../styles/Home.css';

// const Home = () => {
//   const [nftList, setNftList] = useState([]);

//   useEffect(() => {
//     // Fetch NFT data
//     getNftList();
//   }, []);

//   const getNftList = async () => {
//     try {
//       // Simulating fetching data from an API
//       const response = await fetch('http://localhost:5000/nfts');
//       if (!response.ok) {
//         throw new Error('Failed to fetch NFTs');
//       }
//       const result = await response.json();
//       // Check if the result is an array before setting state
//       if (Array.isArray(result)) {
//         setNftList(result);
//       } else {
//         console.error('Invalid data format:', result);
//       }
//     } catch (error) {
//       console.error('Error fetching NFTs:', error);
//     }
//   };

//   return (
//     <div className="image-grid-container">
//       <div className="image-grid">
//         {nftList.map((nftItem) => (
//           <div className="image-item" key={nftItem.id}>
//             <img src={nftItem.image} alt={`NFT ${nftItem.id}`} />
//             <div className="details">
//               <h4><b>{`NFT ${nftItem.id}`}</b></h4>
//               <p style={{ color: "blue" }}>Price: {nftItem.price}</p>
//               {/* Additional details can be displayed here */}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;


import React from 'react';
import '../styles/Home.css';
import nft1  from '../components/images/nft1.jpeg';
import nft2 from '../components/images/nft2.jpeg';
import nft3 from '../components/images/nft3.jpeg';
import nft4 from '../components/images/nft4.jpeg';
import nft5 from '../components/images/nft5.jpeg';
import nft6 from '../components/images/nft6.png';

const Home = () => {
  const nftList = [
    {
      id: 1,
      image: nft1,
      price: '0.86ETH'
    },
    {
      id: 2,
      image: nft2,
      price: '1.25ETH'
    },
    {
      id: 3,
      image: nft3,
      price: '1.86ETH'
    },
    {
      id: 4,
      image: nft4,
      price: '2.0025ETH'
    },
    {
      id: 5,
      image: nft6,
      price: '1.86ETH'
    },
    {
      id: 6,
      image: nft6,
      price: '0.25ETH'
    },
    {
      id: 1,
      image: nft6,
      price: '0.86ETH'
    },
    {
      id: 2,
      image: nft5,
      price: '1.25ETH'
    },
    {
      id: 3,
      image: nft3,
      price: '1.86ETH'
    },
    {
      id: 4,
      image: nft2,
      price: '2.0025ETH'
    },
    {
      id: 5,
      image: nft4,
      price: '1.86ETH'
    },
    {
      id: 6,
      image: nft5,
      price: '0.25ETH'
    },
    {
      id: 1,
      image: nft1,
      price: '0.86ETH'
    },
    {
      id: 2,
      image: nft2,
      price: '1.25ETH'
    },
    {
      id: 3,
      image: nft3,
      price: '1.86ETH'
    },
    {
      id: 4,
      image: nft4,
      price: '2.0025ETH'
    },
    {
      id: 5,
      image: nft6,
      price: '1.86ETH'
    },
    {
      id: 6,
      image: nft6,
      price: '0.25ETH'
    },


    // Add more objects as needed
  ];

  return (
    <div className="image-grid-container">
      <div className="image-grid">
        {nftList.map((nftItem) => (
          <div className="image-item" key={nftItem.id}>
            <img src={nftItem.image} alt={`NFT ${nftItem.id}`} />
            <div className="details">
              <h4><b>{`NFT ${nftItem.id}`}</b></h4>
              <p style={{ color: "blue" }}>Price: {nftItem.price}</p>
              {/* Additional details can be displayed here */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
