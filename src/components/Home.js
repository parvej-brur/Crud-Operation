import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { OwnContext } from "./OwnContext";

const Home = () => {
  const [users, setUsers] = useContext(OwnContext);
  console.log(users);
  return (
    <div className=" mx-11 mt-10 dark:bg-gray-800">
      <div className="table w-full p-2">
        <div>
          <Link to="/create">
            <button className="bg-gray-600 hover:bg-gray-700 text-gray-50 font-bold py-3 px-8 rounded-full w-auto ">
              Create
            </button>
          </Link>
        </div>
        <table className="w-full border my-10">
          <thead className="">
            <tr className="bg-gray-50 border border-gray-500">
              <th className="p-2 border-r border-gray-500 cursor-pointer  text-gray-900 font-serif font-bold text-xl bg-gray-400">
                <div className="flex items-center justify-center">ID</div>
              </th>
              <th className="p-2 border-r border-gray-500 cursor-pointer  text-gray-900 font-serif font-bold text-xl bg-gray-400">
                <div className="flex items-center justify-center">Name</div>
              </th>
              <th className="p-2 border-r border-gray-500 cursor-pointer  text-gray-900 font-serif font-bold text-xl bg-gray-400">
                <div className="flex items-center justify-center">Position</div>
              </th>
              <th className="p-2 border-r border-gray-500 cursor-pointer  text-gray-900 font-serif font-bold text-xl bg-gray-400">
                <div className="flex items-center justify-center">Salary</div>
              </th>
              <th className="p-2 border-r border-gray-500 cursor-pointer  text-gray-900 font-serif font-bold text-xl bg-gray-400">
                <div className="flex items-center justify-center">Action</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user.id} className="bg-gray-50 border border-gray-500">
                  <th className="p-2 border-r border-gray-500 cursor-pointer  text-gray-900 font-serif font-semibold capitalize text-lg bg-blue-100">
                    <div className="flex items-center justify-center">
                      {user.id}
                    </div>
                  </th>
                  <th className="p-2 border-r border-gray-500 cursor-pointer  text-gray-900 font-serif font-semibold capitalize text-lg bg-blue-100">
                    <div className="flex items-center justify-center">
                      {user.name}
                    </div>
                  </th>
                  <th className="p-2 border-r border-gray-500 cursor-pointer  text-gray-900 font-serif font-semibold capitalize text-lg bg-blue-100">
                    <div className="flex items-center justify-center">
                      {user.position}
                    </div>
                  </th>
                  <th className="p-2 border-r border-gray-500 cursor-pointer  text-gray-900 font-serif font-semibold capitalize text-lg bg-blue-100">
                    <div className="flex items-center justify-center">
                      {user.salary}
                    </div>
                  </th>
                  <th className="p-2 border-r border-gray-500 cursor-pointer  text-gray-900 font-serif font-semibold capitalize text-lg bg-blue-100">
                    <div className="flex items-center justify-center">
                      <Link to={"/read/" + user.id}>
                        <button className="bg-green-600 hover:bg-green-700  text-green-50 font-bold py-1 px-4 rounded-full w-auto  text-sm">
                          Read
                        </button>
                      </Link>
                      <Link to={`/edit/${user.id}`}>
                        <button className="bg-yellow-600 hover:bg-yellow-700 text-yellow-50 ml-2 font-bold py-1 px-4 rounded-full w-auto  text-sm">
                          Edit
                        </button>
                      </Link>
                      <Link to={`/delete/${user.id}`}>
                        <button className="bg-red-700 hover:bg-red-800 text-red-50 ml-2 font-bold py-1 px-4 rounded-full w-auto  text-sm">
                          Delete
                        </button>
                      </Link>
                    </div>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
