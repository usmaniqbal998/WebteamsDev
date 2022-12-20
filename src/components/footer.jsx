import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import SocialLinks from './organisms/SocialLinks'
import Typography from './atoms/Text'

const FooterHead = ({ title }) => (
  <Typography variant="h5" className="mb-3 text-xl text-[#878787]">
    {title}
  </Typography>
)
const FooterLinks = ({ name, url }) => (
  <Link
    to={url}
    className="text-sm text-white transition-colors ease-in hover:text-secondary-400 lg:text-base"
  >
    {name}
  </Link>
)

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="pt-10 md:pt-20">
          <div className="mb-5 md:mb-10">
            <Link to="/">
              <StaticImage
                src="../images/logo-footer.svg"
                alt="Logo Web Teams"
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-10 lg:grid-cols-8">
            <div className="order-3 col-span-2 lg:order-1 lg:col-span-3 ">
              <div className="flex flex-col gap-8">
                <div>
                  <FooterHead title="Email" />
                  <Typography variant="p" className="text-base">
                    Abubakr.max@gmail.com
                  </Typography>
                </div>
                <div>
                  <FooterHead title="Location" />
                  <div className="flex gap-4">
                    <div children="flex-1">
                      <StaticImage src="../images/uk-flag.svg" alt="UK" />
                    </div>
                    <Typography
                      variant="p"
                      align="left"
                      className="block max-w-[250px] flex-1 text-base"
                    >
                      307 Cotton Exchange Old Hall Street Liverpool, UK
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <FooterHead title="Company" />
              <div className="mt-5 flex flex-col gap-5">
                <FooterLinks url="#" name="Privacy Policy" />
                <FooterLinks url="#" name="About Us" />
                <FooterLinks url="#" name="Case Study" />
              </div>
            </div>
            <div className="order-2 lg:order-3 lg:col-span-2">
              <FooterHead title="Services" />
              <div className="mt-5 flex flex-col gap-5">
                <FooterLinks url="#" name="Web App Development" />
                <FooterLinks url="#" name="Mobile App Development" />
                <FooterLinks url="#" name="Ui/Ux Design" />
              </div>
            </div>
            <div className="order-4 col-span-2">
              <Typography
                variant="p"
                className="mb-5 block text-2xl font-bold text-white lg:text-3xl"
              >
                Subscribe to our newsletter
              </Typography>
              <input
                type="text"
                className="w-full rounded-md bg-[#222222] px-5 py-3 text-xl outline-none"
              />
            </div>
          </div>
          <div className="my-5 text-center  md:my-10">
            <SocialLinks />
            <Typography
              variant="p"
              className="mt-5 text-xs text-primary-50 lg:text-sm"
              align="center"
            >
              All right reserved {new Date().getFullYear()}
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
