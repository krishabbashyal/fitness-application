import NavBar from "../components/NavBar";

const RoutinePage = () => {
  return (
    <div>
      <h1 className="text-2xl m-6">Your Routine</h1>
        <p className=" flex justify-center m-6">When you create a routine it will show up here</p>
        <div className="flex justify-center">
        <button className="rounded-md p-4 bg-[#475E88] font-medium text-white">Create Routine</button>
        </div>
      <NavBar activeButton="routines"/>
    </div>
    
  )
}

export default RoutinePage;