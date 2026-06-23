import { useContext } from "react";
import { InstalledAppsContext } from "../../context/InstalledAppsContext";



const InstallApps = () => {
    const { installedApps, setInstalledApps } = useContext(InstalledAppsContext)
    console.log(installedApps,  setInstalledApps, "contextApps");
    return (
        <div className="container mx-auto my-4">
           

            {
                installedApps.map((app, ind) => {
                      return <div key={ind} className="flex gap-4 items-center shadow p-4 rounded-md bg-slate-200">
                        <img src={app.image}
                         alt="" 
                         className="h-[120px] w-auto"/>
                         <h2 className="font-semibold text-2xl">{app.title}</h2>
                      </div>
                })
            }
        </div>
    );
};

export default InstallApps;