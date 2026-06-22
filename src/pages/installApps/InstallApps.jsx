import { useContext } from "react";
import { InstalledAppsContext } from "../../context/InstalledAppsContext";



const InstallApps = () => {
    const contextData = useContext(InstalledAppsContext)
    console.log(contextData);
    return (
        <div>
            <h2>install apps</h2>
        </div>
    );
};

export default InstallApps;