//구은모

import Container from '../components/Container';
import KemHeader from '../components/HeaderKEM';
import './CompanyListPage.css';
import TitleAndSearch from '../components/TitleAndSearch';
import StartupTableHead from '../components/StartupTableHead';
import CompanyList from '../components/CompanyList';
import React from 'react';

function CompanyListPage() {
  return (
    <>
      <KemHeader />
      <Container>
        <TitleAndSearch />
        <StartupTableHead />
        <CompanyList startups={[]} />
      </Container>
    </>
  );
}
export default CompanyListPage;
