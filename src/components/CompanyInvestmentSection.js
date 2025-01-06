import './CompanyInvestmentSection.css';
import getCompanyInvestments from '../apis/getCompanyInvestments';
import { useEffect, useState } from 'react';
import Pagination from './Pagination';

const formatToKoreanBillion = (amount) => {
  return (Math.round((amount / 100000000) * 10) / 10).toLocaleString();
};

const ITEMSPERPAGE_COUNT = 2;

// 각 행별로 필요한 액션(드롭다운, 수정/삭제)이 있어서 분리함
function TableRowCompany({ investment }) {
  const [isShowDropdown, setIsShowDropdwon] = useState(false);

  const dropdownClassName = `dropdown-menu ${isShowDropdown ? '' : 'hidden'}`;
  const handleMenuClick = () => {
    setIsShowDropdwon(!isShowDropdown);
  };

  return (
    <tr key={investment.id}>
      <td>{investment.name}</td>
      <td>{investment.rank}위</td>
      <td>{formatToKoreanBillion(investment.amount)}억</td>
      <td>{investment.comment}</td>
      <td>
        <div className="more-button-wrapper">
          <button className="more-button" onClick={handleMenuClick}>
            ⋮
          </button>
          <div className={dropdownClassName}>
            <div>수정하기</div>
            <div>삭제하기</div>
          </div>
        </div>
      </td>
    </tr>
  );
}

export default function CompanyInvestmentSection({ companyId }) {
  const [investments, setInvestments] = useState([]);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [totalInvestAmount, setTotalInvestAmount] = useState(0);

  // companyId를 이용해 db에서 투자 정보 불러오기
  // 에러 처리는 하지 않았습니다. 나중에 주영님이 적용해 보세요~ :)
  const handleLoad = async (options) => {
    const result = await getCompanyInvestments(companyId, options);
    setInvestments(result.companyInvestments);
    setTotalCount(result.totalCount);
    setTotalInvestAmount(result.totalInvestAmount);
  };

  useEffect(() => {
    handleLoad({
      skip: (page - 1) * ITEMSPERPAGE_COUNT,
      limit: ITEMSPERPAGE_COUNT,
    });
  }, [page]);

  return (
    <>
      <div className="company-investment-section">
        <h1 className="table-title">View My Startup에서 받은 투자</h1>
        <div className="divider" />
        <p className="investment-sum">
          {`총 ${formatToKoreanBillion(totalInvestAmount)}억 원`}
        </p>
        <table className="data-table">
          <thead>
            <tr>
              <th>투자자 이름</th>
              <th>순위</th>
              <th>투자금액</th>
              <th>투자 코멘트</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {investments.map((investment, index) => (
              <TableRowCompany key={investment.id} investment={investment} />
            ))}
          </tbody>
        </table>
      </div>
      {totalCount !== 0 && (
        <Pagination
          currentPage={page}
          onPageChange={setPage}
          totalItems={totalCount}
          itemsPerPage={ITEMSPERPAGE_COUNT}
        />
      )}
    </>
  );
}
