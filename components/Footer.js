import { ChevronUpIcon } from "@heroicons/react/solid";

function Footer() {
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  };
  return (
    <footer className=" bg-gradient-to-t mt-10 from-gray-500 to-white relative h-[150px] flex justify-center items-center flex-col">
      <div
        onClick={scrollToTop}
        className="h-10 w-10 -top-4 shadow-lg border cursor-pointer hover:scale-105 transition-all duration-500 bg-red-500 hover:bg-white text-white  hover:text-black absolute rounded-full flex items-center justify-center"
      >
        <ChevronUpIcon className="h-8 w-8" />
      </div>
      <div className="md:w-[30%] w-[80%] mt-5 flex justify-around items-center">
        <a className="social-icon" href="#">
          <img src="/img/fb.png" alt="..." />
        </a>
        <a className="social-icon" href="#">
          <img src="/img/git.png" alt="..." />
        </a>
        <a className="social-icon" href="#">
          <img src="/img/yt.png" alt="..." />
        </a>
        <a className="social-icon" href="#">
          <img src="/img/tele.png" alt="..." />
        </a>
        <a className="social-icon " href="#">
          <img src="/img/linkedin.png" alt="..." />
        </a>
      </div>
      <div className="mt-3">
        {" "}
        <small className="text-gray-700 text-[13px] font-medium">Made by</small>
        <strong className="text-gray-300 hover:text-white transition-all duration-500 cursor-pointer text-xs italic">
          {" "}
          THE NOBLE PRIEST
        </strong>{" "}
      </div>
    </footer>
  );
}

export default Footer;
