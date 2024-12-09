import Logo from "../components/Logo";
import Navlinks from "../components/Navlinks";
import { useState } from "react";
import NavlinksModal from "../components/NavlinksModal";
import BurgerMenu from "../components/BurgerMenu";

export default function Header(p) {
  const [isOpened, setIsOpened] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  function toggleIsOpened() {
    if (isPressed) return;

    setIsPressed(true);
    setIsOpened(!isOpened);

    setTimeout(() => {
      setIsPressed(false);
    }, 200);
  }

  const navigation = [
    { name: "Home", to: "/" },
    { name: "Page1", to: "/page1" },
    { name: "Page2", to: "/page2" },
    { name: "Page3", to: "/page3" },
  ];

  return (
    <>
      <header className="flex fixed z-0 bg-gray-900 text-white h-16 items-center justify-between w-screen md:px-36 px-5 py-10 text-2xl select-none">
        <Logo />
        <Navlinks navigation={navigation} />
      </header>

      {/* opacity behind the modal */}
      <div className="fixed inset-0 z-50 w-screen h-screen pointer-events-none">
        <div
          className={`w-screen h-screen pointer-events-none fixed transition ease-in ${
            isOpened ? "opacity-80 bg-black" : ""
          }`}
        ></div>

        {/* blue modal */}
        <div
          className={`h-screen fixed w-2/3 bg-gray-900 transition ease-in  ${
            isOpened ? "translate-x-0" : "-translate-x-full"
          } flex flex-col items-center justify-start pt-20`}
        >
          <NavlinksModal
            navigation={navigation}
            toggleIsOpened={toggleIsOpened}
          />
        </div>
        <div className="fixed right-6 text-white top-6 pointer-events-auto md:hidden items-center">
          <button onClick={toggleIsOpened}>
            <BurgerMenu isOpened={isOpened} />
          </button>
        </div>
      </div>
      {/* children */}
      <div className="pt-24 px-10 md:px-40">{p.children}</div>
    </>
  );
}
