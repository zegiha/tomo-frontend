import {Fragment, ReactNode} from "react";
import {Link, Outlet} from "react-router-dom";

import tmpImage from "@assets/profileTMPImage.jpg";
import {SettingIcon, HomeIcon, ReportIcon} from "@assets/icons";

import {Row0, Row2, Row8, RowSpacebetween} from "@components/atomic/rowAndColumns/Row.tsx";
import {Col0, Col4} from "@components/atomic/rowAndColumns/Col.tsx";
import {Divider} from "@components/atomic";

import {appStyle, sidebarStyle} from "@styles/index";


function Header() {
  return (
    <div style={{position: "sticky", top: "0", right: "0", width: "100%"}}>
      <Row0
        justifyContent="center"
        width="100%"
        padding="0 20px"
        borderBottom="1px solid var(--gray600)"
        backgroundColor="white"
      >
        <RowSpacebetween
          width="100%"
          maxWidth="900px"
          padding="16px 0"
        >
          <Link to="/">
            <Row0 alignItems="center">
              <HomeIcon width="24px" height="24px" />
              <span className="text-m-16" style={{color: "var(--gray800)"}}>홈</span>
            </Row0>
          </Link>
          <Link to="/report">
            <Row0 alignItems="center">
              <ReportIcon width="24px" height="24px" />
              <span className="text-m-16" style={{color: "var(--gray800)"}}>리포트</span>
            </Row0>
          </Link>
        </RowSpacebetween>
      </Row0>
    </div>
  );
}

function LayoutWithHeader({children}: {children: ReactNode}) {
  return (
    <Fragment>
      <Col0 width="100%">
        <Header />
        {children}
      </Col0>
    </Fragment>
  );
}



const characterDummy = [
  {
    isActive: false,
    characterName: '지동갓',
    characterImage: tmpImage,
  },
  {
    isActive: true,
    characterName: '지동갓',
    characterImage: tmpImage,
  },
  {
    isActive: false,
    characterName: '지동갓',
    characterImage: tmpImage,
  },
  {
    isActive: false,
    characterName: '지동갓',
    characterImage: tmpImage,
  },
  {
    isActive: false,
    characterName: '지동갓',
    characterImage: tmpImage,
  },
];

interface characterBarProps {
  isActive: boolean;
  characterImage: string;
  characterName: string;
}

function CharacterBar({isActive, characterImage, characterName}: characterBarProps) {
  return (
    <div
      className={sidebarStyle.characterBarContainer}
      style={isActive ? { backgroundColor: "var(--gray600)" } : {}}
    >
      <img src={characterImage} alt="character image" className={sidebarStyle.characterImage} />
      <span className="text-m-20">{characterName}</span>
    </div>
  );
}

function Sidebar() {
  return (
    <div className={sidebarStyle.sidebarContainer}>
      <Row8 alignItems="center">
        <div className={sidebarStyle.profileImageContainer}>
          <img src={tmpImage} alt="profileImage" className={sidebarStyle.profileImage}/>
        </div>
        <Col4>
          <span className="text-m-20">이서율</span>
          <Row2 alignItems="center">
            <SettingIcon/>
            <span style={{color: "var(--gray800)", textDecoration: "underline"}} className="text-m-16">설정</span>
          </Row2>
        </Col4>
      </Row8>
      <Divider/>
      {characterDummy.map((item, index) =>
        <CharacterBar
          key={index}
          isActive={item.isActive}
          characterImage={item.characterImage}
          characterName={item.characterName}
        />
      )}
    </div>
  );
}

function LayoutWithSidebar({children}: {children: ReactNode}) {
  return (
    <Fragment>
      <Sidebar />
      {children}
    </Fragment>
  );
}

function Root() {
  return (
    <div className={appStyle.container}>
      <LayoutWithSidebar>
        <LayoutWithHeader>
          <Row0
            justifyContent="center"
            width="100%"
            padding="0 20px"
          >
            <Outlet />
          </Row0>
        </LayoutWithHeader>
      </LayoutWithSidebar>
    </div>
  )
}

export default Root
