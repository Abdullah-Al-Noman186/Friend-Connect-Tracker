import React from "react";
import { BsPlus } from "react-icons/bs";
import { Link } from "react-router-dom";



const friendPromise = fetch("/friend.json").then((res) => res.json());

const Homepage = () => {
  const [friends, setFriends] = React.useState([]);

  React.useEffect(() => {
    friendPromise.then((data) => setFriends(data));
  }, []);


  const getStatusBg = (status) => {
    if (status === "overdue") return "bg-red-500 text-white";
    if (status === "almost due") return "bg-yellow-300 text-black";
    if (status === "on-track") return "bg-green-600 text-white";
    return "bg-gray-400 text-white";
  };

  return (
    <div>
      
      <div className="flex flex-col items-center justify-center gap-4 m-10">
        <h2 className="font-bold text-2xl text-center">
          Friends to keep close in your life
        </h2>

        <p className="text-center text-[#64748B] max-w-xl">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <button className="btn bg-[#244D3F] text-white flex rounded-xl p-2">
          <BsPlus className="text-xl" /> Add a Friend
        </button>
      </div>

     
      <div className="flex flex-wrap justify-center items-center gap-6 m-10">
        <div className="card shadow-xl p-4 text-center w-40">
          <p className="font-bold">10</p>
          <h5>Total Friends</h5>
        </div>

        <div className="card shadow-xl p-4 text-center w-40">
          <p className="font-bold">3</p>
          <h5>On Track</h5>
        </div>

        <div className="card shadow-xl p-4 text-center w-40">
          <p className="font-bold">6</p>
          <h5>Need Attention</h5>
        </div>

        <div className="card shadow-xl p-4 text-center w-40">
          <p className="font-bold">12</p>
          <h5>Interactions</h5>
        </div>
      </div>

      
      <div className="mb-10 pb-5 border-b">
        <h3 className="text-xl font-bold text-center mb-6">
          Your Friends
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
  {friends.map((friend) => (
    
    <Link
      key={friend.id}
      to={`/friend/${friend.id}`}
      state={friend}   
      className="card bg-base-100 shadow-xl rounded-xl hover:scale-105 transition cursor-pointer"
    >
      
      <figure className="flex justify-center pt-4">
        <img
          src={friend.picture}
          className="h-40 w-40 object-cover rounded-full"
          alt={friend.name}
        />
      </figure>

      <div className="card-body text-center">
        <h2 className="card-title font-bold text-lg justify-center">
          {friend.name}
        </h2>

        <p className="text-gray-400 text-sm">
          {friend.days_since_contact} days ago
        </p>

        <div className="flex flex-wrap justify-center gap-2 mt-2">
          {friend.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full bg-green-300 text-black text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        <div
          className={`badge ${getStatusBg(friend.status)} rounded-full mt-3 px-3 py-2 w-30 mx-auto`}
        >
          {friend.status}
        </div>
      </div>

    </Link>

  ))}
</div>
      </div>
    </div>
  );
};

export default Homepage;