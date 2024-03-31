import IsRandom from "./src/components/isRandom";
import LanguageSelector from "./src/components/languageSelector";
import Refresh from "./src/components/refresh";

export default function Home() {
  return (
    <>
      <div className="navbar bg-base-100 text-white py-4 px-6 justify-between">
        <div>Touch Typr</div>
        <div>
          <LanguageSelector />
          <IsRandom />
          <Refresh />
        </div>
      </div>
      <div className="container mx-auto mt-8 flex justify-center items-center h-screen">
        <div className="bg-white shadow-md rounded-lg p-8 w-3/4 h-1/2 overflow-auto">
          <textarea className="w-full h-full"></textarea>
        </div>
      </div>
    </>
  );
}
