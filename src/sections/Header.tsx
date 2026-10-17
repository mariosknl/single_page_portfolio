import Link from "next/link";

type HeaderProps = {
  skipLinkHref?: string;
};

export const Header = ({ skipLinkHref }: HeaderProps) => {
  return (
    <header className="flex justify-center items-center fixed w-full top-3 z-20">
      {skipLinkHref ? (
        <a className="skip-link" href={skipLinkHref}>
          Skip to content
        </a>
      ) : null}
      <nav
        aria-label="Primary"
        className="flex max-w-[calc(100%-1.5rem)] flex-wrap justify-center gap-1 rounded-full border border-white/15 bg-white/10 p-0.5 backdrop-blur"
      >
        <Link href="/" className="nav-item">
          Home
        </Link>
        <Link className="nav-item" href="/#projects">
          Projects
        </Link>
        <Link className="nav-item" href="/#about">
          About
        </Link>
        <Link
          className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
          href="/#contact"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};
