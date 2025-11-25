
import React, { useState, useContext } from 'react';
import { Tooltip, Grow } from '@mui/material';
import { BarChartOutlined, KeyboardArrowDown, KeyboardArrowUp, MoreHoriz } from '@mui/icons-material';
import { watchlist } from '../data/data';
import GeneralContext from './GeneralContext'; // path apne project ke hisaab se adjust karo
import { DoughnoutChart } from './DoughnoutChart';

const labels = watchlist.map((subArray)=>subArray["name"]);
function WatchList() {
const data = {
  labels,
  datasets: [
    {
     label:"Price",
     data:watchlist.map((stock=>stock.price)),
     backgroundColor:[
      "rgba(255, 90, 132, 0.5)",
      "rgba(54,162,235,0.5)",
      "rgba(255 ,206 ,86 ,0.5)",
      "rgba(75,192,192,0.5)",
      "rgba(153,102,255,0.5)",
      "rgba(255,159,64,0.5)",
     ],
     borderColor:[
       "rgba(255, 90, 132, 1)",
      "rgba(54,162,235,1)",
      "rgba(255 ,206 ,86 ,1)",
      "rgba(75,192,192,1)",
      "rgba(153,102,255,1)",
      "rgba(255,159,64,1)",
     ],
     borderWidth:1,
    }
  ]
}
  return (
    <div className='watchlist-container'>
      <div className='search-container'>
        <input
          type='text'
          name='search'
          id='search'
          placeholder='Search eg: infy, bse, nifty fut weekly, gold ecx'
          className='search'
        />
        <span className='counts'>{watchlist.length} / 50</span>
      </div>

      <ul className='list'>
        {watchlist.map((stock, index) => (
          <WatchListItem stock={stock} key={index} />
        ))}
      </ul>
      <DoughnoutChart data={data}/>
    </div>
  );
}

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const handleMouseEnter = () => setShowWatchlistActions(true);
  const handleMouseLeave = () => setShowWatchlistActions(false);

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className='item'>
        <p style={{ paddingTop: '15px' }} className={stock.isDown ? 'down' : 'up'}>
          {stock.name}
        </p>
        <div className='itemInfo'>
          <span className='percent'>{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className='down' />
          ) : (
            <KeyboardArrowUp className='up' />
          )}
          <span className='price'>{stock.price}</span>
        </div>
      </div>
      {showWatchlistActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};

const WatchListActions = ({ uid }) => {
  const { openBuyWindow } = useContext(GeneralContext); // context se function le rahe hain

  return (
    <span className='actions'>
      <span>
        <Tooltip
          title='Buy (B)'
          placeholder='top'
          arrow
          TransitionComponent={Grow}
        >
          <button className='buy' onClick={() => openBuyWindow(uid)}>Buy</button>
        </Tooltip>

        <Tooltip
          title='Sell (S)'
          placeholder='top'
          arrow
          TransitionComponent={Grow}
        >
          <button className='sell'  onClick={() => openBuyWindow(uid)}>Sell</button>
        </Tooltip>

        <Tooltip
          title='Analytics (A)'
          placeholder='top'
          arrow
          TransitionComponent={Grow}
        >
          <button className='action'>
            <BarChartOutlined className='icon' />
          </button>
        </Tooltip>

        <Tooltip
          title='More'
          placeholder='top'
          arrow
          TransitionComponent={Grow}
        >
          <button className='action'>
            <MoreHoriz className='icon' />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};
