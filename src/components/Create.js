import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { OwnContext } from "./OwnContext";

const Create = () => {
  const [users, setUsers] = useContext(OwnContext);
  const [id, setId] = useState();
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState();
  const [flag, setFlag] = useState(false);

  const updateId = (e) => {
    setId(e.target.value);
  };

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updatePosition = (e) => {
    setPosition(e.target.value);
  };
  const updateSalary = (e) => {
    setSalary(e.target.value);
  };

  const updateProfile = (e) => {
    e.preventDefault();
    setUsers([
      ...users,
      { id: id, name: name, position: position, salary: salary },
    ]);
    // console.log(users);
    return <Link to="/" />;
  };

  return (
    <div className=" h-screen">
      <div className="h-full flex flex-col items-center justify-center">
        <form onSubmit={updateProfile}>
          <div class="mb-4">
            <label
              className=" block text-gray-700 text-xl font-bold mr-2"
              for="id"
            >
              ID
            </label>
            <input
              autocomplete="off"
              onChange={updateId}
              value={id}
              className="mt-2 shadow appearance-none border border-blue-600 rounded-lg w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="id"
              type="number"
              placeholder="Please give you Id"
            />
          </div>
          <div class="mb-4">
            <label
              className="block text-gray-700 text-xl font-bold "
              for="name"
            >
              Name
            </label>
            <input
              autocomplete="off"
              onChange={updateName}
              value={name}
              className="mt-2 shadow appearance-none border border-blue-600 rounded-lg w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Please give your Name"
            />
          </div>
          <div class="mb-4">
            <label
              className="block text-gray-700 text-xl font-bold "
              for="position"
            >
              Position
            </label>
            <input
              autocomplete="off"
              onChange={updatePosition}
              value={position}
              className="mt-2 shadow appearance-none border border-blue-600 rounded-lg w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="position"
              type="text"
              placeholder="Please give your Position"
            />
          </div>
          <div class="mb-4">
            <label
              className=" block text-gray-700 text-xl font-bold mr-2"
              for="salary"
            >
              Salary
            </label>
            <input
              autocomplete="off"
              onChange={updateSalary}
              value={salary}
              className="mt-2 shadow appearance-none border border-blue-600 rounded-lg w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="salay"
              type="number"
              placeholder="Please give you Salary"
            />
          </div>
          <div className=" flex justify-between mt-6">
            {flag ? (
              <Link to="/">
                <button className="bg-blue-400 hover:bg-blue-500 text-blue-50 font-bold py-3 px-8 rounded-full w-auto ">
                  Submit
                </button>
              </Link>
            ) : (
              <button className="bg-blue-400 hover:bg-blue-500 text-blue-50 font-bold py-3 px-8 rounded-full w-auto ">
                Submit
              </button>
            )}

            <Link to="/">
              <button className="bg-gray-500 hover:bg-gray-700 text-gray-50 font-bold py-3 px-8 rounded-full w-auto ">
                Back To Home
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
