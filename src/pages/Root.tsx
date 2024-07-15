import {Fragment, ReactNode} from "react";
import "@styles/app.css";
import "@styles/sidebar.css";
import {Outlet} from "react-router-dom";
import tmpImage from "@assets/profileTMPImage.jpg";
import {Row8} from "@components/atomic/rowAndColumns/Row.tsx";
import {Col4} from "../components/atomic/rowAndColumns/Col.tsx";

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
    <div className="sidebarContainer">
      <Row8>
        <div className="profileImageContainer">
          <img src={tmpImage} alt="profileImage" className="profileImage"/>
        </div>
        <Col4>
          <span className="text-m-20">이서율</span>
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
    <div className="container">
      <LayoutWithSidebar>
        <LayoutWithHeader>
          <Outlet />
        </LayoutWithHeader>
      </LayoutWithSidebar>
    </div>
  )
}

export default Root
