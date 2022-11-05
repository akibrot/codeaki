const Logout = ({ selected }) => {
  return (
    <div
      className={
        selected == 4
          ? "relative left-[20%] bg-red-900 h-full w-[80%]"
          : "hidden"
      }
    >
      Logout page
    </div>
  );
};
export default Logout;
