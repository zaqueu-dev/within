import { NavLink } from "react-router-dom";

export default function NavlinksModal({ navigation, toggleIsOpened }) {
  return (
    <div className="flex flex-col text-white text-2xl gap-5 pointer-events-auto">
      {navigation.map((e) => (
        <NavLink
          to={e.to}
          onClick={toggleIsOpened}
          className={({ isActive }) => {
            return (
              "p-2 flex items-center justify-center w-56 " +
              (isActive ? "border-b-2 border-t-2 bg-gray-800" : "")
            );
          }}
        >
          {e.name}
        </NavLink>
      ))}
    </div>
  );
}
