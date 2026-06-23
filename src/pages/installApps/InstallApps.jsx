import { useContext } from "react";
import { InstalledAppsContext } from "../../context/InstalledAppsContext";
import { toast } from "react-toastify";



const InstallApps = () => {
    const { installedApps, setInstalledApps } = useContext(InstalledAppsContext)
    console.log(installedApps,  "contextApps");

    const handleUninstall = (app) => {
           const restApps = installedApps.filter((iApp) => iApp.id != app.id);
           setInstalledApps(restApps)
           toast.warning(` ${app.title}  Is uninstalled`);
    }
    return (
        <div className="container mx-auto my-4 ">
           

            {
                installedApps.map((app, ind) => {
                      return <div key={ind} className="flex gap-4 items-center justify-between shadow p-4 rounded-md bg-slate-200 m-6">
                         <div>
                              <img src={app.image}
                             alt="" 
                            className="h-[120px] w-auto"/>
                            <h2 className="font-semibold text-2xl">{app.title}</h2>
                           </div>
                         <button  onClick={() => handleUninstall(app)} className="btn bg-green-600 text-white">Uninstall</button>
                      </div>
                })
            }
        </div>
    );
};

export default InstallApps;