import React from 'react';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';


export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Airtime',
    path: '/airtime',
    cName: 'nav-text'
  },
  {
    title: 'Data',
    path: '/data',
    cName: 'nav-text'
  },
  {
    title: 'Cable TV',
    path: '/cable',
    cName: 'nav-text'
  },
  {
    title: 'Electricity',
    path: '/electricity',
    cName: 'nav-text'
  },
  // {
  //   title: 'Contact Us',
  //   path: 'https://www.poriumpay.com/contact-us/',
  //   cName: 'nav-text',
  // },
  {
    title: 'Logout',
    path: '/welcome',
    cName: 'nav-text'
  }
];