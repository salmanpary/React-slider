import React from "react";
const Revenue = (props) => {
  return (
    <div className="rev bg-black rounded-md text-white m-4 p-2">
      <div className="netbill p-2">
        <h3 className="net text-2xl">Net Bill Value</h3>
        <div className="bracket text-xl">
          (after All Referral Related Costs)
        </div>

        <div className="net text-3xl font-bold">&#8377;{props.net}</div>
      </div>
      <div className="revenuevia text-3xl font-semibold p-2">
        <h2>Revenue Via Referrals</h2>
        <div className="amount font-bold">&#8377;{props.rev}</div>
      </div>
    </div>
  );
};
export default Revenue;
