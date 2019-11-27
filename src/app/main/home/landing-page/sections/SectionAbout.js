import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';

import BG_8_SVG from 'assets/images/shared/bg-8.svg';
import FRIEND_SVG from 'assets/images/shared/Friends.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundPosition: 'center',
    // backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }
}));
function SectionAbout() {
  const classes = useStyles();

  return (
    <div
      className={clsx(
        classes.root,
        'flex flex-col md:flex-row justify-center items-center w-full p-24'
      )}
      // style={{ backgroundImage: `url(${BG_8_SVG})` }}
    >
      <div className="flex-1 flex justify-center">
        <img src={FRIEND_SVG} alt="smile" className="max-w-512" />
      </div>
      <div className="flex-1">
        <Typography
          variant="h4"
          className="font-black text-center p-24 text-gray-800"
        >
          The purpose of the establishment of the Youth Overseas Peace Corps
        </Typography>
        <Typography
          variant="subtitle1"
          className="font-semibold text-center px-24 text-gray-600"
        >
          In order to develop a global perspective of young people, encourage
          young people to engage in overseas volunteer service and guide young
          people from Taiwan to the world. The Youth Development Administration,
          Ministry of Education has long actively promoted overseas volunteer
          services and annually subsidized applications for proposals from
          domestic tertiary institutions and legitimate civil society
          organizations. Now showing results, scope of services across five
          continents, multi-service type, covering education, humanitarian care,
          culture, environment, health, Chinese language teaching and other
          information. Not only to expand youth international perspective, while
          providing opportunities for young people to explore and discover
          different countries, habits and culture. Following the annual policy
          goals of President Tsai “12-year national basic schooling education
          policy” in 2016. To create a forward-looking education of "not only
          teaches for today, but also learns for tomorrow". It will encourage
          the diversified career development of high school graduates, social
          experience first and then to the universities. At the same time, the
          youth development administration will hold a thousand-person youth
          overseas peace work group to encourage young people to go to overseas
          countries to volunteer, improve their foreign language ability and
          develop an international perspective.
        </Typography>
      </div>
    </div>
  );
}

export default SectionAbout;
