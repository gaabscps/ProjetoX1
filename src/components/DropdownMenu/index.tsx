import Image from "next/image";
import arrowCard from "@/assets/svg/arrowCard.svg";

interface DropdownMenuProps {
  header?: string | JSX.Element;
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  width?: string;
  background?: string;
  open?: boolean;
  list?: boolean;
  tabs: {
    icon?: string;
    content: string | JSX.Element;
    onClick?: () => void;
  }[];
}

export default function DropdownMenu({
  header,
  top,
  left,
  right,
  bottom,
  width,
  background = "rgba(255, 255, 255, 0.05)",
  open,
  list = true,
  tabs,
}: DropdownMenuProps) {
  return (
    <div
      style={{
        top: top,
        left: left,
        right: right,
        bottom: bottom,
        width: width,
        backgroundColor: background,
      }}
      className={`dorpdown-menu-container ${
        open ? "dropdown-open" : "dropdown-closed"
      }`}
    >
      {header && (
        <div className="d-flex align-items-center w-100">{header}</div>
      )}
      {!list && (
        <hr
          className="h-100 w-100"
          style={{ borderBottom: "1.5px solid #525054" }}
        />
      )}
      <div
        className="dropdown-item-content"
        style={{ maxHeight: "220px", overflow: "auto" }}
      >
        {tabs.map((item, index) => (
          <>
            <div
              onClick={item.onClick}
              key={index}
              className="dropdown-menu-content d-flex align-items-center justify-content-between"
            >
              <div className="d-flex align-items-center w-100">
                {item.icon && (
                  <Image
                    style={{ marginRight: "8px" }}
                    src={item.icon}
                    alt="edit icon"
                  />
                )}
                {item.content}
              </div>
              {list && (
                <div>
                  <Image
                    className="dropdown-menu-arrow"
                    src={arrowCard}
                    alt="arrow"
                  />
                </div>
              )}
            </div>
            {!list && index !== tabs.length - 1 && (
              <hr
                className="h-100 w-100"
                style={{ borderBottom: "1.5px solid #525054" }}
              />
            )}
          </>
        ))}
      </div>
    </div>
  );
}
