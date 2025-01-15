import LOGO from "/public/Images/alumni 2.png";

const NavLogo = () => {
  return (
    <div className="flex">
      <img src={LOGO} className="h-12 w-16" alt="Logo" />
      <span className="self-center text-3xl font-semibold whitespace-nowrap text-[#49d5a9] dark:text-white">
      ★彡[ᴀʟᴜᴍɴɪ]彡★
      </span>
    </div>
  );
};

export default NavLogo;
