import { PinIcon } from './icons/PinIcon';
import { CalendarIcon } from './icons/CalendarIcon';
import { UserIcon } from './icons/UserIcon';
import { Button } from '@mui/material';

export const SearchBar = () => {
    return (
        <div className='mt-10 bg-white/20 rounded-2xl shadow-xl p-2 flex flex-col lg:flex-row items-stretch gap-4 lg:items-center'>
            <Field icon={<PinIcon />} label="Destination City, Airport or Hotel" />
            <Field icon={<CalendarIcon />} label="Check in & Check Out" />
            <Field icon={<UserIcon />} label="2 Adults, 1 Room" />
            <Button 
                variant='contained'
                sx={{
                    backgroundColor: '#1a73e8',
                    color: 'white',
                    borderRadius: '10px',
                    height: '2rem',
                    fontWeight: '600',
                }}
                className='bg-[#1a73e8] hover:bg-[#145fbe] text-white font-bold rounded-xl uppercase text-2xl lg:text-base'
            >
                Search Hotels
            </Button>
        </div>
    )
}

const Field = ({ icon, label }: { icon: React.ReactNode; label: string }) => {
    return (
        <div className="flex items-center gap-2 min-w-[17rem] bg-white border border-gray-300 rounded-xl pr-4 pl-2 py-2 md:flex-1">
            <span className="text-gray-500 w-5 h-5  flex items-center justify-center">{icon}</span>
            <input
                type="text"
                placeholder={label}
                className="w-full outline-none text-gray-700 text-sm placeholder-gray-500"
            />

        </div>
    )
} 