import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { useState } from "react/cjs/react.development";
import { OwnContext } from "./OwnContext";

const Edit = () => {
  const [users, setUsers] = useContext(OwnContext);

  const { id } = useParams();

  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState();
  const [flag, setFlag] = useState(false);

  const user = users.filter((user) => user.id == id);

  const updateName = (e) => {
    setName(e.target.value);
    user[0].name = name;
  };

  const updatePosition = (e) => {
    setPosition(e.target.value);
    user[0].position = position;
  };
  const updateSalary = (e) => {
    setSalary(e.target.value);
    user[0].salary = salary;
  };

  const updateProfile = (e) => {
    e.preventDefault();
    setUsers([...users]);
    setFlag(true);
  };
  return (
    <div className=" h-screen">
      <div className="h-full flex flex-col items-center justify-center">
        <form onSubmit={updateProfile}>
          <button className="animate-pulse bg-blue-400 m-4  p-4 px-16 rounded-3xl text-blue-100 font-serif font-bold text-4xl focus:outline-none ">
            ID : {id}
          </button>
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

export default Edit;
