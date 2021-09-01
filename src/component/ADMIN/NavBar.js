import { useUser } from "../hooks/useUser";

export default function NavBar(props){
  const { user = "Administrador", typeUser = "Administrador" } = props;
  const { LogOutAdmin } = useUser();

  return(
    <div className="navbar-align">
        <div className="item-navbar">
            <div className="image">
                <img src="https://i.ytimg.com/vi/XTYk-_seeEE/maxresdefault.jpg" alt=""/>
            </div>
            <div>
              <p className="name_user">{user}</p>
              <span className="type_user">{typeUser}</span>
            </div>
        </div>
        <div className="item-navbar">
            <button onClick={()=>LogOutAdmin()} type="button" className="btn-unlogin"><i className="fal fa-sign-out"></i></button>
        </div>
    </div>
  );
}