import Divider from '@mui/material/Divider';
import logo from '../assets/images/logo.png';
import { HotelIcon } from './icons/Hotel';
import { CarIcon } from './icons/CarIcon';
import { GroupIcon } from './icons/GroupIcon';

export const Hompage = () => {
  return (
    <div className="flex-1 flex flex-col">
      <HomeHeader />
      <HomeContent />
    </div>
  );
};

const HomeHeader = () => {
  return (
    <div className="flex w-full justify-between px-10">
      <img src={logo} height={10} width={150}></img>
      <div className="flex items-center">
        <span className="text-lime-900 font-bold uppercase">Group rates</span>
        <Divider orientation="vertical" flexItem sx={{ mx: 1, width: 2 }} />
        <span className="text-lime-900 font-bold uppercase">My reservations</span>
      </div>
    </div>
  );
};

const HomeContent = () => {
  return (
    <div>
      <div className="w-full h-56 bg-gray-500 ">
        <NavPills></NavPills>
      </div>
    </div>
  );
};

const NavPills = () => {
  return (
    <div>
      {previewMenu.map((item, index) => {
        return <PreviewMenuButton item={item} key={index} />;
      })}
    </div>
  );
};

const PreviewMenuButton = ({ item }: any) => {
  return (
    <div className="flex gap-2">
      {item.icon}
      <span className="text-white">{item.title}</span>
    </div>
  );
};

const previewMenu = [
  {
    title: 'Hotel Reservation',
    icon: <HotelIcon />,
  },
  {
    title: 'Car Rentals',
    icon: <CarIcon />,
  },
  {
    title: 'Group Bookings',
    icon: <GroupIcon />,
  },
];
