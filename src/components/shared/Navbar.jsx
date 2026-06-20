
import logoImg from '../../assets/images/logo.png';
import { FaGithub } from 'react-icons/fa';
import MyNavLink from './NavLink';

const Navbar = () => {

    const navItems = [
      {
        path:"/",
        text:"Home",
      },
      {
        path:"/apps",
        text:"Apps",
      },

      {
        path:"/installedApps",
        text:"Installation",
      }
    ]
    return (
        
             <nav className=" bg-white shadow ">
                  <div className="flex  justify-between  items-center  gap-4  py-[5px]    container  mx-auto">

                <img 
                  src={logoImg}
                   alt=""
                   className="w-[50px]" />
                  <ul className="flex justify-center items-center gap-5">

                      {
                        navItems.map((item, index) =>   <MyNavLink key={index} to={item.path} 
                                >{item.text}</MyNavLink>)
                      }
                      {/* <li>
                        <MyNavLink to={"/"}>Home</MyNavLink>
                             
                        </li>
                      <li>
                        <MyNavLink to={"/apps"}  className={"text-green-600"}>Apps</MyNavLink></li>


                      <li>
                        <MyNavLink to={"/installedApps"}>Installation </MyNavLink>
                        
                        </li> */}

                  </ul>
                  <button className="btn bg-purple-600 text-white"> <FaGithub />Contribute</button>
                  </div>
           

             </nav>
        
    );
};

export default Navbar;