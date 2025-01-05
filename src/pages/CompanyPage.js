import './CompanyPage.css';
import Header from '../components/HeaderKJY';
import CompanyDetailInfo from '../components/CompanyDetailInfo';
import CompanyInvestmentSection from '../components/CompanyInvestmentSection';
import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getCompany from '../apis/getCompany_kjy';

function CompanyPage() {
  const [company, setCompany] = useState();
  // 주소창에 있는 파라미터들을 객체로 리턴
  const { companyId } = useParams();

  const handleLoad = async () => {
    if (companyId) {
      const result = await getCompany(companyId);
      setCompany(result);
    } else {
      const location = useLocation();
      setCompany(location.state.company);
    }
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <>
      <Header />
      <div className="wrapper">
        {company && <CompanyDetailInfo company={company} />}
        <CompanyInvestmentSection />
      </div>
    </>
  );
}
export default CompanyPage;
