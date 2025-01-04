// 김세환
import './Pagination.css';

const Pagination = ({
  currentPage, // 현재 활성화된 페이지 번호
  onPageChange, // 페이지가 변경될 때 실행할 콜백 함수
  totalItems, // 전체 아이템의 개수
  itemsPerPage, // 페이지 당 아이템의 개수
}) => {
  const totalPagesCount = Math.ceil(totalItems / itemsPerPage); // 전체 페이지 수 계산
  const maxButtonsCount = 5; // 항상 5개의 버튼을 보여줌
  const currentGroup = Math.floor((currentPage - 1) / maxButtonsCount); // 현재 페이지 그룹 계산
  const startPageNum = currentGroup * maxButtonsCount + 1; // 현재 그룹의 첫 번째 페이지
  const endPageNum = Math.min(startPageNum + maxButtonsCount - 1, totalPagesCount); // 현재 그룹의 마지막 페이지

  const pageButtons = []; // 현재 그룹의 페이지 버튼 배열 생성
  for (let i = startPageNum; i <= endPageNum; i++) {
    pageButtons.push(i); // 버튼에 표시할 페이지 번호 추가
  }

  // 다음 그룹으로 이동
  const goToNextPage = () => {
    const nextPageGroupStart = Math.min(startPageNum + maxButtonsCount, totalPagesCount); // 다음 그룹의 첫 번째 페이지
    onPageChange(nextPageGroupStart); // 다음 그룹의 첫 번째 페이지로 이동
  };

  // 이전 그룹으로 이동
  const goToPreviousPage = () => {
    const previousPageGroupStart = Math.max(startPageNum - maxButtonsCount, 1); // 이전 그룹의 첫 번째 페이지
    onPageChange(previousPageGroupStart); // 이전 그룹의 첫 번째 페이지로 이동
  };

  return (
    <div>
      <div className="pagination">
        {/* 이전 그룹 버튼 */}
        {totalPagesCount > maxButtonsCount && (
          <button
            className="prev-btn"
            onClick={goToPreviousPage}
            disabled={currentPage <= maxButtonsCount} // 첫 그룹에서는 비활성화
          >
            &lt;
          </button>
        )}

        {/* 현재 그룹의 페이지 버튼 */}
        {pageButtons.map((page) => (
          <button
            key={page}
            style={{
              backgroundColor: page === currentPage ? '#eb5230' : '#4b4b4b',
            }}
            onClick={() => onPageChange(page)} // 클릭 시 해당 페이지로 이동
          >
            {page}
          </button>
        ))}

        {/* 다음 그룹 버튼 */}
        {totalPagesCount > maxButtonsCount && (
          <button
            className="next-btn"
            onClick={goToNextPage}
            disabled={currentPage > totalPagesCount - maxButtonsCount} // 마지막 그룹에서는 비활성화
          >
            &gt;
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
