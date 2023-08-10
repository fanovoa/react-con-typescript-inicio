import { useForm } from "../hooks/useForm";

interface FormData {
    email: string;
    nombre:string;
    edad:number
}

export const Formulario = () => {


    const { formulario, handleChange, email, nombre, edad} = useForm<FormData>({
            email:'fabian93novoa@gmail.com',
            nombre:'fabian',
            edad:36

    });

  return (
    <form autoComplete="off">
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" 
                   className="form-control" 
                   name="email"
                   value={email }
                   onChange={ (ev) => handleChange(ev) } />
        </div>
        <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input  type="text" 
                    className="form-control" 
                    name="nombre"
                    value={nombre}
                    onChange={ handleChange } />
                   
        </div>

        <div className="mb-3">
            <label htmlFor="edad" className="form-label">Edad</label>
            <input  type="number" 
                    className="form-control" 
                    name="edad"
                    value={edad}
                    onChange={ handleChange } />
                   
        </div>

        <pre> { JSON.stringify( formulario ) }</pre>
    </form>
  )
}
