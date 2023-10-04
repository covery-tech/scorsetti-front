import React from "react";
import "./SideBar.css";
import useUser from "../../../hooks/UseUser";
import { SideBarPas } from "./SideBarPas";
import { SideBarAdmin } from "./SideBarAdmin";
import { SideBarClient } from "./SideBarClient";
export const SideBar = () => {
  const { logout, updateSite, user } = useUser();
  return (
    <div className="sidebar pa2 mt1 mt0-l mb3 mb0-l">
      <div className="top">
        {user.type === "pas" ? (
          <span
            className="flex justify-center items-center tc b ph1 pb2 f4 dark-gray"
            onClick={() => updateSite("panel")}
          >
            Panel de PAS
          </span>
        ) : (
          <></>
        )}
        {user.type === "admin" ? (
          <span
            className="flex justify-center items-center tc b ph1 pb2 f4 dark-gray"
          >
            Panel de administrador
          </span>
        ) : (
          <></>
        )}
        {user.type === "superadmin" ? (
          <span
            className="flex justify-center items-center tc b ph1 pb2 f4 dark-gray"
          >
            Panel de super admin.
          </span>
        ) : (
          <></>
        )}
        {user.type === "client" ? (
          <span
            className="flex justify-center items-center tc b ph1 pb2 f4 dark-gray"
          >
            Panel de cliente
          </span>
        ) : (
          <></>
        )}
      </div>
      <hr />
      <div className="center">
        {user.type === "pas" ? (
          <SideBarPas logout={logout} updateSite={updateSite} />
        ) : user.type === "admin" || user.type === "superadmin" ? (
          <SideBarAdmin logout={logout} updateSite={updateSite} />
        ) : user.type === "client" ? (
          <SideBarClient logout={logout} updateSite={updateSite} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
