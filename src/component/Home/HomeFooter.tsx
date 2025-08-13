import { Divider } from '@mui/material';
import logo2 from '../../assets/images/logo2.png';
import { InstagramIcon } from '../../assets/svg/InstagramIcon';
import { FacebookIcon } from '../../assets/svg/FacebookIcon';
import { PinterestIcon } from '../../assets/svg/PinterestIcon';
import { YoutubeIcon } from '../../assets/svg/YoutubeIcon';

export const HomeFooter = () => {
  return (
    <div className="bg-[#353535]">
      <div className="px-37 py-10 mt-5 grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2">
        <FooterInfo />
        <FooterLinks />
      </div>
      <Divider sx={{ marginBottom: '10rem', borderColor: '#5A5A5A', marginX: '9rem' }} />
    </div>
  );
};

const FooterInfo = () => {
  return (
    <div className="flex flex-col items-start">
      <img src={logo2} width={180} />
      <span className="text-[#c5c5c5] mt-5">Call us for Bookings:</span>
      <span className="text-white">+1-888-329-5605</span>
      <span className="text-[#c5c5c5] mt-3">Send Email:</span>
      <span className="text-[#c5c5c5]">support@reservatons.com</span>
      <div className="flex gap-1 mt-5">
        <InstagramIcon />
        <FacebookIcon />
        <PinterestIcon />
        <YoutubeIcon />
      </div>
    </div>
  );
};

const FooterLinks = () => {
  return (
    <>
      {links.map((item, index) => {
        return (
          <div key={index} className="flex flex-col items-start">
            <span className="text-white text-lg font-semibold mb-3">{item.title}</span>
            {!!item.links &&
              item.links.length != 0 &&
              item.links.map((el, index) => {
                return (
                  <span key={index} className="mt-[4px] text-sm text-[#c5c5c5]">
                    {el}
                  </span>
                );
              })}
          </div>
        );
      })}
    </>
  );
};

const links = [
  {
    title: 'Hotel reservations',
    links: [
      'Manage Reservation',
      'Customer Support',
      'Car Rentals',
      'Group Hotels',
      'Group Car Rentals',
      'Terms of Service',
      'Privacy and Policy',
      'Sitemap',
    ],
  },
  {
    title: 'Company',
    links: ['About Us', 'Contact Us', 'Customer Success', 'Reviews'],
  },
  {
    title: 'Community',
    links: ['Runway Suitcase Blog', 'Giving at Reservatinos.com'],
  },
];
