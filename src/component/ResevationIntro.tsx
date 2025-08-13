import { DealsIcon } from "./icons/DealsIcon"

export const ReservationIntro = () => {
    return (
        <div className="flex flex-col items-center justify-center py-8 mt-4">
            <div className="flex flex-col gap-3">
                <span className="text-2xl font-bold uppercase">Why Reservations.com?</span>
                <span className="text-xl">The best features to help you find the best hotel.</span>
            </div>
            <AdvantageCards></AdvantageCards>
            <span className="uppercase text-blue-400 text-[14px] underline mt-8 font-semibold">more about us</span>
        </div>
    )
}

const AdvantageCards = () => {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-10">
            {
                advantages.map((item, index) => (
                    <AdvantageCard 
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        description={item.description}
                    />
                ))
            }
        </div>
    )
}

const AdvantageCard = ({ icon: Icon, title, description }: {
    icon: React.ComponentType;
  title: string;
  description: string;
}) => (
    <div className="cursor-pointer flex md:flex-col flex-row items-center text-center">
        <Icon />
        <div className="flex flex-col items-center">
            <span className="font-bold text-gray-800 mt-4 mb-2 text-2xl">{title}</span>
            <p className="text-gray-700 text-sm leading-relaxed max-x-xl">{description}</p>
        </div>
        
    </div>
);

const advantages = [
    {
        icon: DealsIcon,
        title: 'Deals you\'ll love',
        description: 'Find great deals and offers for big savings on hotel room rates',
    },
    {
        icon: DealsIcon,
        title: 'Deals you\'ll love',
        description: 'Find great deals and offers for big savings on hotel room rates',
    },
    {
        icon: DealsIcon,
        title: 'Deals you\'ll love',
        description: 'Find great deals and offers for big savings on hotel room rates',
    },
    {
        icon: DealsIcon,
        title: 'Deals you\'ll love',
        description: 'Find great deals and offers for big savings on hotel room rates',
    },
    {
        icon: DealsIcon,
        title: 'Deals you\'ll love',
        description: 'Find great deals and offers for big savings on hotel room rates',
    },
    {
        icon: DealsIcon,
        title: 'Deals you\'ll love',
        description: 'Find great deals and offers for big savings on hotel room rates',
    },
]