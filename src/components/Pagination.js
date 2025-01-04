// 김세환
import './Pagination.css';

const Pagination = ({
  currentPage, // 현재 활성화된 페이지 번호
  onPageChange, // 페이지가 변경될 때 실행할 콜백 함수
  totalItems, // 전체 아이템의 개수
  itemsPerPage,
}) => {
  const itemsPerPageCount = itemsPerPage; // 한 페이지에 보여줄 아이템의 개수
  const totalPagesCount = Math.ceil(totalItems / itemsPerPageCount); // 전체 페이지 수 계산
  const maxButtonsCount = 5; // 항상 5개의 버튼을 보여줌
  const currentGroup = Math.floor((currentPage - 1) / maxButtonsCount); // 현재 페이지 그룹 계산
  const startPageNum = currentGroup * maxButtonsCount + 1; // 현재 그룹의 첫 번째 페이지
  const endPageNum = Math.min(
    startPageNum + maxButtonsCount - 1,
    totalPagesCount
  ); // 현재 그룹의 마지막 페이지

  const pageButtons = []; // 현재 그룹의 페이지 버튼 배열 생성
  for (let i = startPageNum; i <= endPageNum; i++) {
    pageButtons.push(i); // 버튼에 표시할 페이지 번호 추가
  }

  // 다음 그룹으로 이동
  const goToNextPage = () => {
    // 다음 그룹의 첫 번째 페이지로 이동
    if (endPageNum < totalPagesCount) {
      onPageChange(startPageNum + maxButtonsCount); // 다음 그룹의 첫 번째 페이지로 이동
    }
  };

  // 이전 그룹으로 이동
  const goToPreviousPage = () => {
    const previousPageGroupStart = Math.max(startPageNum - maxButtonsCount, 1); // 이전 그룹의 첫 번째 페이지
    onPageChange(previousPageGroupStart); // 이전 그룹의 첫 번째 페이지로 이동
  };

  // 다음 그룹 버튼 비활성화 조건
  const isNextButtonDisabled = endPageNum >= totalPagesCount;

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
            disabled={isNextButtonDisabled} // 마지막 그룹에서는 비활성화
          >
            &gt;
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;

// import './Pagination.css';

// const Pagination = ({
//   currentPage,
//   onPageChange,
//   totalItems,
//   itemsPerPage,
// }) => {
//   console.log('this is Pagination');
//   const totalPages = Math.ceil(totalItems / itemsPerPage);
//   const maxButtons = 5; // 항상 5개의 버튼만 출력

//   // currentPage를 기준으로 5개의 버튼을 보여주기 위한 startPage와 endPage 계산
//   let startPage = Math.max(1, currentPage - 2); // currentPage를 기준으로 최소 1로 설정
//   let endPage = Math.min(totalPages, startPage + maxButtons - 1); // totalPages를 넘지 않게 설정

//   // 만약 endPage가 totalPages보다 크면, startPage를 조정해서 끝까지 표시
//   if (endPage - startPage < maxButtons - 1) {
//     startPage = Math.max(1, endPage - maxButtons + 1);
//   }

//   // 페이지 번호들이 비어 있지 않게 하기 위해 totalPages가 5개 이상이면 endPage를 5로 고정
//   if (totalPages <= maxButtons) {
//     endPage = totalPages;
//     startPage = 1;
//   }

//   const pageButtons = [];
//   for (let i = startPage; i <= endPage; i++) {
//     pageButtons.push(i);
//   }

//   // 부족한 자리는 endPage + 1부터 버튼 숫자 추가
//   while (pageButtons.length < maxButtons) {
//     pageButtons.push(pageButtons[pageButtons.length - 1] + 1);
//   }

//   const goToNextPage = () => {
//     console.log('click next');
//     // 5개씩 페이지를 넘기기
//     if (currentPage < totalPages) {
//       const nextPage = Math.min(currentPage + 5, totalPages);
//       onPageChange(nextPage);
//     }
//   };

//   const goToPreviousPage = () => {
//     // 5개씩 이전 페이지로 이동
//     if (currentPage > 1) {
//       const prevPage = Math.max(currentPage - 5, 1);
//       onPageChange(prevPage);
//     }
//   };

//   return (
//     <div>
//       <div className="pagination">
//         <button
//           className="prev-btn"
//           onClick={goToPreviousPage}
//           disabled={currentPage === 1}
//         >
//           &lt;
//         </button>

//         {
//           // totalItems !== 0 &&
//           pageButtons.map((page, index) => (
//             <button
//               key={index}
//               style={{
//                 backgroundColor: page === currentPage ? '#eb5230' : '#4b4b4b',
//               }}
//               onClick={() => {
//                 console.log('onpagechange');
//                 return onPageChange(page);
//               }}
//               disabled={page > totalPages} // 페이지가 실제로 없으면 비활성화
//             >
//               {page}
//             </button>
//           ))
//         }

//         <button
//           className="next-btn"
//           onClick={goToNextPage}
//           disabled={currentPage === totalPages}
//         >
//           &gt;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Pagination;
