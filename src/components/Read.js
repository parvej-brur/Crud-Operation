import React, { useContext } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { OwnContext } from "./OwnContext";

const Read = () => {
  const [users, setUsers] = useContext(OwnContext);
  const { id } = useParams();
  // console.log(id);

  const user = users.filter((user) => user.id == id);

  return (
    <div className=" h-screen">
      <div className="h-full flex flex-col items-center justify-center ">
        <button className="bg-blue-400 hover:bg-blue-500 text-blue-50 ml-2 font-bold py-2 px-6 rounded-full w-40 text-xl mb-6 cursor-not-allowed">
          ID : {id}
        </button>
        <div className="border-2 border-gray-900 py-6 px-10 rounded-2xl bg-blue-200 font-serif text-blue-900 text-xl shadow-xl">
          <div>
            <div> Name : {user[0].name}</div>
            <div>Position : {user[0].position}</div>
            <div>Salary : {user[0].salary}</div>
          </div>
        </div>
        <Link to="/">
          <div className=" border-2 border-indigo-300 bg-yellow-400 hover:bg-yellow-600 text-yellow-50 my-6 py-2 px-6 rounded-xl font-serif">
            Back To Home
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Read;
