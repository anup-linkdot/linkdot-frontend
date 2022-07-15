import { useEffect, useRef, useState } from "react";
import Settings from "../../assets/images/Settings.png";
import listenForOutsideClick from "../../utils/listen-for-outside-click";

const DropDown = ({ disconnect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [listening, setListening] = useState(false);
  const menuRef = useRef(null);

  useEffect(listenForOutsideClick(listening, setListening, menuRef, setIsOpen));
  return (
    <div className="settings-dropdown-div" ref={menuRef}>
      <img alt="" src={Settings} onClick={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <div className="settings-dropdown">
          <div className="dropdown-div" onClick={() => disconnect()}>
            <p>Disconnect</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
