import { NavLink } from "react-router-dom";

export default function Navlinks({ navigation }) {
  return (
    <div className="flex items-center">
      <div className="flex gap-10 hidden md:flex">
        {navigation.map((e) => (
          <NavLink
            to={e.to}
            className={({ isActive }) => {
              return (
                "p-3 flex items-center rounded-lg " +
                (isActive ? "bg-slate-700" : "hover:bg-slate-800")
              );
            }}
          >
            {e.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
