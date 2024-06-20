import { useState } from 'react';

const Form = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [errores, setErrores] = useState({});
  const [mostrarDatos, setMostrarDatos] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const erroresFormulario = {};
    if (!nombre.trim()) {
      erroresFormulario.nombre = 'El nombre es requerido';
    }
    if (!apellido.trim()) {
      erroresFormulario.apellido = 'El apellido es requerido';
    }
    if (!email.trim()) {
      erroresFormulario.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      erroresFormulario.email = 'El email ingresado no es válido';
    }

    if (Object.keys(erroresFormulario).length > 0) {
      setErrores(erroresFormulario);
      setMostrarDatos(false); 
    } else {
      setMostrarDatos(true); 
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        {errores.nombre && <span>{errores.nombre}</span>}
      </div>
      <div>
        <label htmlFor="apellido">Apellido:</label>
        <input
          type="text"
          id="apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
        {errores.apellido && <span>{errores.apellido}</span>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errores.email && <span>{errores.email}</span>}
      </div>
      <button type="submit">Enviar</button>

      
      {mostrarDatos && (
        <div className="mensaje">
          <p>¡Gracias {nombre} {apellido}!</p>
          <p>Te contactaremos pronto al correo {email}.</p>
        </div>
      )}
    </form>
  );
};

export default Form;


