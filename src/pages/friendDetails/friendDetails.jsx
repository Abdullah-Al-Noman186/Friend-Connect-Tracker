import { useLocation, useParams } from "react-router-dom";
import React from "react";
import { toast } from "react-toastify";

const FriendsDetail = () => {
  const location = useLocation();
  const { id } = useParams();

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
        .finally(() => setLoading(false));
    }
  }, [id, location.state]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!friend)
    return <p className="text-center mt-10 text-red-500">Friend not found</p>;

  
  const handleAction = (type) => {
    const newEntry = {
      id: Date.now(),
      name: friend.name,
      type,
      time: new Date().toLocaleString(),
    };

    const existing = JSON.parse(localStorage.getItem("timeline")) || [];

    localStorage.setItem(
      "timeline",
      JSON.stringify([newEntry, ...existing])
    );

    
    if (type === "call") {
      toast.success(`📞 Called ${friend.name}`);
    } else if (type === "text") {
      toast.info(`💬 Texted ${friend.name}`);
    } else if (type === "video") {
      toast.warning(`🎥 Video call with ${friend.name}`);
    }
  };

  return (
    <div className="flex flex-col m-auto max-w-4xl gap-6">

      {/* PROFILE */}
      <div className="card bg-base-100 shadow-sm p-4 text-center w-80 mx-auto mt-5">
        <img
          src={friend.picture}
          alt={friend.name}
          className="h-20 w-20 object-cover rounded-full mx-auto"
        />
        <h2 className="text-2xl font-bold mt-4">{friend.name}</h2>
        <p>{friend.email}</p>
      </div>

      {/* QUICK ACTIONS */}
      <div className="card bg-base-100 shadow-sm p-4 w-auto mx-auto mt-4">
        <p className="font-semibold">Quick Check-In</p>

        <div className="flex gap-4 mt-2">

          <button
            onClick={() => handleAction("call")}
            className="flex items-center gap-2 card bg-base-100 shadow-sm p-4 w-30 hover:bg-green-200 hover:scale-105 transition"
          >
            <img src="/images/call.png" className="w-6 h-6" />
            Call
          </button>

          <button
            onClick={() => handleAction("text")}
            className="flex items-center gap-2 card bg-base-100 shadow-sm p-4 w-30 hover:bg-blue-200 hover:scale-105 transition"
          >
            <img src="/images/text.png" className="w-6 h-6" />
            Text
          </button>

          <button
            onClick={() => handleAction("video")}
            className="flex items-center gap-2 card bg-base-100 shadow-sm p-4 w-30 hover:bg-purple-200 hover:scale-105 transition"
          >
            <img src="/images/video.png" className="w-6 h-6" />
            Video
          </button>

        </div>
      </div>

    </div>
  );
};

export default FriendsDetail;