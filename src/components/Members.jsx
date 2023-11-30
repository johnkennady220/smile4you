


import DishesCard from "../layouts/DishesCard";
import member1 from "../assets/img/chairman.jpg";
import member2 from "../assets/img/treasurer.jpg";
import member3 from "../assets/img/Secretary.jpg";
import member4 from "../assets/img/join Secretary.jpg";
import member5 from "../assets/img/trustee.jpg";
import member6 from "../assets/img/truestee2.jpg";
import member7 from "../assets/img/president.jpg"
const Members = () => {
  return (<div className="container ">
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-2 px-5">
      <h1 className=" text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10">
        Board Members
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center  cursor-pointer">
        <DishesCard img={member1} title="Mohammed Ali Pookoya Thanghal" text="chairman "/>
        <DishesCard img={member2} title="Subha M " text="General Secretary & Treasurer  "/>
        <DishesCard img={member3} title="P.K jose" text=" Secretary"/>
        <DishesCard img={member7} title="Faisal Baderi " text="President "/>
        <DishesCard img={member4} title="Sanjeed" text="Join Secretary "/>
        <DishesCard img={member5} title="Sithara M Ali " text="Trustee "/>
        <DishesCard img={member6} title="Mujeeb Rehman" text="Trustee "/>

        
      </div>
    </div>
    
</div>
  );
};

export default Members;