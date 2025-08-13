import { HomeHeader } from './Home/HomeHeader';
import { HomeContent } from './Home/HomeContent';
import { HomeFooter } from './Home/HomeFooter';

export const HomeScreen = () => {
  return (
    <div className="flex-1 flex flex-col">
      <HomeHeader />
      <HomeContent />
      <HomeFooter />
    </div>
  );
};
