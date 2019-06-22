import React from 'react';
import Button from '../Button';
import './ReadingList.css';

const ReadingList = ({ list, open, remove }) => {
  return (
    <div className="ReadingList">
      <ul className="ReadingList-list">
        {list.map(site =>
          <li className="ReadingList-item">
            <img className="ReadingList-image" src={`https://www.google.com/s2/favicons?domain=${site.url}`} alt=""></img>
            <Button
              key={site.id}
              onClick={() => {
                open(site.url)
              }}>
              {site.title}
            </Button>
            <Button
              key={site.id}
              onClick={() => {
                remove(site.id)
              }}>
              X
            </Button>
          </li>)}
      </ul>
    </div>
  );
}

export default ReadingList;
