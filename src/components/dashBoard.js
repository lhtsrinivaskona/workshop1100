import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const DashBoard = () => {
  return (
    <div className="pl-12.5 xs:px-2 bg-grey-200 min-h-screen bg-cover">
      <div className="pt-12.5 xs:pt-8 text-black-50 text-ft22 font-OpenSansSemiBold flex items-center justify-between">
        <h1>DashBoard</h1>
        <img
          src="/images/filter.svg"
          alt="filter"
          className="w-5 h-5 block xl:hidden 2xl:hidden 3xl:hidden 4xl:hidden"
        />
        <div className="hidden xl:flex 2xl:flex 3xl:flex 4xl:flex mr-12.5 2xl:mr-5 xl:mr-0">
          <div className="flex items-center bg-white h-45px w-171px xl:w-32 rounded-xsm border border-grey-300 mr-15px xl:mr-2">
            <h1 className="mr-13 xl:mr-5 ml-5 text-ft14 font-OpenSansRegular">
              Event Type
            </h1>
            <img src="/images/arrow.png" alt="arrow" className="h-1 w-2" />
          </div>
          <div className="flex items-center bg-white h-45px w-171px xl:w-32 rounded-xsm border border-grey-300 mr-15px xl:mr-2">
            <h1 className="mr-13 xl:mr-5 ml-5 text-ft14 font-OpenSansRegular">
              Published
            </h1>
            <img src="/images/arrow.png" alt="arrow" className="h-1 w-2" />
          </div>
          <div className="flex items-center bg-white h-45px w-171px xl:w-32 rounded-xsm border border-grey-300 mr-15px xl:mr-2">
            <h1 className="mr-13 xl:mr-5 ml-5 text-ft14 font-OpenSansRegular">
              All Time
            </h1>
            <img src="/images/arrow.png" alt="arrow" className="h-1 w-2" />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-centerxl:justify-center 2xl:justify-center mt-10">
        <div className="flex 2xl:flex-col xl:flex-col lg:flex-col md:flex-col flex-wrap items-center py-45px px-5 md:px-1 2xl:px-1 mt-5 mr-7 w-full max-w-115 min-w-60 rounded-sm bg-white">
          <img
            src="/images/revenueIcon.png"
            alt="revenueIcon"
            className="h-17.5 w-17.5 2xl:mb-2 xl:mb-2"
          />
          <div className="flex flex-col ml-7.5 md:ml-0">
            <h1 className="text-black-50 text-ft18 font-OpenSansRegular mb-1.5">
              Revenue
            </h1>
            <h1 className="text-ft24 text-blue-100 font-OpenSansSemiBold">
              $400,642
            </h1>
          </div>
        </div>
        <div className="flex 2xl:flex-col xl:flex-col lg:flex-col md:flex-col flex-wrap items-center py-45px px-5 md:px-1 2xl:px-1 mt-5 mr-7 w-full max-w-115 min-w-60 rounded-sm bg-white">
          <img
            src="/images/personsIcon.png"
            alt="personsIcon"
            className="h-17.5 w-17.5 2xl:mb-2 xl:mb-2"
          />
          <div className="flex flex-col ml-7.5">
            <h1 className="text-black-50 text-ft18 font-OpenSansRegular mb-1.5">
              Total Attendees
            </h1>
            <h1 className="text-ft24 text-black-50 font-OpenSansSemiBold">
              2,000
            </h1>
          </div>
        </div>
        <div className="flex 2xl:flex-col xl:flex-col lg:flex-col md:flex-col flex-wrap items-center py-45px px-5 md:px-1 2xl:px-1 mt-5 mr-7 w-full max-w-115 min-w-60 rounded-sm bg-white">
          <img
            src="/images/ticketsSold.png"
            alt="ticketsIcon"
            className="h-17.5 w-17.5 2xl:mb-2 xl:mb-2"
          />
          <div className="flex flex-col ml-7.5">
            <h1 className="text-black-50 text-ft18 font-OpenSansRegular mb-1.5">
              Ticket Sold
            </h1>
            <h1 className="text-ft24 text-black-50 font-OpenSansSemiBold">
              2,023
            </h1>
          </div>
        </div>
      </div>
      <div className="mt-12.5 flex flex-col 4xl:flex-row">
        <div className="4xl:w-1/2 4xl:mr-2.5">
          <h1 className="font-OpenSansSemiBold text-ft18 text-black-50">
            Splits per contributors
          </h1>
          <div className="mt-10 flex items-center bg-white bg-cover min-w-full rounded-sm drop-shadow-loginform overflow-scroll scrollbar">
            <Chart />
            <div>
              <div>
                <div className="flex items-center gap-1">
                  <div className="w-2.5 h-2.5 bg-blue-100 rounded-xsm"></div>
                  <h1 className="text-grey-150 font-OpenSansRegular text-ft10">
                    Organizer
                  </h1>
                </div>
                <div className="mt-2.5">
                  <h1 className="text-ft16 font-OpenSansSemiBold text-black-50">
                    $200,321
                  </h1>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 mt-5">
                  <div className="w-2.5 h-2.5 bg-grey-150 rounded-xsm"></div>
                  <h1 className="text-grey-150 font-OpenSansRegular text-ft10">
                    Artist
                  </h1>
                </div>
                <div className="mt-2.5">
                  <h1 className="text-ft16 font-OpenSansSemiBold text-black-50">
                    $120,192
                  </h1>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 mt-5">
                  <div className="w-2.5 h-2.5 bg-black-100 rounded-xsm"></div>
                  <h1 className="text-grey-150 font-OpenSansRegular text-ft10">
                    Promoter
                  </h1>
                </div>
                <div className="mt-2.5">
                  <h1 className="text-ft16 font-OpenSansSemiBold text-black-50">
                    $80,092
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="4xl:w-1/2 overflow-scroll scrollbar">
          <h1 className="font-OpenSansSemiBold text-ft18 text-black-50">
            Sales by Event
          </h1>
          <div className="mt-10 bg-white h-100 p-5 rounded-sm">
            <table className="table min-w-full whitespace-nowrap ">
              <thead className="border-b border-grey-50 bg-white sticky top-0">
                <tr className="flex">
                  <th className="flex items-center font-OpenSansSemiBold text-black-50 w-40per">
                    Event Name
                    <img
                      src="/images/shortIcon.png"
                      alt="shortIcon"
                      className="w-9px h-13px ml-2.5"
                    />
                  </th>
                  <th className="flex items-center font-OpenSansSemiBold text-black-50 w-40per">
                    Ticket Sold
                    <img
                      src="/images/shortIcon.png"
                      alt="shortIcon"
                      className="w-9px h-13px ml-2.5"
                    />
                  </th>
                  <th className="flex items-center font-OpenSansSemiBold text-black-50 w-40per">
                    Revenue
                    <img
                      src="/images/shortIcon.png"
                      alt="shortIcon"
                      className="w-9px h-13px ml-2.5"
                    />
                  </th>
                </tr>
              </thead>
              <tbody className="items-center">
                <tr className="border-b border-grey-50 flex">
                  <td className="w-40per py-5 pr-5 font-OpenSansRegular text-black-50 text-ft14 truncate">
                    Hard Summer Music Festival
                  </td>
                  <td className="w-40per py-5 pr-5 font-OpenSansRegular text-black-50 text-ft14">
                    250/500
                  </td>
                  <td className="w-40per py-5 pr-5 font-OpenSansRegular text-black-50 text-ft14">
                    $200,321
                  </td>
                </tr>
                <tr className="border-b border-grey-50 flex">
                  <td className="w-40per py-5 pr-5 font-OpenSansRegular text-black-50 text-ft14 truncate">
                    When we were you
                  </td>
                  <td className="w-40per py-5 pr-5 font-OpenSansRegular text-black-50 text-ft14">
                    370/500
                  </td>
                  <td className="w-40per py-5 pr-5 font-OpenSansRegular text-black-50 text-ft14">
                    $120,192
                  </td>
                </tr>
                <tr className="border-b border-grey-50 flex">
                  <td className="w-40per py-5 pr-5 font-OpenSansRegular text-black-50 text-ft14 truncate">
                    Buku 2022
                  </td>
                  <td className="w-40per py-5 pr-5 font-OpenSansRegular text-black-50 text-ft14">
                    400/500
                  </td>
                  <td className="w-40per py-5 pr-5 font-OpenSansRegular text-black-50 text-ft14">
                    $80,092
                  </td>
                </tr>
                <tr className="border-b border-grey-50 flex">
                  <td className="w-40per py-5 pr-5 font-OpenSansRegular text-black-50 text-ft14 truncate">
                    Coachella 2022
                  </td>
                  <td className="w-40per py-5 pr-5 font-OpenSansRegular text-black-50 text-ft14">
                    189/500
                  </td>
                  <td className="w-40per py-5 pr-5 font-OpenSansRegular text-black-50 text-ft14">
                    $20,095
                  </td>
                </tr>
                <tr className="border-b border-grey-50 flex">
                  <td className="w-40per py-5 pr-5 font-OpenSansRegular text-black-50 text-ft14 truncate">
                    Lovers and Friends
                  </td>
                  <td className="w-40per py-5 pr-5 font-OpenSansRegular text-black-50 text-ft14">
                    50/500
                  </td>
                  <td className="w-40per py-5 pr-5 font-OpenSansRegular text-black-50 text-ft14">
                    $10,244
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    count: 120192,
    contributors: "Artist",
  },
  {
    count: 80092,
    contributors: "Promoter",
  },
  {
    count: 200321,
    contributors: "Organizer",
  },
];

function Chart() {
  return (
    <ResponsiveContainer width={400} height={400}>
      <PieChart>
        <Pie
          cx="50%"
          cy="50%"
          data={data}
          startAngle={90}
          endAngle={450}
          innerRadius="40%"
          outerRadius="70%"
          dataKey="count"
        >
          <Cell name="Artist" fill="#949CAE" />
          <Cell name="Promoter" fill="#525272" />
          <Cell name="Organizer" fill="#395FF1" />
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

export default DashBoard;
