
import Form from '../Components/Form';
import { useTheme } from '../Components/themeContext';

const Contact = () => {
  const { theme } = useTheme();

  return (
    <div className={`contact ${theme}`}>
     <p>INGRESE SUS DATOS</p>
      <Form />
    </div>
  );
};

export default Contact;
