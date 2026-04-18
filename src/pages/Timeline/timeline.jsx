import React from "react";

const Timeline = () => {
  const [history, setHistory] = React.useState([]);
  const [search, setSearch] = React.useState("");

  React.useEffect(() => {
    const data = JSON.parse(localStorage.getItem("timeline")) || [];
    setHistory(data);
  }, []);

  const getIcon = (type) => {
    if (type === "call") return "/images/call.png";
    if (type === "text") return "/images/text.png";
    if (type === "video") return "/images/video.png";
    return "/images/default.png";
  };

  
  const filteredData = history.filter((item) => {
    return (
      item.type.toLowerCase().includes(search.toLowerCase()) ||
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="w-auto mx-30 mt-10">

      <h1 className="text-2xl font-bold mb-6">
        Timeline
      </h1>

      
      <div className="flex  mb-6 border-b-black">
        <input
          type="text"
          placeholder="Search call, text, video or name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input input-bordered w-80"
        />
      </div>

      
      {filteredData.length === 0 ? (
        <p className="text-center">No activity found</p>
      ) : (
        filteredData.map((item) => (
          <div
            key={item.id}
            className="card bg-base-100 shadow p-4 mb-3 flex items-center gap-4"
          >
            <img
              src={getIcon(item.type)}
              alt={item.type}
              className="w-8 h-8"
            />

            <div>
              <p>
                <b>{item.type}</b> with <b>{item.name}</b>
              </p>
              <p className="text-sm text-gray-500">{item.time}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Timeline;