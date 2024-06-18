import React from "react";

const Myaccount = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    bio: "",
    profilePicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZdqPun8pQv5NsxtjeV2ZTDGQy-nkGuTXL3g&s",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-800 to-zinc-950 text-white flex flex-col  justify-center p-4">
      <h1 className="text-zinc-200 mb-10 -mt-40 font-semibold font-sans text-2xl">
        Developer Profile
      </h1>
      <div className="max-w-sm w-full bg-zinc-900 rounded-lg shadow-md p-6">
        <div className="flex items-center justify-center mb-4">
          <img
            className="w-24 h-24 rounded-full object-cover"
            src={user.profilePicture}
            alt="Profile"
          />
        </div>
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold">{`Debangan Bhattacharyya`}</h2>
          <p className="text-gray-400">{`suport@tunestream.com`}</p>
        </div>
        
      </div>
    </div>
  );
};

export default Myaccount;
