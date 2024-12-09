import HomeNote from "../components/note/HomeNote";

export default function Home() {
  return (
    <div>
      <div className="flex items-center">
        <div className="text-white font-Outfit text-2xl mr-3">notes</div>
        <div className="flex-grow border-b border-dotted border-white"></div>
      </div>
      <HomeNote />
    </div>
  );
}
