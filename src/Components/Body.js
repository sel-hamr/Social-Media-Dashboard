import React, { useContext } from 'react';
import { AContext } from '../Context/AppContext';
import '../Style/Body.css';
import Box from './Box';
import { date } from '../Date/Date';
import DayBox from './DayBox';
import facebook from '../images/icon-facebook.svg';
import twitter from '../images/icon-twitter.svg';
import youtube from '../images/icon-youtube.svg';
import instagram from '../images/icon-instagram.svg';

export default function Body() {
  const ctx = useContext(AContext);
  return (
    
    <div className='Body'>
      <div className='container'>
        <div className='row'>
          {date.map((items) => (
            <Box key={items.id} items={items}  style={{transitionDelay: `${items.id * 150}ms`}}/>
          ))}
        </div>
        <div className='row'>
          <p className='Overview' style={{ color: ctx.ClassName === 'Dark' ? 'aliceblue' : '#233142' }}>Overview-Today</p>
        </div>
        <div className='row'>
          <DayBox titer='Page Views' icons={facebook} number='87' state='Up' mod='3' />
          <DayBox titer='Likes' icons={facebook} number='52' state='Down' mod='2' />
          <DayBox titer='Likes' icons={instagram} number='5462' state='Up' mod='2257' />
          <DayBox titer='Profile Views' icons={instagram} number='52K' state='Up' mod='1375' />
          <DayBox titer='Retweets' icons={twitter} number='117' state='Up' mod='303' />
          <DayBox titer='Likes' icons={twitter} number={87} state='Up' mod='553' />
          <DayBox titer='Likes' icons={youtube} number='107' state='Down' mod='19' />
          <DayBox titer='Total Views' icons={youtube} number='1407' state='Down' mod='12' />
        </div>
      </div>
    </div>
   
  );
}
