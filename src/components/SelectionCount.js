//김희주

import "./SelectionCount.css";
const SelectionCount = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <div key={item.id} className="khj-investment-item">
          <div className="rank">{index + 1}</div>
          <div className="khj-company-info">
            <img src={item.imageUrl} className="company-logo" />
            <div className="khj-company-name">{item.name}</div>
          </div>
          <div className="khj-company-intro">{item.description}</div>
          <div className="khj-category">{item.category}</div>
          <div className="khj-selection-count">{item.SelectionCount}</div>
          <div className="khj-comparison-selection-count">
            {item.comparisonSelectionCount}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SelectionCount;
