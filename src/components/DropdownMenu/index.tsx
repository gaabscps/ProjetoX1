import Image from "next/image";
import arrowCard from "@/assets/svg/arrowCard.svg";

interface DropdownMenuProps {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  open?: boolean;
  tabs: {
    icon: string;
    content: string;
    onClick?: () => void;
  }[];
}

export default function DropdownMenu({
  top,
  left,
  right,
  bottom,
  open,
  tabs,
}: DropdownMenuProps) {
  return (
    <div
      style={{
        top: top,
        left: left,
        right: right,
        bottom: bottom,
      }}
      className={`dorpdown-menu-container ${
        open ? "dropdown-open" : "dropdown-closed"
      }`}
    >
      {tabs.map((item, index) => (
        <div
          onClick={item.onClick}
          key={index}
          className="dropdown-menu-content d-flex align-items-center justify-content-between"
        >
          <div className="d-flex align-items-center">
            <Image
              style={{ marginRight: "8px" }}
              src={item.icon}
              alt="edit icon"
            />
            {item.content}
          </div>
          <div>
            <Image
              className="dropdown-menu-arrow"
              src={arrowCard}
              alt="arrow"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
