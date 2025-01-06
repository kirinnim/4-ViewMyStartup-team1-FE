//구은모

import React, { useState } from 'react';
import Container from '../components/Container';
import KemHeader from '../components/HeaderKEM';
import './CompanyListPage.css';
import { Link } from 'react-router-dom';
import CompanylistTableRank from '../components/CompanyList';


function CompanyListPage() {

  return (
    <>
      <KemHeader />
      <div className="headerLine"></div>
      <Container>
        <CompanylistTableRank />
      </Container>
    </>
  );
}
export default CompanyListPage;