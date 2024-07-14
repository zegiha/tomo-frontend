import {ReactNode} from "react";
import "@styles/app.css";
import "@styles/sidebar.css";
import {Outlet} from "react-router-dom";
import tmpImage from "@assets/profileTMPImage.jpg";
import {Row8} from "@components/atomic/rowAndColumns/Row.tsx";

function Sidebar() {
  return (
    <div className="sidebarContainer">
      <Row8>
        <div className="profileImageContainer">
          <img src={tmpImage} alt="profileImage" className="profileImage"/>
        </div>

      </Row8>
    </div>
  );
}

function LayoutWithSidebarAndHeader({children}: {children: ReactNode}) {
  return (
    <div className="container">
      <Sidebar />
    </div>
  );
}

function App() {
  return (
    <LayoutWithSidebarAndHeader>
      <Outlet />
    </LayoutWithSidebarAndHeader>
  )
}

export default App
