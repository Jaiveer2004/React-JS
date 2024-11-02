import React from "react";

function Card({username, bio = "Ajja"}) {
  return (
    <a
      href="#"
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-4 mt-4"
    >
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src="https://images.pexels.com/photos/19640832/pexels-photo-19640832/free-photo-of-untitled.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Girl"
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {username}
        </h2>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {bio}
        </p>
      </div>
    </a>
  );
}

export default Card;
