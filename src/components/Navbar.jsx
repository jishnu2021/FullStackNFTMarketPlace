import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../styles/navbar.css';
import icon from '../images/pic.jpg'

const Navbar = () => {
  
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('user');
    navigate('/signup');
    document.title = "Sign Up";
  };

  const namechange=()=>{
    document.title='NFTSearch'
  }
  const titlestat=()=>{
    document.title='Stat'
  }
  const titlecreate=()=>{
    document.title='Create'
  }
  const loginchange=()=>{
    document.title="Login"
  }
  const titledrop = ()=>{
    document.title="Drop"
  }
  const Helpcentre = ()=>{
    document.title="Help Center"
  }
  const accountsetting = ()=>{
    document.title="Account Setting"
    navigate('/accountsetting')
  }


  return (
    <nav className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <h1 style={{ color: 'white' }} onClick={namechange}>NFTSearch</h1>
        </Link>
      </div>
      <div className="search-box">
        <input type="text" placeholder="Search products..."  />
        <i className="fa fa-search"></i>
      </div>

      <div className="spacer"></div>
      <div className="right">
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkBtn">
          <i className="fa fa-bars" />
        </label>
        <ul className="list">
        <li>
            <Link to="/drop" onClick={titledrop}>Drops</Link>
          </li>
          <li>
            <Link to="/stats" onClick={titlestat}>Stats</Link>
          </li>
          <li>
            <Link to="/create" onClick={titlecreate}>Create</Link>
          </li>
          <li>
            <Link to="https://synthia.xanmoy.me/chat" onClick={Helpcentre}>Help</Link>
          </li>


          {auth ? (
            <li>
              <Link onClick={logout} to="/signup">
                <button>Logout</button>
              </Link>
              <img src={icon} alt="Avatar" class="avatar" onClick={accountsetting}></img>
            </li>
            
          ) : (
            <>
              <li>
                <Link to="/signup">
                  <button>Signup</button>
                </Link>
              </li>
              <li>
                <Link to="/login" onClick={loginchange}>
                  <button>Login</button>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
