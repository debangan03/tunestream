import React, { useState } from "react";
import { RiCompassDiscoverLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { PiGooglePodcastsLogoBold } from "react-icons/pi";
import { BiSearch } from "react-icons/bi";

function NavigationBAr() {
  const navigate = useNavigate ();
  const [isclicked, setIsClicked] = useState({
    discover: true,
    search: false,
    profile: false,
    podcast: false,
  });

  const changeroute = (route) => {
    setIsClicked({
      discover: false,
      search: false,
      profile: false,
      podcast: false,
      [route]: true,
    });
    navigate(`/${route=='discover' ?'': route}`)

  };
  return (
    <div className="w-full bg-zinc-900/70   h-16 shadow-inner shadow-zinc-800 flex lg:justify-around justify-between px-6 items-center">
      <RiCompassDiscoverLine
        onClick={() => changeroute("discover")}
        className={`text-3xl  text-${
          isclicked.discover ? "yellow-500" : "zinc-200"
        } `}
      />
      <BiSearch
        onClick={() => changeroute("search")}
        className={`text-3xl  text-${
          isclicked.search ? "yellow-500" : "zinc-200"
        } `}
      />
      <PiGooglePodcastsLogoBold
        onClick={() => changeroute("podcast")}
        className={`text-3xl  text-${
          isclicked.podcast ? "yellow-500" : "zinc-200"
        } `}
      />
      <CgProfile
        onClick={() => changeroute("profile")}
        className={`text-3xl  text-${
          isclicked.profile ? "yellow-500" : "zinc-200"
        } `}
      />
    </div>
  );
}

export default NavigationBAr;
