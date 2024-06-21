
import Form from '../Components/Form';
import { useTheme } from '../Components/utils/FeaturedContext';

const Contact = () => {
  const { theme } = useTheme();

  return (
    <section className={`contact ${theme}`}>
      <Form />
    </section>
  );
};

export default Contact;
