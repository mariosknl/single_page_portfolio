export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed w-full top-3 z-20">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a href="#" className="nav-item">
          Home
        </a>
        <a className="nav-item" href="#projects">
          Projects
        </a>
        <a className="nav-item" href="#about">
          About
        </a>
        <a
          className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
          href="#contact"
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
