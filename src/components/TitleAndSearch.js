//구은모

import { useState } from 'react';
import { startups } from '../db/mockKem';
import icSearch from '../assets/images/ic_search.png';
import './TitleAndSaerch.css';

function TitleAndSearch() {
  const [order, setOrder] = useState('revenue');
  const [keyword, setKeyword] = useState('');

  // 스타트업을 정렬
  const sortedCompanies = [...startups].sort((a, b) => b[order] - a[order]);

  // 키워드에 따라 필터링
  const filteredCompanies = sortedCompanies.filter((company) =>
    company.name.toLowerCase().includes(keyword.toLowerCase()),
  );

  const handleRevenueClick = () => setOrder('revenue');
  const handleEmployeesCountClick = () => setOrder('employeesCount');

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // 현재는 submit을 통해 검색을 트리거하지만 실시간 검색을 하고싶다면 onChange에서 처리
  };

  return (
    <>
      <div className="title">
        <h1>전체 스타트업 목록</h1>

        <div className="search">
          <form onSubmit={handleSubmit}>
            <input
              id="searchInput"
              value={keyword}
              onChange={handleKeywordChange}
              placeholder="검색어를 입력해주세요"
            />
            <img
              className="ic-search"
              src={icSearch}
              alt="검색"
              width="24px"
            />
          </form>
        </div>
      </div>
      {/* <div className="companyList">
          {filteredCompanies.map(company => (
            <div key={company.id} className="companyItem">
              <h2>{company.name}</h2>
              <p>매출액: {company.revenue}</p>
              <p>고용인원: {company.employeesCount}</p>
            </div>
          ))}
        </div> */}
    </>
  );
}

export default TitleAndSearch;
