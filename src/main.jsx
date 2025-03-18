import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";  // ✅ Fix here
import App from "./App";
import RootLayout from "./Components/Layouts/RootLayout";
import HomePage from "./pages/HomePage";
import Register from "./pages/auth/Register";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/auth/LoginPage.jsx";
import { Provider } from "react-redux";
import { store } from "./apps/store.js";
import Profile from "./pages/Profile";
import Userpf from "./pages/Userpf";
import OnProgessPage from "./pages/OnProgessPage.jsx";
import RootLayoutv2 from "./Components/Layouts/RootLayoutv2.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ModalWorkspace from "./Components/ModalWorkspace.jsx";
import ProgessCardDetail from "./Components/ProgessCardDetail.jsx";
import ToDoPage from "./pages/ToDoPage.jsx";
import CompletedPage from "./pages/CompletedPage.jsx";
import Sidebar from "./Components/Sidebar.jsx";
import AboutUs from "./pages/AboutUs.jsx";
// import WorkspacePage from "./pages/WorkspacePage.jsx";
import Kanban from "./pages/Kanban.jsx";
import MemberPage from "./pages/MemberPage.jsx";
import MemberCard from "./Components/MemberCard.jsx";
import { Archive } from   "./pages/Archive.jsx";
import EditProfilePage from "./pages/EditProfilePage.jsx";
import TodoCardDetail from "./Components/TodoCardDetail.jsx";
import CompletedCardDetail from "./Components/CompletedCardDetail.jsx";
import { NotificationPage } from "./pages/NotificationPage.jsx";
import EditTaskPupUp from "./Components/EditTaskPupUp.jsx";
const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/" element={<App />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </Route>
          <Route path="/" element={<RootLayoutv2 />}>
            <Route path="/profile" element={<Profile />} />
            <Route path={"/userpf"} element={<Userpf />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/progress" element={<OnProgessPage />} />
            <Route path="/detail" element={<ProgessCardDetail />} />
            <Route path="/todo/:id" element={<ToDoPage />} />
            <Route path="/completed" element={<CompletedPage />} />
            <Route path="/member" element={<MemberPage/>} />
            <Route path="/membercard" element={<MemberCard />} />
            <Route path="/workspace" element={<ModalWorkspace />} />
            <Route path="sidebar" element={<Sidebar />} />
            <Route path="/kanban/:id" element={<Kanban/>} />
            <Route path="/kanban" element={<Kanban/>} />
            <Route path="/workspacepage" element={<Kanban/>}/>
            <Route path="/notification" element={<NotificationPage/>}/>
            <Route path="/archive" element={<Archive/>}/>
            <Route path="/editprofilepage" element={<EditProfilePage/>}/>
            <Route path="/tododetail" element={<TodoCardDetail/>}></Route>
            <Route path="/CompleteDetail" element={<CompletedCardDetail/>}></Route>
          </Route>
          <Route path="/edittask" element={<EditTaskPupUp/>}/>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/editTask" element={< EditTaskPupUp/>}></Route> */}
        </Routes>
      </BrowserRouter>
    </Provider>
  </GoogleOAuthProvider>
);
