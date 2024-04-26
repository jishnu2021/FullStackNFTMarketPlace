import React from "react";
import icon1 from "../components/images/img1.jpg"
import icon2 from "../components/images/img2.jpg"
import icon3 from "../components/images/img3.jpg"
import icon4 from "../components/images/img4.jpg"
import icon5 from "../components/images/nft1.jpeg"

import "../styles/drop.css"

const Drop = () => {
  return (
    <>
      <div className="drop-page">
  <div className="drops-head">
    <div className="drop-content">
      <div className="image-container" style={{ position: 'relative' }}>
        {/* Image */}
        <img
          className="drop-cont-icn"
          src={icon1}
          alt=""
          style={{ width: "150%", height: "30rem", margin: '2rem', position: 'relative' }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.02)'; // Zoom in effect on hover
            e.target.style.transition = 'transform 0.3s ease'; // Smooth transition
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)'; // Reset to normal size on hover out
          }}
        />
        {/* Text Overlays */}
        <div className="text-overlay" style={{ position: 'absolute', top: '60%', left: '30%', transform: 'translate(-50%, -50%)', color: '#fff',justifyContent:'space-between'}}>
          <div>
            <img className="drop-icon" src={icon2} alt="" style={{ width: "5rem", height: "5rem" }} />
            <span className="drop-cont-txt1">Characters</span>
            <span className="drop-cont-txt2">Something about Character</span>
            <span className="drop-cont-txt3">Current price</span>
            <div className="btn-div">
              <button className="drop-btn">Minting Now</button>
              <button className="drop-btn">Drops</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


      <div className="drops">
        <div className="drop">
          <div className="drop-img">
            <img className="drop-image" src={icon1} alt="" style={{ width: "18rem", height: "13rem" }} />
          </div>
          <div className="drop-txt">
            <div className="txt-upper">Characters</div>
            <div className="txt-mid">
              <span className="mint">Mining</span>
              <span className="price">Price</span>
            </div>
            <div className="txt-low">
              <span className="mint">Now</span>
              <span className="price">3.303 ETH</span>
            </div>
          </div>
        </div>
        <div className="drop">
          <div className="drop-img">
            <img className="drop-image" src={icon2} alt="" style={{ width: "18rem", height: "13rem" }} />
          </div>
          <div className="drop-txt">
            <div className="txt-upper">Characters</div>
            <div className="txt-mid">
              <span className="mint">Mining</span>
              <span className="price">Price</span>
            </div>
            <div className="txt-low">
              <span className="mint">Now</span>
              <span className="price">3.303 ETH</span>
            </div>
          </div>
        </div>
        <div className="drop">
          <div className="drop-img">
            <img className="drop-image" src={icon3} alt="" style={{ width: "18rem", height: "13rem" }} />
          </div>
          <div className="drop-txt">
            <div className="txt-upper">Characters</div>
            <div className="txt-mid">
              <span className="mint">Mining</span>
              <span className="price">Price</span>
            </div>
            <div className="txt-low">
              <span className="mint">Now</span>
              <span className="price">3.303 ETH</span>
            </div>
          </div>
        </div>
        <div className="drop">
          <div className="drop-img">
            <img className="drop-image" src={icon4} alt="" style={{ width: "18rem", height: "13rem" }} />
          </div>
          <div className="drop-txt">
            <div className="txt-upper">Characters</div>
            <div className="txt-mid">
              <span className="mint">Mining</span>
              <span className="price">Price</span>
            </div>
            <div className="txt-low">
              <span className="mint">Now</span>
              <span className="price">3.303 ETH</span>
            </div>
          </div>
        </div>
        <div className="drop">
          <div className="drop-img">
            <img className="drop-image" src={icon5} alt="" style={{ width: "18rem", height: "13rem" }} />
          </div>
          <div className="drop-txt">
            <div className="txt-upper">Characters</div>
            <div className="txt-mid">
              <span className="mint">Mining</span>
              <span className="price">Price</span>
            </div>
            <div className="txt-low">
              <span className="mint">Now</span>
              <span className="price">3.303 ETH</span>
            </div>
          </div>
        </div>
        <div className="drop">
          <div className="drop-img">
            <img className="drop-image" src={icon1} alt="" style={{ width: "18rem", height: "13rem" }} />
          </div>
          <div className="drop-txt">
            <div className="txt-upper">Characters</div>
            <div className="txt-mid">
              <span className="mint">Mining</span>
              <span className="price">Price</span>
            </div>
            <div className="txt-low">
              <span className="mint">Now</span>
              <span className="price">3.303 ETH</span>
            </div>
          </div>
        </div>
        <div className="drop">
          <div className="drop-img">
            <img className="drop-image" src={icon2} alt="" style={{ width: "18rem", height: "13rem" }} />
          </div>
          <div className="drop-txt">
            <div className="txt-upper">Characters</div>
            <div className="txt-mid">
              <span className="mint">Mining</span>
              <span className="price">Price</span>
            </div>
            <div className="txt-low">
              <span className="mint">Now</span>
              <span className="price">3.303 ETH</span>
            </div>
          </div>
        </div>
        <div className="drop">
          <div className="drop-img">
            <img className="drop-image" src={icon3} alt="" style={{ width: "18rem", height: "13rem" }} />
          </div>
          <div className="drop-txt">
            <div className="txt-upper">Characters</div>
            <div className="txt-mid">
              <span className="mint">Mining</span>
              <span className="price">Price</span>
            </div>
            <div className="txt-low">
              <span className="mint">Now</span>
              <span className="price">3.303 ETH</span>
            </div>
          </div>
        </div>
        <div className="drop">
          <div className="drop-img">
            <img className="drop-image" src={icon4} alt="" style={{ width: "18rem", height: "13rem" }} />
          </div>
          <div className="drop-txt">
            <div className="txt-upper">Characters</div>
            <div className="txt-mid">
              <span className="mint">Mining</span>
              <span className="price">Price</span>
            </div>
            <div className="txt-low">
              <span className="mint">Now</span>
              <span className="price">3.303 ETH</span>
            </div>
          </div>
        </div>
        <div className="drop">
          <div className="drop-img">
            <img className="drop-image" src={icon5} alt="" style={{ width: "18rem", height: "13rem" }} />
          </div>
          <div className="drop-txt">
            <div className="txt-upper">Characters</div>
            <div className="txt-mid">
              <span className="mint">Mining</span>
              <span className="price">Price</span>
            </div>
            <div className="txt-low">
              <span className="mint">Now</span>
              <span className="price">3.303 ETH</span>
            </div>
          </div>
        </div>
        <div className="drop">
          <div className="drop-img">
            <img className="drop-image" src={icon1} alt="" style={{ width: "18rem", height: "13rem" }} />
          </div>
          <div className="drop-txt">
            <div className="txt-upper">Characters</div>
            <div className="txt-mid">
              <span className="mint">Mining</span>
              <span className="price">Price</span>
            </div>
            <div className="txt-low">
              <span className="mint">Now</span>
              <span className="price">3.303 ETH</span>
            </div>
          </div>
        </div>
        <div className="drop">
          <div className="drop-img">
            <img className="drop-image" src={icon2} alt="" style={{ width: "18rem", height: "13rem" }} />
          </div>
          <div className="drop-txt">
            <div className="txt-upper">Characters</div>
            <div className="txt-mid">
              <span className="mint">Mining</span>
              <span className="price">Price</span>
            </div>
            <div className="txt-low">
              <span className="mint">Now</span>
              <span className="price">3.303 ETH</span>
            </div>
          </div>
        </div>
        <div className="drop">
          <div className="drop-img">
            <img className="drop-image" src={icon3} alt="" style={{ width: "18rem", height: "13rem" }} />
          </div>
          <div className="drop-txt">
            <div className="txt-upper">Characters</div>
            <div className="txt-mid">
              <span className="mint">Mining</span>
              <span className="price">Price</span>
            </div>
            <div className="txt-low">
              <span className="mint">Now</span>
              <span className="price">3.303 ETH</span>
            </div>
          </div>
        </div>
        <div className="drop">
          <div className="drop-img">
            <img className="drop-image" src={icon4} alt="" style={{ width: "18rem", height: "13rem" }} />
          </div>
          <div className="drop-txt">
            <div className="txt-upper">Characters</div>
            <div className="txt-mid">
              <span className="mint">Mining</span>
              <span className="price">Price</span>
            </div>
            <div className="txt-low">
              <span className="mint">Now</span>
              <span className="price">3.303 ETH</span>
            </div>
          </div>
        </div>
        <div className="drop">
          <div className="drop-img">
            <img className="drop-image" src={icon5} alt="" style={{ width: "18rem", height: "13rem" }} />
          </div>
          <div className="drop-txt">
            <div className="txt-upper">Characters</div>
            <div className="txt-mid">
              <span className="mint">Mining</span>
              <span className="price">Price</span>
            </div>
            <div className="txt-low">
              <span className="mint">Now</span>
              <span className="price">3.303 ETH</span>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Drop;
