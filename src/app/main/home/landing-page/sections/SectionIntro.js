import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';

// import BG_8_SVG from 'assets/images/shared/bg-8.svg';
// import FRIEND_SVG from 'assets/images/shared/Friends.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundPosition: 'center',
    // backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }
}));
function SectionIntro() {
  const classes = useStyles();

  return (
    <div
      className={clsx(
        classes.root,
        'flex flex-col sm:flex-row justify-center items-center w-full p-24'
      )}
      // style={{ backgroundImage: `url(${BG_8_SVG})` }}
    >
      <div className="flex-1">
        <Typography
          variant="h4"
          className="font-black text-center p-24 text-gray-800"
        >
          The introduction of the Youth Overseas Peace Corps
        </Typography>
        <Typography
          variant="subtitle1"
          className="font-semibold px-24 text-gray-600"
        >
          1. Goal Following the annual policy goals of President Tsai’s 2016
          “12-year national basic schooling education policy”, on June 28, 2016,
          the Youth Overseas Peace Corps was established, along with the Youth
          Overseas Peace Corps Promotion Committee, which is made up of relevant
          government ministries, civil society organizations and youth
          representatives, to offer young people more overseas voluntary service
          opportunities, broaden their international outlook, and at the same
          time, give young people opportunities to explore and discover the
          customs and cultures of different countries.
          <br />
          2. Program content:
          <br />
          (1) Target participants: Young Taiwanese nationals aged 18-35 years
          old.
          <br />
          (2) Strategic execution:
          <br />
          A.Through public-private partnerships, we promote youth overseas
          voluntary service: To encourage the youths to participate in overseas
          voluntary service and apply their skills and knowledge to offer other
          countries or regions valuable services, we fund colleges, universities
          and NGOs on a one-off (or continuing) basis to go to service locations
          to carry out planned service projects. In addition,the youths who are
          invited by international organizations or overseas branches to work on
          in-depth overseas service projects (for at least 3 months or more),
          may go through colleges, universities or NGOs to apply for long-term
          volunteering support.
          <br />
          B.Pooling relevant resources, supporting youth sustainable development
          services: We have established a youth overseas volunteering
          information platform specialist website to offer youth overseas
          volunteers pre-trip training courses to strengthen youth volunteer
          planning, project execution and risk management response capacity, to
          satisfy the need for relevant knowledge about overseas service. In
          addition, we coordinate statistical data from different government
          ministries, colleges and schools, high schools and CSOs, to get a
          grasp of the status of Taiwan’s youth taking part in overseas
          volunteering service.
          <br />
          C. Team contest judging to establish youth standard models to inspire
          others: At the Youth Peace Corps Contest, through the process of
          selection, outstanding youth overseas volunteer teams are chosen, and
          at the award and sharing ceremony the winning teams are honored, and
          invited to share their overseas volunteering experience, to inspire
          other youth to take part.
        </Typography>
      </div>
      {/* <div className="flex-1">
        <img src={FRIEND_SVG} alt="smile" />
      </div> */}
    </div>
  );
}

export default SectionIntro;
