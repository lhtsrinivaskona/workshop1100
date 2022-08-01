import React from "react";

const WhiteList = () => {
  return (
    <div className="bg-grey-200 bg-cover h-screen px-12.5 pt-14.5">
      <h1 className="text-black-50 font-OpenSansSemiBold text-ft22">
        Whitelist
      </h1>
      <div className="mt-45px flex justify-between">
        <div className="flex items-center justify-between bg-white border border-white rounded-lsm xs:w-auto xs:mr-5 w-75 h-45px px-5">
          <input type="text" placeholder="Search" className=" outline-none" />
          <img
            src="/images/searchIcon.svg"
            alt="searchIcon"
            className="w-4 h-17px"
          />
        </div>
        <div className="bg-blue-100 flex justify-center items-center xs:w-auto xs:h-auto xs:rounded-xsm xs:p-1 w-37.5 h-12.5 rounded-lsm text-white font-OpenSansSemiBold text-ft14 gap-2.5">
          <h1>+</h1>
          <button type="submit">Add User</button>
        </div>
      </div>
      <div className="bg-white rounded-sm drop-shadow-loginform max-w-1600 min-w-300 py-15px mt-7.5 overflow-scroll scrollbar">
        <table className="table min-w-full whitespace-nowrap justify-center ">
          <thead className="border-b border-grey-50 bg-white sticky top-0">
            <tr className="flex px-5">
              <th className="flex items-center font-OpenSansSemiBold text-black-50 w-40per">
                Name
                <img
                  src="/images/shortIcon.png"
                  alt="shortIcon"
                  className="w-9px h-13px ml-2.5"
                />
              </th>
              <th className="flex items-center font-OpenSansSemiBold text-black-50 w-40per">
                Email Address
                <img
                  src="/images/shortIcon.png"
                  alt="shortIcon"
                  className="w-9px h-13px ml-2.5"
                />
              </th>
              <th className="flex items-center font-OpenSansSemiBold text-black-50 w-40per">
                Mobile Number
                <img
                  src="/images/shortIcon.png"
                  alt="shortIcon"
                  className="w-9px h-13px ml-2.5"
                />
              </th>
              <th className="flex items-center font-OpenSansSemiBold text-black-50 w-40per">
                Features
                <img
                  src="/images/shortIcon.png"
                  alt="shortIcon"
                  className="w-9px h-13px ml-2.5"
                />
              </th>
              <th className="flex items-center font-OpenSansSemiBold text-black-50 w-40per">
                Action
                <img
                  src="/images/shortIcon.png"
                  alt="shortIcon"
                  className="w-9px h-13px ml-2.5"
                />
              </th>
            </tr>
          </thead>
          <tbody className="items-center">
            <tr className="border-b border-grey-50 flex px-5">
              <td className="w-40per py-5 pr-5 font-OpenSansRegular text-black-50 text-ft14 truncate">
                John Doe
              </td>
              <td className="w-40per py-5 pr-5 font-OpenSansRegular text-black-50 text-ft14">
                Johndoe@gmail.com
              </td>
              <td className="w-40per py-5 pr-5 font-OpenSansRegular text-black-50 text-ft14">
                09958693963
              </td>
              <td className="w-40per py-5 pr-5 font-OpenSansRegular text-black-50 text-ft14">
                Community, Homepage
              </td>
              <td className="w-40per py-5 pr-5 font-OpenSansRegular text-black-50 text-ft14">
                <img src="/images/action.png" alt="actionLogo" />
              </td>
            </tr>
            <tr className="border-b border-grey-50 flex px-5">
              <td className="w-40per py-5 pr-5 font-OpenSansRegular text-black-50 text-ft14 truncate">
                Juan Dela Cruz
              </td>
              <td className="w-40per py-5 pr-5 font-OpenSansRegular text-black-50 text-ft14">
                Jdelacruz@gmail.com
              </td>
              <td className="w-40per py-5 pr-5 font-OpenSansRegular text-black-50 text-ft14">
                09958693963
              </td>
              <td className="w-40per py-5 pr-5 font-OpenSansRegular text-black-50 text-ft14">
                Community, Homepage
              </td>
              <td className="w-40per py-5 pr-5 font-OpenSansRegular text-black-50 text-ft14">
                <img src="/images/action.png" alt="actionLogo" />
              </td>
            </tr>
            <tr className="border-b border-grey-50 flex px-5">
              <td className="w-40per py-5 pr-5 font-OpenSansRegular text-black-50 text-ft14 truncate">
                Maine Jaspeih
              </td>
              <td className="w-40per py-5 pr-5 font-OpenSansRegular text-black-50 text-ft14">
                Mainejaspeih@gmail.com
              </td>
              <td className="w-40per py-5 pr-5 font-OpenSansRegular text-black-50 text-ft14">
                09958693963
              </td>
              <td className="w-40per py-5 pr-5 font-OpenSansRegular text-black-50 text-ft14">
                Community, Homepage
              </td>
              <td className="w-40per py-5 pr-5 font-OpenSansRegular text-black-50 text-ft14">
                <img src="/images/action.png" alt="actionLogo" />
              </td>
            </tr>
            <tr className="border-b border-grey-50 flex px-5">
              <td className="w-40per py-5 pr-5 font-OpenSansRegular text-black-50 text-ft14 truncate">
                Melanie moore
              </td>
              <td className="w-40per py-5 pr-5 font-OpenSansRegular text-black-50 text-ft14">
                Melaniemoore@gmail.com
              </td>
              <td className="w-40per py-5 pr-5 font-OpenSansRegular text-black-50 text-ft14">
                09958693963
              </td>
              <td className="w-40per py-5 pr-5 font-OpenSansRegular text-black-50 text-ft14">
                Community, Homepage
              </td>
              <td className="w-40per py-5 pr-5 font-OpenSansRegular text-black-50 text-ft14">
                <img src="/images/action.png" alt="actionLogo" />
              </td>
            </tr>
            <tr className="border-b border-grey-50 flex px-5 ">
              <td className="w-40per py-5 pr-5 font-OpenSansRegular text-black-50 text-ft14 truncate">
                Olivia Wharton
              </td>
              <td className="w-40per py-5 pr-5 font-OpenSansRegular text-black-50 text-ft14">
                Oliviawharton@gmail.com
              </td>
              <td className="w-40per py-5 pr-5 font-OpenSansRegular text-black-50 text-ft14">
                09958693963
              </td>
              <td className="w-40per py-5 pr-5 font-OpenSansRegular text-black-50 text-ft14">
                Community, Homepage
              </td>
              <td className="w-40per py-5 pr-5 font-OpenSansRegular text-black-50 text-ft14">
                <img src="/images/action.png" alt="actionLogo" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-12.5 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-ft14 font-OpenSansRegular text-grey-150">
            Show <span className="text-black-50">1</span> to
            <span className="text-black-50 ml-1 font-OpenSansSemiBold">5</span>
            of
            <span className="text-black-50 ml-1 font-OpenSansSemiBold">50</span>
          </h1>
          <div className="flex justify-center items-center w-13.5 h-9.5 xs:ml-1 sm:ml-1 ml-5 bg-white gap-2 text-ft14 font-OpenSansSemiBold">
            <h1>5</h1>
            <img src="/images/arrow.png" alt="arrow" className="w-2 h-2" />
          </div>
        </div>
        <div className="flex gap-4 items-center bg-white h-9.5">
          <img
            src="/images/leftArrow.png"
            alt="leftArrow"
            className="h-6 w-6 px-1 py-1 border-r-2 border-grey-150"
          />
          <h1>1</h1>
          <h1>2</h1>
          <h1>3</h1>
          <img
            src="/images/rightArrow.png"
            alt="rightArrow"
            className="h-6 w-6 px-1 py-1 border-l-2 border-grey-150"
          />
        </div>
      </div>
    </div>
  );
};

export default WhiteList;
