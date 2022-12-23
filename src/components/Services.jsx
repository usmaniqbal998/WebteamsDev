import { GatsbyImage, StaticImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import Button from './atoms/Button';
import Section from './organisms/Section';
import { graphql, useStaticQuery } from 'gatsby';
import Typography from './atoms/Text';

const Services = () => {
  const [openTab, setOpenTab] = React.useState(1);
  const data = useStaticQuery(graphql`
    query {
      projectui: file(relativePath: { eq: "services/project-ui-ux.png" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            width: 400
            blurredOptions: { width: 100 }
          )
        }
      }
      webmobile: file(relativePath: { eq: "services/mobile-web-app-dev.png" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            width: 400
            blurredOptions: { width: 100 }
          )
        }
      }
      cloud: file(relativePath: { eq: "services/cloud.png" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            width: 400
            blurredOptions: { width: 100 }
          )
        }
      }
      qa: file(relativePath: { eq: "services/qa-test.png" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            width: 400
            blurredOptions: { width: 100 }
          )
        }
      }
    }
  `);
  const services = [
    {
      id: 1,
      title: 'Product UI/UX Design',
      href: 'ui-ux',
      image: data.projectui,
      content:
        'Every squad have top-notch dedicated product designers that understand your users and business and create beautiful userinterfaces accordingly',
    },
    {
      id: 2,
      title: 'Mobile and Web App Development',
      href: 'mobile-web',
      image: data.webmobile,
      content:
        'Every squad have top-notch dedicated product designers that understand your users and business and create beautiful userinterfaces accordingly',
    },
    {
      id: 3,
      title: 'Cloud Engineering and Dev Ops',
      href: 'cloud',
      image: data.cloud,
      content:
        'Every squad have top-notch dedicated product designers that understand your users and business and create beautiful userinterfaces accordingly',
    },
    {
      id: 4,
      title: 'Quality Assurance and Testing',
      href: 'qa',
      image: data.qa,
      content:
        'Every squad have top-notch dedicated product designers that understand your users and business and create beautiful userinterfaces accordingly',
    },
  ];
  return (
    <Section>
      <div className="grid grid-cols-1  gap-8 lg:grid-cols-5">
        <div className="flex flex-col gap-8 lg:col-span-3">
          <Typography variant="h3">
            We Provide Experts in every aspect of your product lifecycle.
          </Typography>
          <Typography variant="p">
            Join 100+ Technology Companies that went beyond their goals with us.
            Whether you are a fortune 500 or a startup - we give you top-notch
            Product Managers and Development Squads with relevant experience in
            your niche to help you succeed. You can scale these dedicated squads
            up and down anytime
          </Typography>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 items-center gap-10 md:mt-20 lg:grid-cols-2">
        <ul className="flex mb-0 list-none flex-col" role="tablist">
          {services.map((item) => (
            <li
              className={
                'grow border border-primary-200 outline-none  lg:text-left text-xl font-bold w-full lg:text-[40px] lg:leading-[120%] hover:bg-[#2a2a2a] focus:bg-[#2a2a2a] ' +
                (openTab === item.id ? 'bg-[#2a2a2a]' : 'bg-transparent')
              }
            >
              <a
                className="px-10 py-6 block lg:px-20 md:py-10"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(item.id);
                }}
                data-toggle="tab"
                href={`#${item.href}`}
                role="tablist"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        {services.map((item) => (
          <div
            className={`${
              openTab == item.id ? 'flex' : 'hidden'
            } flex-col items-center justify-center gap-10`}
            id={item.href}
          >
            <GatsbyImage image={getImage(item.image)} alt={item.title} />
            <Typography variant="p" align="center">
              {item.content}
            </Typography>
            <Button name="GET PROJECT ESTIMATION" />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Services;
