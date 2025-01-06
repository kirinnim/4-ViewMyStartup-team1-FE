//구은모

import './CompanyList.css';
import icSearch from '../assets/images/ic_search.png';
import Dropdown from './Dropdown';
import getCompanies from '../apis/getCompanies_KEM';
import { useEffect, useState } from 'react';
import setCategoryEngToKor from '../utils/setCategoryEngToKor';
import convertNumTo100M from '../utils/convertNumTo100M';
import StartupTableHead from './StartupTableHead';
import TitleAndSearch from './TitleAndSearch';

function CompanyListTableBody({ company }) {

  return (
    <div className="company-table-rank-body">
      <div className="body-rank-item0">1위</div>
      <div className="body-rank-item1">
        <div className="body-rank-item1-wrapper">
          <img src={company.imageUrl} alt={company.name} className="company-table-rank-image" />
          <div className="company-table-rank-name">{company.name}</div>
        </div>
      </div>
      <div className="body-rank-item2">
        <div className="body-rank-item2-desc">{company.description}</div>
      </div>
      <div className="body-rank-item3">{setCategoryEngToKor(company.category)}</div>
      <div className="body-rank-item4">{convertNumTo100M(company.actualInvest)}억</div>
      <div className="body-rank-item5">{convertNumTo100M(company.revenue)}억</div>
      <div className="body-rank-item6">{company.employeesCount}명</div>
    </div>
  );
}

export default function CompanlistTableRank() {
  const [companies, setCompanies] = useState([]);

  const handleLoad = async () => {
    const result = await getCompanies();
    setCompanies(result);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    // <div className="company-table-rank-edu">
    //   <div className="company-table-rank-title-edu">
    //     <span>기업 순위 확인하기</span>
    //     <div className="search-form-wrapper-edu">
    //       {/* <form id="searchFormEdu">
    //         <input id="searchNameEdu" name="search" placeholder="기업명 입력" />
    //         <img
    //           className="ic-search-edu"
    //           src={icSearch}
    //           alt="검색"
    //           width="24px"
    //         />
    //       </form> */}

    //     </div>
    //   </div>
    <div className="startup-list">
      <div className="titl-search-dropdown">
        <TitleAndSearch />
        <Dropdown />
      </div>
      <StartupTableHead />
      {/* <div className="company-table-rank-header">
        <div className="header-rank-item0">순위</div>
        <div className="header-rank-item1">기업 명</div>
        <div className="header-rank-item2">기업 소개</div>
        <div className="header-rank-item3">카테고리</div>
        <div className="header-rank-item4">누적 투자 금액</div>
        <div className="header-rank-item5">매출액</div>
        <div className="header-rank-item6">고용 인원</div>
      </div> */}
      {companies.map((item) => {
        return <CompanyListTableBody key={item.id} company={item} />;
      })}
    </div>
  );
}
