"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import HTML5_logosvg from ".././Image/HTML5_logosvg.png";
import Champions from ".././Image/Champions.png";
import dynamic from 'next/dynamic';

import checkMark from ".././Image/checkMark.png";
import note from ".././Image/note.png";

import { ProgressBar } from "./ProgressBar";
import CircularProgressBarComponent from "./CircularProgressBarComponent";
import { useState } from "react";

const Chart = dynamic(() => import('../components/BarChart'), { ssr: false });

const progressData = [
  { label: 'HTML Tools, Forms, History', value: 80, col: 'blue-400' },
  { label: 'Tags & References in HTML', value: 60, col: 'orange-400' },
  { label: 'Tables & References in HTML', value: 24, col: 'red-400' },
  { label: 'Tables & CSS Basics', value: 96, col: 'green-400' },
];

const progress = 75;

const SkillTest = () => {
  const [rank, setRank] = useState(1);
  const [percentile, setPercentile] = useState(30);
  const [currentScore, setCurrentScore] = useState(10);
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  const handleRankChange = (event) => setRank(event.target.value);
  const handlePercentileChange = (event) => setPercentile(event.target.value);
  const handleCurrentScoreChange = (event) => setCurrentScore(event.target.value);

  const handleSubmit = () => {
    
    console.log('Updating scores:', rank, percentile, currentScore);
    setShowUpdateForm(false); 
  };

  const toggleUpdateForm = () => setShowUpdateForm(!showUpdateForm);

  return (
    <section className="skills md:ml-8">
      <h3 className="text-lg text-gray-600 my-10">Skill Test</h3>
      <div className="lg:grid md:grid-cols-5   md:grid-rows-[105px,auto,105px,105px,105px,105px,auto,150px] gap-6 pr-3">
        
       
        <div className="border rounded-xl col-start-1 col-end-4 row-start-1 row-end-2 text-black">
          <div className="flex justify-evenly items-center my-4 ">
            <div>
              <Image src={HTML5_logosvg} alt="html logo" width={70} height={70} />
            </div>
            <div>
              <p className="text-lg font-semibold">Hyper Text Markup Language</p>
              <p className="text-lg text-gray-700">
                Questions: 08 | Duration: 15 mins | Submitted on 4 June 2524
              </p>
            </div>
            <div>
              <Button className={"bg-blue-900 hover:bg-blue-600 font-semibold px-6 py-5"} onClick={toggleUpdateForm}>
                Update
              </Button>
            </div>
          </div>
        </div>

        
        {showUpdateForm && (
          <>
            <div className="fixed inset-0 bg-gray-500 opacity-50 z-10"></div>
            <div className="update-scores-modal z-20 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-semibold">Update Scores</h2>
              <div>
                <label>1. Update your Rank:</label>
                <input type="number" value={rank} className="bg-white border mt-2" onChange={handleRankChange} />
              </div>
              <div className="mt-4">
                <label>2. Update your Percentile:</label>
                <input type="number" value={percentile} className="bg-white border mt-2" onChange={handlePercentileChange} />
              </div>
              <div className="mt-4">
                <label>3. Update your Current Score (out of 15):</label>
                <input type="number" value={currentScore} className="bg-white border mt-2" onChange={handleCurrentScoreChange} />
              </div>
              <div className="mt-6 flex gap-4">
                <button onClick={handleSubmit} className="bg-blue-600 text-white px-6 py-2 rounded-lg">Save</button>
                <button onClick={toggleUpdateForm} className="bg-gray-300 text-black px-6 py-2 rounded-lg">Cancel</button>
              </div>
            </div>
          </>
        )}

     
        <div className="border rounded-xl px-6 py-4 text-black md:col-start-1 md:col-end-4 md:row-start-2 md:row-end-4">
          <div>
            <p className="font-semibold text-lg my-1">Quick Statistics</p>
          </div>
          <div className="flex gap-3 px-4 mb-5 mt-3 items-stretch justify-evenly">
            <div className="p-5 flex items-center rounded-full bg-gray-100">
              <Image src={Champions} alt="Champions icon" className="size-7" />
            </div>

            <div>
              <p className="text-lg font-semibold">{rank}</p>
              <p className="text-gray-400 text-sm">YOUR RANK</p>
            </div>

            <div className="border-r border-gray-300"></div>

            <div className="p-5 flex items-center rounded-full bg-gray-100">
              <Image src={note} alt="note icon" className="size-7" />
            </div>

            <div>
              <p className="text-lg font-semibold">{percentile}%</p>
              <p className="text-gray-400 text-sm">PERCENTILE</p>
            </div>

            <div className="border-r border-gray-300"></div>

            <div className="p-5 flex items-center rounded-full bg-gray-100">
              <Image src={checkMark} alt="checkMark icon" className="size-7" />
            </div>

            <div>
              <p className="text-lg font-semibold">{currentScore} / 15</p>
              <p className="text-gray-400 text-sm">CORRECT ANSWERS</p>
            </div>
          </div>
        </div>

        <div className="border text-black md:col-start-4 md:col-end-6 md:row-start-1 md:row-end-5 rounded-xl px-9 py-4">
          <div className="my-6">
            <h2 className="font-semibold text-lg">Syllabus Wise Analysis</h2>
          </div>
          <div>
            {progressData.map((item, index) => (
              <ProgressBar key={index} bgcolor={item.col} progress={item.value} label={item.label} />
            ))}
          </div>
        </div>

        <div className="text-black flex border-gray-300 border rounded-xl px-5 md:row-start-4 md:row-end-8  md:col-start-1 md:col-end-4">
          <div className="flex p-5 flex-col">
            <div>
              <h2 className="py-6 font-semibold">Comparison Graph</h2>
              <p className="font-semibold text-gray-600">
                You scored {percentile}% percentile <span className="font-medium">which is lower than the average percentile 72% of all the engineers who took this assessment.</span>
              </p>
            </div>
            <div>
              <Chart percentile={percentile} />
            </div>
          </div>
          <div className="mt-10">
            <Image src={checkMark} alt="checkMark icon" className="w-20" />
          </div>
        </div>

      
        <div className="text-black border-gray-300 border rounded-xl px-5 py-7 md:col-start-4 md:col-end-6 md:row-start-5 md:row-end-10">
          <div className="flex justify-between py-4">
            <h2 className="font-semibold">Question Analysis</h2>
            <p className="text-blue-700 font-bold">12/15</p>
          </div>
          <div>
            <p className="font-semibold text-gray-600">
              You scored {currentScore} questions correct out of 15. <span className="font-medium">However, it still needs some improvements.</span>
            </p>
          </div>
          <div className="mx-auto flex justify-center mt-14">
      
            <CircularProgressBarComponent percentage={currentScore} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillTest;
