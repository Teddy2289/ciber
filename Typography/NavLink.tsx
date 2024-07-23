import Link from "next/link";

export const NavLink = ({
  href,
  children,
  classname,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  classname?: string;
  onClick?: () => void;
}) => {
  return (
    <Link
      onClick={onClick}
      href={href}
      className={`capitalize font-normal duration-100 text-black hover:text-secondary text-base leading-[24px] w-fit relative after:content-[''] after:absolute after:bottom-[-1px] after:block after:w-0 after:bg-secondary after:h-[1px] hover:after:w-full transition-all ease-in-out after:transition-all after:ease-in-out after:duration-200 ${classname}`}>
      {children}
    </Link>
  );
};
