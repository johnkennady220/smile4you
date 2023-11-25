import React from 'react';



const DishesCard = (props) => {
  return (
    <div className=" h-300 w-fit lg:w-1/4 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg">
      <img className="  justify-stretch  rounded-lg" src={props.img} alt="img"sizes='32'/>
      <div className=" space-y-4">
        <h3 className=" font-semibold text-center text-xl pt-6">{props.title}</h3>
       
       
      </div>
      <div className=" flex flex-row items-center justify-center gap-200">
          <h3 className=" font text-">{props.text}</h3>
        </div>
    </div>
  );
};

export default DishesCard;