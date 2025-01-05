import React, { useState } from "react";

const data = [
  {
    id: 1,
    question: "What is an accordion?",
    answer: "An accordion is a user interface pattern that allows users to expand and collapse sections of content.",
  },
  {
    id: 2,
    question: "How does an accordion work?",
    answer: "An accordion works by toggling the visibility of content sections. When a section is expanded, the corresponding content becomes visible; otherwise, it remains hidden.",
  },
  {
    id: 3,
    question: "Why use an accordion?",
    answer: "Accordions help organize content in a compact manner, improving usability and reducing the need for excessive scrolling.",
  },
  {
    id: 4,
    question: "Can an accordion have multiple sections open at once?",
    answer: "Yes, depending on the implementation, an accordion can allow multiple sections to be open or restrict it to only one open section at a time.",
  },
  {
    id: 5,
    question: "How can I style an accordion?",
    answer: "An accordion can be styled using CSS to customize its appearance, including colors, animations, and transitions for opening and closing sections.",
  },
];

const App = () => {
  const [currId, setCurrId] = useState(null);
  const [multiselect, setMultiselect] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleMultiple = (id) => {
    const updatedMultiple = [...multiple];
    const index = updatedMultiple.indexOf(id);
    if (index === -1) {
      updatedMultiple.push(id);
    } else {
      updatedMultiple.splice(index, 1);
    }
    setMultiple(updatedMultiple);
  };

  function toggler() {
    if(multiselect===false)
      {
      setMultiselect(true);
      setCurrId(null);
      }
      else
      {
        setMultiselect(false);
        setMultiple([]);
      }
      console.log(multiselect)
      console.log(multiple)
  }

  const giveAnswer = (id) => {
    if (currId === id) {
      setCurrId(null);
    } else {
      setCurrId(id);
    }
  };
 
  return (
    <>
      <h1 className="text-center font-bold text-2xl my-10">Accordion</h1>
      <div className="flex flex-col items-center h-screen m-20 space-y-2">
        {data.map((dataItem) => (
          <div key={dataItem.id} className="w-[600px]">
            <h2
              className="flex items-center justify-between border-2 border-black rounded w-full h-[50px] font-bold bg-green-300 text-xl px-4 cursor-pointer"
              onClick={multiselect ? ()=>handleMultiple(dataItem.id) : () => giveAnswer(dataItem.id)}
            >
              {dataItem.question}
            </h2>
            {(currId === dataItem.id || multiple.includes(dataItem.id)) && (
              <div className="border-2 border-black w-full bg-yellow-100 px-4 py-2">
                {dataItem.answer}
              </div>
            )}
          </div>
        ))}
        <button
          className="w-[240px] h-[40px] bg-green-900 text-white rounded"
          onClick={toggler}
        >
          {multiselect?"Disable Multi-Select":"Enable Multi-Select"}
        </button>
      </div>
    </>
  );
};

export default App;