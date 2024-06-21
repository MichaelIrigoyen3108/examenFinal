import { useState } from 'react';
import './../Estilos/Form.css';

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
    } else if (nombre.length < 2) {
      erroresFormulario.nombre = 'El nombre debe tener al menos 2 letras';
    } else if (/\d/.test(nombre)) {
      erroresFormulario.nombre = 'El nombre no debe contener números';
    }
  
    if (!apellido.trim()) {
      erroresFormulario.apellido = 'El apellido es requerido';
    } else if (apellido.length < 2) {
      erroresFormulario.apellido = 'El apellido debe tener al menos 2 letras';
    } else if (/\d/.test(apellido)) {
      erroresFormulario.apellido = 'El apellido no debe contener números';
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
      setErrores({});
      setMostrarDatos(true); 
    }
  };

  return (
    <section>
      
    <form style={{ marginBottom: '370px'}} onSubmit={handleSubmit} className="form">
    <p>Ingrese sus datos</p>
      <div className="form-group">
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        {errores.nombre && <span className="error">{errores.nombre}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="apellido">Apellido:</label>
        <input
          type="text"
          id="apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
        {errores.apellido && <span className="error">{errores.apellido}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errores.email && <span className="error">{errores.email}</span>}
      </div>
      <button type="submit" className="submit-button">Enviar</button>

      {mostrarDatos && (
        <div className="mensaje">
          <p>¡Gracias {nombre} {apellido}! te contactaremos a la brevedad a través del email: {email}</p>
          
        </div>
      )}
    </form>
    </section>
  );
};

export default Form;



