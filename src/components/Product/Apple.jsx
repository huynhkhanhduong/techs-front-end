import Navbar from "../Navbar"
import Advertisement from "./advertisement"
import PhoneSeri from "./PhoneSeri"
import ShowApple from "./ShowApple"
import SortBy from "./SortBy"

function Apple() {

  return (
    <div className="pl-10 pr-10">
        <Navbar/>
        <div className="flex flex-row gap-3">
        <Advertisement/>
        <Advertisement/>
        </div>
        <PhoneSeri/>
        <SortBy/>
        <ShowApple/>
    </div>
  )
}

export default Apple