import React from 'react';
import { useState } from 'react';

import { IconContext } from 'react-icons';
import { RiArrowDownSFill } from 'react-icons/ri';

function Sort() {
  const [openPopup, setOpenPopup] = useState(false);
  const [selectedSort, setSelectedSort] = useState(0);

  const list = ['По популярности', 'По цене', 'По рейтингу'];

  const onClickSort = (i) => {
    setSelectedSort(i);
    setOpenPopup(false);
  };

  return (
    <div className="nav__sort">
      <IconContext.Provider
        value={{
          size: '16px',
          style: { verticalAlign: 'middle' },
          className: 'react-icon',
        }}
      >
        <RiArrowDownSFill />
      </IconContext.Provider>

      <span onClick={() => setOpenPopup(!openPopup)} className="activeSort">
        {list[selectedSort]}
      </span>

      {openPopup && (
        <div className="nav__sort__popup">
          <ul>
            {list.map((value, i) => (
              <li
                key={i}
                onClick={() => onClickSort(i)}
                className={selectedSort === i ? 'activeSort' : ''}
              >
                {value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;
