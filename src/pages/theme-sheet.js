import { ThemeSheet } from '../theme/ThemeSheet/ThemeSheet';
import { getSingle } from '../utils/queries';
import NotFound from './404';

const isProduction = process.env.NODE_ENV === 'production';

export const getServerSideProps = async () => {
  const data = await getSingle('test');

  return {
    props: {
      ...data
    }
  };
};

export default isProduction ? NotFound : ThemeSheet;
