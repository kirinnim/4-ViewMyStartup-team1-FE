//구은모

import React from 'react';
import Container from '../components/Container';
import './CompanyListPage.css';
import CompanylistTableRank from '../components/CompanyList';
import HearderJHM from '../components/my-comparison/HearderJHM';

function CompanyListPage() {
  return (
    <>
      <HearderJHM />
      <div className="headerLine"></div>
      <Container>
        <CompanylistTableRank />
      </Container>
    </>
  );
}
export default CompanyListPage;