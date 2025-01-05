// 조형민

import './HeaderJHM.css';
import imgLogo from '../../assets/images/vms_logo_2x.png';
import { Link, NavLink } from 'react-router-dom';
import React from 'react';

function getLinkStyle({ isActive }) {
  return {
    color: isActive ? '#fffff' : '#747474',
  };
}

function Header() {
  return (
    <header>
      <Link to="/">
        <img className="header-img" src={imgLogo} alt="로고" />
      </Link>
      <div className="header-nav">
        <div>
          <NavLink to="/my-comparision" style={getLinkStyle}>
            나의 기업 비교
          </NavLink>
        </div>
        <div>
          <NavLink to="/comparision-status" style={getLinkStyle}>
            비교 현황
          </NavLink>
        </div>
        <div>
          <NavLink to="/investment-status" style={getLinkStyle}>
            투자 현황
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default React.memo(Header); // 불필요한 Header 렌더링을 막기 위해 React.memo 적용
