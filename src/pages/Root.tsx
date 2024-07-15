import {Fragment, ReactNode} from "react";
import {Outlet} from "react-router-dom";

import tmpImage from "@assets/profileTMPImage.jpg";
import {SettingIcon} from "@assets/icons";

import {Row2, Row8} from "@components/atomic/rowAndColumns/Row.tsx";
import {Col4} from "@components/atomic/rowAndColumns/Col.tsx";
import {Divider} from "@components/atomic";

import {appStyle, sidebarStyle} from "@styles/index";


function Header() {
  return (
    <></>
  );
}

function LayoutWithHeader({children}: {children: ReactNode}) {
  return (
    <Fragment>
      <Header />
      {children}
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
    <Row8
      alignItems="center"
      width="calc(100% - 24px)"
      padding="12px"
      backgroundColor={isActive ? "var(--gray700)" : "var(--gray-600)"}
      borderRadius={12}
    >
      <img src={characterImage} alt="character image" className={sidebarStyle.characterImage} />
      <span className="text-m-20">{characterName}</span>
    </Row8>
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
          <Outlet />
        </LayoutWithHeader>
      </LayoutWithSidebar>
    </div>
  )
}

export default Root
