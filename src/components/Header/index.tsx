import { ReactNode } from "react";

interface HeaderProps {
  title: string;
  children?: ReactNode;
}

const Header = (props: HeaderProps) => {
  return (
    <>
      <div
        style={{
          padding: "15px",
          backgroundColor: "lightblue",
          color: "white",
        }}
      >
        <div
          style={{ fontSize: "24px", fontWeight: "bold", textAlign: "center" }}
        >
          {props.title}
        </div>
      </div>
      {props.children}
    </>
  );
};

export default Header;
