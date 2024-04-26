import React,{useState, useEffect,useContext} from 'react'
import web3Modal from 'web3modal';
import {ethers} from 'ethers';
import Router from "next/router"

import { NFTMarketplaceAddres } from './Constants';

export const NFTMarketplaceContext = React.createContext();

export const NFTMarketplaceProvider = ({children}) => {
   
  return(
    <NFTMarketplaceContext.Provider value={{titleData}}>
        {children}
    </NFTMarketplaceContext.Provider>
  )  
};