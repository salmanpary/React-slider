import "./card.css";
import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Renvenue from './Revenue'
const details = {
  avgbillvalue: {
    lower: 200,
    upper: "20,000",
    heading: "Average Bill Value*",
    question: "What is the averge bill value across all bills generated?",
  },
  referaldiscount: {
    lower: 10,
    upper: 90,
    heading: "Referral Discount",
    question: "What % discount would you like to offer for referred customers?",
  },
  referalreward: {
    lower: 50,
    upper: 500,
    heading: "Referral Reward Amount",
    question:
      "How much would you like to reward referrers for referring their friends?",
  },
  estimatedbill: {
    lower: 20,
    upper: 2000,
    heading: "Estimated Bills Per Month Via Referrals",
    question:
      "Move the slider to see how much revenue you can generate via referrals.",
  },
};
const Card = () => {
  const [avgbillvalue, setavgbillvalue] = useState(200);
  let incrementbillvalue = (value) => {
    setavgbillvalue(value);
  };
  const[referaldiscount,setreferaldiscount]=useState(10)
  let incrementreferaldiscount=(value)=>{
      setreferaldiscount(value)
  }
  const[referalreward,setreferalreward]=useState(50)
  let incrementreferalreward=(value)=>{
      setreferalreward(value)
  }
  const[estimatedbills,setestimatedbills]=useState(20)
  let incrementestimatedbills=(value)=>{
      setestimatedbills(value)
  }
  const netbillvalue=avgbillvalue-referalreward-(referaldiscount/100)*avgbillvalue;
  const totalbill=avgbillvalue*estimatedbills
  const revenue=totalbill-(referaldiscount/100)*totalbill-referalreward*estimatedbills;


  return (
    <>
    <div className="rounded-md bg-white m-4 p-4 text-3xl font-bold font-sans subpixel-antialiased">
      <div className="math">Here's the math,play around!</div>
      <div className="each">
        <div className="section text-2xl font-medium">
          {details.avgbillvalue.heading}
        </div>
        <div className="desc text-lg font-normal">
          {details.avgbillvalue.question}
        </div>
        <div className="value text-lg font-bold">&#8377;{avgbillvalue}</div>
        <div className="slider m-3">
          <Slider
            min={details.avgbillvalue.lower}
            max={parseInt(details.avgbillvalue.upper.replace(/,/g, ""))}
            defaultValue={details.avgbillvalue.lower}
            onChange={incrementbillvalue}
            step={200}
            dotStyle={{ borderColor: 'black' }}
            activeDotStyle={{ borderColor: 'black' }}
            railStyle={{ backgroundColor: '', height: 10 }}
            trackStyle={{ backgroundColor: 'black', height: 10 }}
            handleStyle={{
                borderColor: 'black',
                height: 24,
                width: 24,
                marginLeft:5,
                marginTop: -9,
                backgroundColor: 'black',
              }}
          />
        </div>
        <div className="flex justify-between text-lg font-normal">
          <div className="lower">&#8377;{details.avgbillvalue.lower}</div>
          <div className="upper">&#8377;{details.avgbillvalue.upper}</div>
        </div>
      </div>
      <div className="each">
        <div className="section text-2xl font-medium">
          {details.referaldiscount.heading}
        </div>
        <div className="desc text-lg font-normal">
          {details.referaldiscount.question}
        </div>
        <div className="value text-lg font-bold">{referaldiscount}%</div>
        <div className="slider m-3">
          <Slider
            min={details.referaldiscount.lower}
            max={details.referaldiscount.upper}
            defaultValue={details.referaldiscount.lower}
            onChange={incrementreferaldiscount}
            step={5}
            dotStyle={{ borderColor: 'black' }}
            activeDotStyle={{ borderColor: 'black' }}
            railStyle={{ backgroundColor: '', height: 10 }}
            trackStyle={{ backgroundColor: 'black', height: 10 }}
            handleStyle={{
                borderColor: 'black',
                height: 24,
                width: 24,
                marginLeft:5,
                marginTop: -9,
                backgroundColor: 'black',
              }}
          />
        </div>
        <div className="flex justify-between text-lg font-normal">
          <div className="lower">{details.referaldiscount.lower}%</div>
          <div className="upper">{details.referaldiscount.upper}%</div>
        </div>
      </div>
      <div className="each">
        <div className="section text-2xl font-medium">
          {details.referalreward.heading}
        </div>
        <div className="desc text-lg font-normal">
          {details.referalreward.question}
        </div>
        <div className="value text-lg font-bold">{referalreward} Per Referral</div>
        <div className="slider m-3">
          <Slider
            min={details.referalreward.lower}
            max={details.referalreward.upper}
            defaultValue={details.referalreward.lower}
            onChange={incrementreferalreward}
            step={25}
            dotStyle={{ borderColor: 'black' }}
            activeDotStyle={{ borderColor: 'black' }}
            railStyle={{ backgroundColor: '', height: 10 }}
            trackStyle={{ backgroundColor: 'black', height: 10 }}
            handleStyle={{
                borderColor: 'black',
                height: 24,
                width: 24,
                marginLeft:5,
                marginTop: -9,
                backgroundColor: 'black',
              }}
          />
        </div>
        <div className="flex justify-between text-lg font-normal">
          <div className="lower">&#8377;{details.referalreward.lower}per Referral</div>
          <div className="upper">&#8377;{details.referalreward.upper}per Referral</div>
        </div>
      </div>
      <div className="each">
        <div className="section text-2xl font-medium">
          {details.estimatedbill.heading}
        </div>
        <div className="desc text-lg font-normal">
          {details.estimatedbill.question}
        </div>
        <div className="value text-lg font-bold">{estimatedbills} Bills Each Month</div>
        <div className="slider m-3">
          <Slider
            min={details.estimatedbill.lower}
            max={details.estimatedbill.upper}
            defaultValue={details.estimatedbill.lower}
            onChange={incrementestimatedbills}
            step={20}
            dotStyle={{ borderColor: 'black' }}
            activeDotStyle={{ borderColor: 'black' }}
            railStyle={{ backgroundColor: '', height: 10 }}
            trackStyle={{ backgroundColor: 'black', height: 10 }}
            handleStyle={{
                borderColor: 'black',
                height: 24,
                width: 24,
                marginLeft:5,
                marginTop: -9,
                backgroundColor: 'black',
              }}
          />
        </div>
        <div className="flex justify-between text-lg font-normal">
          <div className="lower text-left">{details.estimatedbill.lower} Bills Each Month</div>
          <div className="upper text-right">{details.estimatedbill.upper} Bills Each Month</div>
        </div>
      </div>
    </div>
    <Renvenue net={netbillvalue} rev={revenue}/>
    </>
  );
};
export default Card;
