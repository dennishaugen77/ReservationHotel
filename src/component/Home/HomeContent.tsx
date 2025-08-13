import { SearchBar } from '../SearchBar';
import { ReservationIntro } from '../ResevationIntro'
import { Desktop  } from '../Desktop';
import Divider from '@mui/material/Divider'
import hotel2 from '../../assets/images/hotel2.jpg';
import { HotelIcon } from '../icons/Hotel';
import { CarIcon } from '../icons/CarIcon';
import { GroupIcon } from '../icons/GroupIcon';

export const HomeContent = () => {
    return (
        <div>
            <div 
                className="w-full h-115  bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center relative"
                style={{ backgroundImage: `url(${hotel2})` }}
            >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/50"></div>
                
                {/* Content with relative positioning to appear above overlay */}
                <div className="relative z-10 flex flex-col items-center justify-center">
                    <NavPills></NavPills>
                    <span className='uppercase text-white text-6xl font-bold'>Reserve your Hotel</span>
                    <HeroSubtitle></HeroSubtitle>
                    <SearchBar></SearchBar>
                </div>
            </div>
            <div className='flex flex-col px-40'>
                <ReservationIntro />
                <Divider />
                <Desktop/>
            </div>
        </div>
    )
}

const NavPills = () => {
    return (
        <div className='cursor-pointer lg:flex gap-2 navpills items-center justify-center pb-6 hidden'>
            {
                previewMenu.map((item, index) => {
                    return <PreviewMenuButton item={item} key={index}/>
                })
            }
        </div>
    )
}

const PreviewMenuButton = ({item}: any) => {
    return (
        <div className='flex gap-1 hover:bg-white/10 pl-4 pr-5 py-2 rounded-full'>
            {item.icon}
            <span className='text-white text-base'>{item.title}</span>
        </div>
    )
}


const previewMenu = [
    {
        title: 'Hotel Reservation',
        icon: <HotelIcon />,
    },
    {
        title: 'Car Rentals',
        icon: <CarIcon />
    },
    {
        title: 'Group Bookings',
        icon: <GroupIcon />,
    }
];


  

const HeroSubtitle = () => {
    return (
        <div className='text-white text-2xl mt-10 font-medium w-2/3 text-center lg:block hidden'>
            Reservations.com is an independent Online Travel Agency to help you select from over 500,000 hotels worldwide. Book online or call
            <span className="font-semibold"> +1-888-329-5605</span>
        </div>
    )
}