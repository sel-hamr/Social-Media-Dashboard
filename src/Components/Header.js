import React, { useContext } from 'react';
import '../Style/Header.css';
import { AContext } from '../Context/AppContext';

export default function Header() {
  const ctx = useContext(AContext);
  return (
    <div className={`header col-12 pt-4 ${ctx.ClassName}`}>
      <div className='container header-container '>
        <div className='row col-12 no-padding'>
          <div className={`header-titre  ${ctx.ClassName} col-md-10 col-sm-12`}>
            <p>Social Media Dashboard</p>
            <p>Total Followers 23,004</p>
          </div>
          <hr className='d-block d-sm-none line' />
          <div className='switch col-md-2 col-12'>
            <div className={`switch-titre ${ctx.ClassName}`}>
              <p>{`${ctx.ClassName} Mode`}</p>
            </div>
            <div
              className='switch-body'
              onClick={() => ctx.setName(ctx.ClassName === 'Dark' ? 'Light' : 'Dark')}
              style={{
                background: ctx.ClassName === 'Dark' ? 'linear-gradient(to right, #108dc7, #ef8e38)' : '#eeeeee',
              }}>
              <div className={`switch__circle ${ctx.ClassName === 'Dark' ? 'switch__left' : 'switch__right'}`}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
