import AppCard from "../../components/UI/AppCard";
// import HashLoader from "react-spinners/HashLoader";
import { Link } from "react-router";
import useApps from "../../components/hooks/useApps";

const Apps = () => {
  const { apps, loading } = useApps();

  return (
    <div className="container mx-auto my-[60px]">
      <div className="mb-8 text-center">
        <h2 className="font-bold text-4xl">All apps</h2>
        <p className="text-gray-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
          reiciendis eos laborum tempore quis hic quod cupiditate, consequuntur
        </p>
      </div>

       {loading ? (
        <div className="flex justify-center items-center">
          {/* <HashLoader color="#ad46ff" /> */}
            <h2>Loading...</h2>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-5">
          {apps.map((app, ind) => {
            return <AppCard app={app} key={ind} />;
          })}
        </div>
      )}
      <div className="text-center mt-4">
        <Link to="/apps">
          <button className="btn bg-purple-500 text-white">View All</button>
        </Link>
      </div>
    </div>
  );
};

export default Apps;