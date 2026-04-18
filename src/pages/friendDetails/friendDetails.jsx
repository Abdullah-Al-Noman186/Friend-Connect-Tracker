import { useLocation, useParams, useNavigate } from "react-router-dom";
import React from "react";
import { MdOutlineSnooze } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { IoMdText } from "react-icons/io";
import { IoVideocamOutline } from "react-icons/io5";

const FriendsDetail = () => {
  const location = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();

  const [friend, setFriend] = React.useState(location.state || null);
  const [loading, setLoading] = React.useState(!location.state);

  React.useEffect(() => {
    if (!location.state) {
      fetch("/friend.json")
        .then((res) => res.json())
        .then((data) => {
          const found = data.find((f) => f.id == id);

          setFriend(found || null);
        })
        .catch((err) => {
          console.error("Failed to load friend data:", err);
          setFriend(null);
        })
        .finally(() => setLoading(false));
    }
  }, [id, location.state]);

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (!friend) {
    return <p className="text-center mt-10 text-red-500">Friend not found</p>;
  }

  const getStatusBg = (status) => {
    if (status === "overdue") return "bg-red-500 text-white";
    if (status === "almost due") return "bg-yellow-300 text-black";
    if (status === "on-track") return "bg-green-600 text-white";
    return "bg-gray-400 text-white";
  };

  const handleAction = (type) => {
  const newEntry = {
    id: Date.now(),
    friendId: friend.id,
    name: friend.name,
    type,
    time: new Date().toLocaleString(),
  };

  const existing = JSON.parse(localStorage.getItem("timeline")) || [];

  localStorage.setItem(
    "timeline",
    JSON.stringify([newEntry, ...existing])
  );
};

  return (
    <div className="flex flex-col  m-auto max-w-4xl gap-6">
      <div className="flex items-center gap-4 mb-10">
        <div>
          <div className="card card-side bg-base-100 shadow-sm p-4 text-center w-80 mx-auto mt-5 ">
            <img src={friend.picture} alt={friend.name} className="h-20 w-20 object-cover rounded-full justify-center" />
          <h2 className="text-2xl font-bold mt-4">{friend.name}</h2>
          <p className={`badge ${getStatusBg(friend.status)} rounded-full mt-3 px-3 py-2 w-30 mx-auto`}
        >{friend.status}</p>
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
          <p>{friend.bio || "No bio available"}</p>
          <p>email: {friend.email}</p>
          </div>
          <div className="card card-side bg-base-100 shadow-sm p-4 text-center w-80 mx-auto mt-4 flex items-center justify-center gap-4">
            <p className="font-bold"> Snooze 2 weeks</p>
          </div>
          <div className="card card-side bg-base-100 shadow-sm p-4 text-center w-80 mx-auto mt-4 flex items-center justify-center gap-4">
            <p className="text-red-500 font-bold"> Delete</p>
          </div>
          <div className="card card-side bg-base-100 shadow-sm p-4 text-center w-80 mx-auto mt-4 flex items-center justify-center gap-4">
            <p className=" font-bold"> Archive</p>
          </div>
        </div>

       <div>
         <div className="flex gap-2 ">
          <div className="px-4 w-auto card card-side bg-base-100 shadow-sm text-center">
            <h3 className="text-xl font-bold mt-10 mb-4 text-center">
               {friend.days_since_contact}
            </h3>
            <p>days since last contact</p>
          </div>
          <div className="px-4 w-auto card card-side bg-base-100 shadow-sm text-center">           
              <h3 className="text-xl font-bold mt-10 mb-4 text-center">
               {friend.goal}
            </h3>
            <p>Goal (Days)</p>            
          </div>
          <div className="card card-side bg-base-100 shadow-sm text-center px-4 w-auto">
            <h3 className="text-xl font-bold mt-10 mb-4 text-center">
              {friend.next_due_date}
            </h3>
            <p>Next Due</p>
          </div>

        </div>

        <div className="card card-side bg-base-100 shadow-sm p-4  w-auto mx-auto mt-4">
          <h3 className="font-black">Relationship Goal</h3>
          <p>Connect every {friend.goal} days</p>
        </div>

        <div className="card card-side bg-base-100 shadow-sm p-4  w-auto mx-auto mt-4">
          <p className="font-semibold">Quick Check-In</p>
          <div className="flex gap-4 mt-2">
            <button  onClick={() => handleAction("call")} className="card card-side bg-base-100 shadow-sm p-4  w-30 mx-auto mt-4 item-center hover:bg-green-200 hover:scale-105 transition"><img src="/images/call.png" alt="call" className="w-6 h-6" />Call</button>
            <button  onClick={() => handleAction("text")} className="card card-side bg-base-100 shadow-sm p-4  w-30 mx-auto mt-4 hover:bg-green-200 hover:scale-105 transition "><img src="/images/text.png" alt="text" className="w-6 h-6" />Text</button>
            <button  onClick={() => handleAction("video")} className="card card-side bg-base-100 shadow-sm p-4  w-30 mx-auto mt-4 hover:bg-green-200 hover:scale-105 transition"><img src="/images/video.png" alt="video" className="w-6 h-6" />Video</button>
          </div>
        </div>


       </div>

      </div>
    </div>
  );
};

export default FriendsDetail;