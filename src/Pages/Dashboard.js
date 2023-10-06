import React, { useEffect, useState } from "react";
import Dashboardbox from "../components/Dashboardbox";
import Auth from "../components/Auth";
import Alert from "../components/Alert";

function Dashboard() {
    const [Loading, setLoading] = useState(false);
    const [userName, setuserName] = useState('User')
    const [ValidUser, setValidUser] = useState(false)
    async function auth() {
    let data = await Auth();
    console.log('data');
    console.log(data);
    if (!data.user_valid) {
      window.location.href = "/login";
    } else {
      setValidUser(true)
    }
  }
 
  useEffect(() => {
    auth();
    getUserDetails();
  }, []);
  async function getUserDetails(){
    const api_data = await fetch("https://a2z-solutions-backend.onrender.com/api/user-details", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_token: localStorage.getItem('user_token')
      }),
      });
    const data = await api_data.json();
    setuserName(data.name);
  }

  async function logoutUser(){
    setLoading(true);
    localStorage.removeItem('user_token');
    window.location.href = "/login";
    setLoading(false);
  }
  return (
    <>
      {ValidUser &&

        <div class="relative z-10 flex flex-col items-center w-full">
          <h1 class="mt-6 font-extrabold leading-tight text-center text-4xl sm:text-6xl">
            My Dashboard
          </h1>
          <h4 class="mt-2 font-extrabold leading-tight text-center text-2xl sm:text-3xl">
           Hi Dear,  <span className="text-red-600">{userName}</span>
          </h4>
          <div className="container mt-12">

            <div className="container sm:px-28">
              {/* <Alert text={""} /> */}
              <Dashboardbox title1={"My Tasks"} title2={"Check all your Tasks."} link={'/dashboard/assignments'} />
              <Dashboardbox title1={"All Notices"} title2={"Get all your Notices"} link={'/dashboard/notices'} />
              <Dashboardbox title1={"My Account"} title2={"Edit your Accout Details"} />
            </div>
          </div>
          <button class="flex mx-auto mt-1 text-white bg-rose-600 border-0 py-2 px-5 focus:outline-none hover:bg-rose-400 rounded" onClick={logoutUser}>{Loading ? "" : "Logout"}   <svg
                                width="20"
                                height="20"
                                fill="currentColor"
                                class="ml-2 animate-spin"
                                viewBox="0 0 1792 1792"
                                xmlns="http://www.w3.org/2000/svg"
                                hidden={Loading ? false : true}
                            >
                                <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65s.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
                            </svg></button>
        </div>
      }
    </>
  );
}

export default Dashboard;
