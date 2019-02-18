//====================================================|
// HEADER


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import styles from './header.scss';

// Atoms
import Avatar from '../../atoms/avatar';
import Heading from '../../atoms/heading';

// Molecules
import ContactGroup from '../../molecules/contact-group';

// Graphics
import AtSVG from '../../../../assets/graphics/at.svg';
import BehanceSVG from '../../../../assets/graphics/behance.svg';
import GitHubSVG from '../../../../assets/graphics/github.svg';
import HomeSVG from '../../../../assets/graphics/home.svg';
import LinkedInSVG from '../../../../assets/graphics/linkedin.svg';
import PhoneSVG from '../../../../assets/graphics/phone.svg';
import PinSVG from '../../../../assets/graphics/pin.svg';
import PortfolioSVG from '../../../../assets/graphics/portfolio.svg';


//--------------------------| Supported accounts

const accIcons = {
  behance: <BehanceSVG />,
  github: <GitHubSVG />,
  linkedin: <LinkedInSVG />
};


//--------------------------| Component

const Header = ({ person }) => {
  const {
    firstName,
    lastName,
    headline,
    email,
    phone,
    city,
    country,
    avatar
  } = person;

  return (
    <header className={styles.root}>
      <div className={styles.cell}>
        <div className={styles.main}>
          <Heading size={1} type={'title'}>{`${firstName} ${lastName}`}</Heading>
          <Heading type={'subtitle'}>{headline}</Heading>
          <div className={styles.contacts}>
            <ContactGroup contacts={{
              email: {
                id: 'email',
                icon: <AtSVG />,
                value: email,
                link: `mailto:${email}`
              },
              phone: {
                id: 'phone',
                icon: <PhoneSVG />,
                value: phone
              },
              location: {
                id: 'location',
                icon: <PinSVG />,
                value: `${city}, ${country}`,
                link: 'https://goo.gl/maps/jCo463mroTy'
              }
            }} />
          </div>
        </div>
      </div>
      <div className={styles.cell}>
        <div className={styles.links} />
        <Avatar url={avatar} />
      </div>
    </header>
  );
};


//--------------------------| Export

export default Header;
