import React, { useContext } from 'react';
import { AContext } from '../Context/AppContext';
import '../Style/DayBox.css';
import { CSSTransition } from 'react-transition-group';

export default function DayBox(props) {
  const ctx = useContext(AContext);
  return (
    <CSSTransition in={true} appear={true} timeout={1000} classNames='alert' >
    <div className='DayBox col-md-3 col-sm-12 mr-auto pb-4 pt-mb-2 ml-auto' style={{transitionDelay: `${1000}ms`}}>
      <div className={`DayBox1 ${ctx.ClassName}`}>
        <div className='Line1'>
          <p style={{ color: ctx.ClassName === 'Dark' ? 'aliceblue' : '#233142' }}>{props.titer}</p>
          <img src={props.icons} alt='...'/>
        </div>
        <div className='Line2'>
          <p style={{ color: ctx.ClassName === 'Dark' ? 'aliceblue' : '#233142' }}>{props.number}</p>
          <div>
            <img
              src={props.state === 'Down' ? require('../images/icon-down.svg') : require('../images/icon-up.svg')}
              alt='...'
            />
            <p style={{ color: props.state === 'Down' ? 'red' : 'green' }}>{props.mod}%</p>
          </div>
        </div>
      </div>
    </div>
     </CSSTransition>
  );
}
