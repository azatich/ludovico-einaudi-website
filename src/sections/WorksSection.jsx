import { Link } from "react-router-dom";

const WorksSection = () => {
  return (
    <section className="my-4">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-y-8 lg:gap-y-12">
        <Link to='the-summer-portraits-album'>
          <img className="w-[20rem] sm:w-[25rem] md:w-[20rem] cursor-pointer hover:brightness-50 transition-all duration-200" src="/images/works/1.jpg" alt="" />
        </Link>
        <Link to='underwater'>
          <img className="w-[20rem] sm:w-[25rem] md:w-[20rem] cursor-pointer hover:brightness-50 transition-all duration-200" src="/images/works/2.png" alt="" />
        </Link>
        <Link to='seven-days-walking'>
          <img className="w-[20rem] sm:w-[25rem] md:w-[20rem] cursor-pointer hover:brightness-50 transition-all duration-200" src="/images/works/3.png" alt="" />
        </Link>
        <Link to='elements'>
          <img className="w-[20rem] sm:w-[25rem] md:w-[20rem] cursor-pointer hover:brightness-50 transition-all duration-200" src="/images/works/4.png" alt="" />
        </Link>
        <Link to='cinema'>
          <img className="w-[20rem] sm:w-[25rem] md:w-[20rem] cursor-pointer hover:brightness-50 transition-all duration-200" src="/images/works/5.png" alt="" />
        </Link>
        <Link to='undiscovered'>
          <img className="w-[20rem] sm:w-[25rem] md:w-[20rem] cursor-pointer hover:brightness-50 transition-all duration-200" src="/images/works/6.jpeg" alt="" />
        </Link>
      </div>
    </section>
  );
};

export default WorksSection;
