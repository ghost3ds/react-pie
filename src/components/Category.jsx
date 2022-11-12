import React from 'react';
import { useState } from 'react';

function Category() {
  const [active, setActive] = useState(0);
  const onClickCategory = (index) => {
    setActive(index);
  };

  const pies = ['Все', 'Осетинские', 'Мясные', 'Закрытые', 'Сытные', 'Русские'];

  return (
    <div className="nav__category">
      <ul className="nav__list">
        {pies.map((value, i) => (
          <li key={i} onClick={() => onClickCategory(i)} className={active === i ? 'active' : ''}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
