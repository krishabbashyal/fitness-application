import NavBar from "../components/NavBar";
import SectionHeader from "../components/SectionHeader"
import CategoryCardScroller from "../components/CategoryCardScroller";

const RoutinePage = () => {
  return (
    <div>
      <div className="mx-4 mt-6">
        <SectionHeader header="Your Workouts" />
        <div  className=" flex flex-col justify-center space-y-4 m-6">
          <p>When you create a routine it will show up here</p>
          <button className="rounded-md p-4 bg-[#475E88] font-medium text-white">Create Workout</button>
        </div>
        <div>
          <section>
            <h1 className="text-2xl">Chest Day</h1>
            <ul>
              <li>Bench Press</li>
              <li>Workout 1</li>
              <li>Workout 1</li>
              <li>Workout 1</li>
            </ul>
          </section>
          <SectionHeader header="Browse new workouts" seeAll={true}/> 
          <CategoryCardScroller/>
        </div>
      </div>
      <NavBar activeButton="routines" />
    </div>
  );
};

export default RoutinePage;
