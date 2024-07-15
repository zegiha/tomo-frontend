import {Fragment, ReactNode} from "react";
import appStyle from "@styles/app.module.css";
import sidebarStyle from "@styles/sidebar.module.css";
import {Outlet} from "react-router-dom";
import tmpImage from "@assets/profileTMPImage.jpg";
import {Row2, Row8} from "@components/atomic/rowAndColumns/Row.tsx";
import {Col4} from "@components/atomic/rowAndColumns/Col.tsx";
import {SettingIcon} from "@assets/icons";

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

function Sidebar() {
  return (
    <div className={sidebarStyle.sidebarContainer}>
      <Row8>
        <div className={sidebarStyle.profileImageContainer}>
          <img src={tmpImage} alt="profileImage" className={sidebarStyle.profileImage}/>
        </div>
        <Col4>
          <span className="text-m-20">이서율</span>
          <Row2>
            <SettingIcon/>
          </Row2>
        </Col4>
      </Row8>
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
