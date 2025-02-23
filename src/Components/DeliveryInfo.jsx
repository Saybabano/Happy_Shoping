import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const DeliveryInfo = () => {
  const [address, setAddress] = useState("B62, Pocket B, South City I, Sect...");

  return (
    <div className="text-black">
      <p className="font-bold text-lg">Delivery in <span className="text-black">8 minutes</span></p>
      <div className="flex items-center gap-1 text-gray-600">
        <span className="truncate w-40">{address}</span>
        <KeyboardArrowDownIcon />
      </div>
    </div>
  );
};

export default DeliveryInfo;
