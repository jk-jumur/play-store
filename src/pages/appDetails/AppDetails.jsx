// import useApps from "../../components/hooks/useApps";
import { useParams } from "react-router";
import useApps from "../../components/hooks/useApps";
import { useState } from "react";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();

  const expectedApp = apps.find(app => String(app.id) === String(id));

      const [installedApps, setInstalledApps] = useState([]);

  if (loading) {
    return <div className="text-center mt-10"><span className="loading loading-bars loading-lg bg-pink-500"></span></div>;
  }

  if (!expectedApp) {
    return <div className="text-center mt-10">App not found</div>;
  }

  const handleInstalledApp = () => {
       setInstalledApps([...installedApps, expectedApp]);
  }

  console.log(installedApps, "installedApps");

  return (
    <div className="container mx-auto">
        <div className="shadow p-6 space-y-3 text-center">
                <img src={expectedApp.image} alt={expectedApp.title} className="mx-auto h-[240px]  w-auto"/>
                <h2 className="font-semibold text-3xl">{expectedApp.title}</h2>
                <p>Developed by:{" "}
                    
                    <span className="font-semibold text-3xl text-purple-500">{expectedApp.companyName}</span> 
                    </p>
                    <button 
                    className="btn bg-green-300 text-white" 
                     onClick={handleInstalledApp}>
                      Install Now
                    </button>
        </div>
  
    </div>
  );
};

export default AppDetails;