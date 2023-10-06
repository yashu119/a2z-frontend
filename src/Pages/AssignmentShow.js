import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Auth from "../components/Auth";
import Alert from "../components/Alert";

function AssignmentShow() {
  const { id } = useParams();
  const [assignment, setassignment] = useState("");
  const [user_id, setuser_id] = useState('')
  const [Loading, setLoading] = useState(false)
  const [textValue, setTextValue] = useState('');


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


  async function getAssignment() {
    const api_data = await fetch(`https://a2z-solutions-backend.onrender.com/api/assignment/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await api_data.json();
    setassignment(data);
  }


  const [Status, setStatus] = useState([]);
  async function getUserDetails() {
    const api_data = await fetch("https://a2z-solutions-backend.onrender.com/api/user-details", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_token: localStorage.getItem('user_token')
      }),
    });
    const data = await api_data.json();
    console.log('datsssa');
    console.log(data);
    const api_data1 = await fetch('https://a2z-solutions-backend.onrender.com/api/assignment/status', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: data._id,
      }),
    });
    setuser_id(data._id)
    // console.log(api_data1.json());
    const status1 = await api_data1.json();
    setStatus(status1);
  }

  const fileInputRef = React.createRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    const formData = new FormData(); // create a new FormData object
    formData.append("name", "user_id"); // add user_id to the form data
    formData.append("topic", "id"); // add assignment_id to the form data
    formData.append("link", "D"); // add the file to the form data

    try {
      const response = await fetch("http://localhost:3030/api/assignment/response/", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: user_id,
          topic: id,
          link: textValue,
        }),
      });
      const data = await response.json();
      if (data.success) {
        setassignment(data.assignment);
        window.location.href = "/dashboard/assignments";
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false)
  };




  useEffect(() => {
    auth();
    getAssignment();
    getUserDetails();
  }, []);



  return (
    <>
      <Navbar />
      {/* <Alert text={"Due to Technical issues... Don't Submit your Assignment on the Website instead Send it on WhatsApp Group"} /> */}

      <div class="relative z-10 p-5 flex flex-col items-center w-full mb-8">
        <h1 class="mt-6 font-extrabold leading-tight text-center text-4xl sm:text-6xl">
          <span className="text-indigo-600">T</span>ASK
        </h1>

        <div className="container p-4 mt-12 border rounded-lg">
          <p class="mt-2 font-extrabold leading-tight text-2xl sm:text-3xl">
            <span className="text-indigo-600">Task Name: </span> {assignment.name}
          </p>

          <p class="mt-2 font-extrabold leading-tight text-2xl sm:text-3xl">
            <span className="text-indigo-600">Topic: </span> {assignment.topic}
          </p>
          <div className="container ">
            <p className="mt-2 text-xl font-bold leading-tight break-words sm:text-2xl">
              <span className="text-rose-600">Due Date: </span>
              {new Date(assignment.due).toLocaleDateString()}
            </p>
            {Status.some(item => item._id === id) ? '' :

              (

                <>
                  <p className="mt-6 text-xl font-extrabold leading-tight text-center sm:text-xl">
                    <span className="text-green-600">Submit</span> Task
                  </p>

                  <form className="flex flex-col items-center mt-3 space-x-6" onSubmit={handleSubmit}>
                    <label className="block">
                      <span className="sr-only">Assignment Text</span>
                      <input
                        required
                        type="text"
                        value={textValue} // Bind the input value to the state variable
                        onChange={(e) => setTextValue(e.target.value)} // Update the state when input changes
                        className="block w-full p-2 border border-red-400 rounded-md text-md text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                        placeholder="Enter Your Project Link"
                      />
                    </label>

                    <button
                      type="submit"
                      className="px-8 py-2 mt-4 text-lg text-white border-0 rounded bg-rose-500 focus:outline-none hover:bg-rose-600"
                    >
                      {Loading ? "" : "Submit"}{' '}
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="ml-2 animate-spin"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                        hidden={Loading ? false : true}
                      >
                        <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65s.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
                      </svg>
                    </button>
                  </form>
                </>
              )

            }
          </div>
          <img
            className="my-4"
            src={assignment.image_link}
          />
        </div>

      </div>
    </>
  );
}

export default AssignmentShow;
