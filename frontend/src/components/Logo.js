import logo from "../images/logo512.png";

export default function Logo() {
  return (
    <div className="flex items-center md:gap-5 gap-3 font-SpaceGrotesk text-2xl">
      <div className="object-cover md:w-10 w-8">
        <img src={logo} alt="logo" />
      </div>
      <div>Within</div>
    </div>
  );
}
