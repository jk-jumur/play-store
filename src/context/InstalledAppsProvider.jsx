import { InstalledAppsContext } from "./InstalledAppsContext";


 
const InstalledAppsProvider = ({children}) => {
    const data = {
         name: "Jk",
         age: 23
    }
    return <InstalledAppsContext.Provider value={data}>{children}</InstalledAppsContext.Provider>
};

export default InstalledAppsProvider;

