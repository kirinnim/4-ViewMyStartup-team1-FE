//김희주

import setCategoryEngToKor from '../utils/setCategoryEngToKor';
import './SelectionCount.css';
const SelectionCount = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <div key={item.id} className="khj-investment-item">
          <div className="rank">{item.rank}</div>
          <div className="khj-company-info">
            <img src={item.imageUrl} className="company-logo" />
            <div className="khj-company-name">{item.name}</div>
          </div>
          <div className="khj-company-intro">{item.description}</div>
          <div className="khj-category">
            {setCategoryEngToKor(item.category)}
          </div>
          <div className="khj-selection-count">{item.mySelectionCount}</div>
          <div className="khj-comparison-selection-count">
            {item.compareSelectionCount}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SelectionCount;
