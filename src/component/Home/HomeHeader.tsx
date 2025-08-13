import logo from '../../assets/images/logo.png';
import Divider from '@mui/material/Divider';

export const HomeHeader = () => {
  return (
    <div className="flex w-full items-center justify-between max-w-[930px] mx-auto py-1">
      <img src={logo} height={10} width={200}></img>
      <div className="flex items-center">
        <span className="text-lime-900 font-bold uppercase text-sm px-1 cursor-pointer hover:underline">
          Group rates
        </span>
        <Divider orientation="vertical" flexItem sx={{ mx: 1, borderWidth: 1.5 }} />
        <span className="text-lime-900 font-bold uppercase text-sm px-1 cursor-pointer hover:underline">
          My reservations
        </span>
      </div>
    </div>
  );
};
