import bg from "../assets/netflix.jpg";
import SavedMovies from "../component/SavedMovies";

const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        <img
          src={bg}
          alt="/"
          className="h-[400px] w-full object-cover"
        />

        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">My Shows</h1>
        </div>
      </div>
      <SavedMovies />
    </>
  );
};

export default Account;
