import Aside from "./Aside";
import MainBoard from "./MainBoard";

function Dashboard() {
  return (
    <div className='flex h-screen'>
      <Aside />
      <MainBoard />
    </div>
  );
}

export default Dashboard;
