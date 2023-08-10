import { useState } from "react";

interface User {

    uid:string,
    name: string,
}

// const tempUser:User = {
//     uid:'XYZ',
//     name:'Juan gacha'
// }

export const Usuario = () => {


    // const [user, setUser] = useState<User>(tempUser);
    const [user, setUser] = useState<User>();


    const login = () => {
        setUser({
            uid:'ABC',
            name: 'Fabian Novoa'
        })
    }

  return (
    <div className=" mt-2">
        <h3>Usuario</h3>
        <button 
            className="btn btn-outline-primary"
            onClick={ login }
            >
            Login
        </button>

        {
            (!user)
            ? <pre>No hay usuario </pre>
            : <pre className="mt-2"> {JSON.stringify( user )}</pre>
         
        }
    </div>
  )
}
