import React from 'react';
import '../styles/stats.css';
import icon from "../images/nft2.jpeg";
import icon2 from "../images/nft1.jpeg";
import icon3 from "../images/nft3.jpeg";
import icon4 from "../images/nft4.jpeg";
import icon5 from "../images/nft5.jpeg";

const Stats = () => {
  // Define an array of objects representing the data for each item
  const nftData = [
    { 
      id: 1,
      icon: icon,
      name: "Redacted Remalio Babies",
      volume: "37 ETH",
      change: "+1,908%",
      floorPrice: "2.00 ETH",
      sales: 20
    },
    {
      id: 2,
      icon: icon2,
      name: "Redacted Remalio Babies",
      volume: "21 ETH",
      change: "+1,218%",
      floorPrice: "1.00 ETH",
      sales: 20
    },
    {
      id: 3,
      icon: icon3,
      name: "Redacted Remalio Babies",
      volume: "7 ETH",
      change: "+1,108%",
      floorPrice: "1.00 ETH",
      sales: 20
    },
    {
      id: 4,
      icon: icon4,
      name: "Redacted Remalio Babies",
      volume: "11 ETH",
      change: "+1,508%",
      floorPrice: "3.00 ETH",
      sales: 20
    },
    {
      id: 5,
      icon: icon2,
      name: "Redacted Remalio Babies",
      volume: "37 ETH",
      change: "+1,908%",
      floorPrice: "2.00 ETH",
      sales: 20
    },
    {
      id: 6,
      icon: icon3,
      name: "Redacted Remalio Babies",
      volume: "37 ETH",
      change: "+1,908%",
      floorPrice: "2.00 ETH",
      sales: 20
    },
    {
      id: 7,
      icon: icon4,
      name: "Redacted Remalio Babies",
      volume: "37 ETH",
      change: "+1,908%",
      floorPrice: "2.00 ETH",
      sales: 20
    },
    {
      id: 8,
      icon: icon5,
      name: "Redacted Remalio Babies",
      volume: "37 ETH",
      change: "+1,908%",
      floorPrice: "2.00 ETH",
      sales: 20
    }
  ];

  return (
    <>
      <div className="wrapper">
        <div className="collection">
          <h1>Collection Stats</h1>
        </div>

        <div className="navbar">
          <div className="navbar-item">Trending</div>
          <div className="navbar-item">Top</div>
          <div className="navbar-item">Watchlist</div>
        </div>
        <hr />
        <div className="nfts">
          <div className="dataname">
            <span className="hash">#</span>
            <span className="colec">Collection</span>
            <span className="vol">Volume</span>
            <span className="change">Change</span>
            <span className="floor">Floor Price</span>
            <span className="sales">Sales</span>
          </div>

          {/* Map over the array of data and generate JSX for each item */}
          {nftData.map(item => (
            <div className="data1" key={item.id}>
              <span className="hash">{item.id}</span>
              <div className="icon">
                <img className="image" src={item.icon} alt="" style={{ width: "5rem", height: "5rem" }} />
                <span className="colec">{item.name}</span>
              </div>
              <span className="vol">{item.volume}</span>
              <span className="change">{item.change}</span>
              <span className="floor">{item.floorPrice}</span>
              <span className="sales">{item.sales}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Stats;
