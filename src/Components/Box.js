import React, { useContext } from 'react';
import { AContext } from '../Context/AppContext';
import '../Style/Box.css';
import facebook from '../images/icon-facebook.svg';
import twitter from '../images/icon-twitter.svg';
import youtube from '../images/icon-youtube.svg';
import instagram from '../images/icon-instagram.svg';
import { CSSTransition } from 'react-transition-group';

const item = {
  Facebook: {
    color: '#4267B2',
    image: facebook,
  },
  Twitter: {
    color: '#1DA1F2',
    image: twitter,
  },
  YouTube: {
    color: '#FF0000',
    image: youtube,
  },
  Instagram: {
    color: 'linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)',
    image: instagram,
  },
};

export default function Box(props) {
  const ctx = useContext(AContext)
  return (
    <CSSTransition in={true} appear={true} timeout={1000} classNames='alert' >
    <div className='box col-md-3 col-sm-12 mr-auto pb-5 ml-auto' style={props.style}>
      <div className='box1'>
        <div className='box-titre' style={{ background: item[props.items.type].color }}></div>
        <div className={`box-body ${ctx.ClassName}`} >
          <div className='box-user'>
            <img src={item[props.items.type].image} alt='...'/>
            <p style={{ color: ctx.ClassName === 'Dark' ? 'aliceblue' : '#233142' }}>{props.items.user}</p>
          </div>
          <div className='box-followers'>
            <p className='follower-nbr' style={{ color: ctx.ClassName === 'Dark' ? 'aliceblue' : '#233142' }}>{props.items.followers}</p>
            <p style={{ color: ctx.ClassName === 'Dark' ? 'aliceblue' : '#233142' }}>followers</p>
          </div>
          <div className='today'>
            <img
              src={props.items.state === 'Down' ? require('../images/icon-down.svg') : require('../images/icon-up.svg')}
              alt='...'
            />
            <p style={{ color: props.items.state === 'Down' ? 'red' : 'green' }}>{props.items.followerToday} Today</p>
          </div>
        </div>
      </div>
    </div>
   </CSSTransition>
  );
}