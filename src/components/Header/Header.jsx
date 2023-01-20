import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';

import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { useMediaQuery } from 'react-responsive';

// Components
import SidebarModal from '../Sidebar/SidebarModal';

// img and icons
import logo from './assets/logo.png';
import { BsList, BsBell } from 'react-icons/bs';
import { RiVideoAddLine, RiMicFill } from 'react-icons/ri';
import { FaUserAlt } from 'react-icons/fa';
import { IoSearchOutline } from 'react-icons/io5';

export default function Header({ menudrop, setMenuDrop }) {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  const [modal, setModal] = useState(false);

  // input 검색어
  const getSearchValue = (e) => {
    e.preventDefault();
    setInputValue(e.target[0].value);
    navigate(`/results/${inputValue}`);
  };

  // 데스크탑 사이즈, 메뉴 버튼 클릭
  const menuBtnClick = (e) => {
    setMenuDrop((e) => !e);
  };

  // 태블릿과 모바일 사이즈, 메뉴 버튼 클릭
  const printModal = (e) => {
    setModal((e) => !e);
  };

  // 리액트 반응형
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1300 });
    return isDesktop ? children : null;
  };
  const TabletAndMobile = ({ children }) => {
    const isTablet = useMediaQuery({ maxWidth: 1299 });
    return isTablet ? children : null;
  };

  return (
    <>
      <header>
        <div className={styles.headerLeftLogomenu}>
          <Desktop>
            <BsList className={styles.headerIcon} size="24" onClick={menuBtnClick} />
          </Desktop>
          <TabletAndMobile>
            <BsList className={styles.headerIcon} size="24" onClick={printModal} />
            {modal ? <SidebarModal setModal={setModal} /> : null}
          </TabletAndMobile>
          <Link to={'/'} className={styles.logo}>
            <img src={logo} alt="youtube logo" />
            <sup>KR</sup>
          </Link>
        </div>
        <div className={styles.headerSearch}>
          <form onSubmit={getSearchValue}>
            <div className={styles.inputWrap}>
              <input type="text" placeholder="검색" />
              <button className={styles.keyboard} type="button">
                <img src="https://www.gstatic.com/inputtools/images/tia.png" alt="키보드" />
              </button>
            </div>
          </form>
          <button className={styles.headerSearchZoombtn} id="tooltip-search">
            <IoSearchOutline className={`${styles.headerIcon} ${styles.search}`} />
          </button>
          <Tooltip anchorId="tooltip-search" content="검색" className={styles.tooltip} />
          <button className={styles.headerSearchVoicebtn} id="tooltip-voice">
            <RiMicFill className={`${styles.headerIcon} ${styles.voice}`} />
          </button>
          <Tooltip anchorId="tooltip-voice" content="음성으로 검색" className={styles.tooltip} />
        </div>
        <div className={styles.headerRightBtns}>
          <button id="tooltip-upload">
            <RiVideoAddLine className={styles.headerIcon} />
          </button>
          <Tooltip anchorId="tooltip-upload" content="만들기" className={styles.tooltip} />
          <button id="tooltip-notice">
            <BsBell className={`${styles.headerIcon} ${styles.notice}`} />
          </button>
          <Tooltip anchorId="tooltip-notice" content="알림" className={styles.tooltip} />
          <button>
            <FaUserAlt className={`${styles.headerIcon} ${styles.user}`} />
          </button>
        </div>
      </header>
    </>
  );
}
