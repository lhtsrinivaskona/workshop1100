import React from "react";

const LoginPage = (params) => {
  // const history = useHistory();
  const { history } = params;

  const submitHandler = (event) => {
    event.preventDefault();
    history.replace("/main");
    window.location.reload();
  };

  return (
    <div className="bg-grey-50 h-screen bg-cover flex justify-center items-center drop-shadow-loginform">
      <form
        className="bg-white w-125 h-133.5 flex flex-col items-center rounded-sm xs:w-80"
        onSubmit={submitHandler}
      >
        <img
          src="/images/loginpageLogo.svg"
          alt="loginpageLogo"
          className="w-42 h-7.5 mt-12.5"
        />
        <h1 className="mt-7.5 font-OpenSansSemiBold text-ft20">
          Login with nft ticketing
        </h1>
        <input
          type="email"
          placeholder="Email Address"
          className="bg-grey-100 mt-10 w-115 h-15 xs:w-72 rounded-sm pl-5 text-black-100 text-ft16 font-OpenSansRegular"
        />
        <input
          type="password"
          placeholder="Password"
          className="bg-grey-100 mt-15px w-115 h-15 xs:w-72 rounded-sm pl-5 text-black-100 text-ft16 font-OpenSansRegular"
        />
        <div className="flex items-center self-start pl-5 mt-31px h-5 text-black-100 text-ft16">
          <input
            type="checkbox"
            name="remember"
            className=" rounded-xsm border border-grey-150 w-5 h-5 mr-2.5"
          />
          Remember
        </div>
        <button
          type="submit"
          className="mt-12.5 hover:bg-blue-100 text-white bg-grey-150 w-115 h-17.5 xs:w-72 rounded-md text-ft16 font-OpenSansSemiBold"
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
