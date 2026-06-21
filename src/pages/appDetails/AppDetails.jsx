import { useParams } from "react-router";
import useApps from "../../components/hooks/useApps";



const AppDetails = () => {
    const {id} = useParams();
    
    console.log(id, "id");
    const {apps, loading} = useApps();
    const expectedApp = apps.find(app => String(app.id) === id);
    console.log(apps, loading, expectedApp, "apps");


   
    return (

        <div>
            Apps Details
        </div>
    );
};

export default AppDetails;