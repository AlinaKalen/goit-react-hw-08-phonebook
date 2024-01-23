import { Section } from '../../components/Section/Section';
import css from './Home.module.css'


const Home = () => {
  return (
    <div className={css.HomeContainer}>
      <Section title="Phone Book" />
    </div>
  );
};

export default Home;