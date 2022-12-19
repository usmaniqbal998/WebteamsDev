import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import SocialLinks from './organisms/SocialLinks'

const FooterHead = ({ title }) => (
  <h5 className="mb-3 text-xl font-bold text-[#878787]">{title}</h5>
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
                  <p className="text-base text-white">Abubakr.max@gmail.com</p>
                </div>
                <div>
                  <FooterHead title="Location" />
                  <div className="flex gap-4">
                    <div children="flex-1">
                      <StaticImage src="../images/uk-flag.svg" alt="UK" />
                    </div>
                    <p className="block max-w-[250px] flex-1 text-base text-white">
                      307 Cotton Exchange Old Hall Street Liverpool, UK
                    </p>
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
              <p className="mb-5 block text-2xl font-bold text-white lg:text-3xl">
                Subscribe to our newsletter
              </p>
              <input
                type="text"
                className="w-full rounded-md bg-[#222222] px-5 py-3 text-xl outline-none"
              />
            </div>
          </div>
          <div className="my-5 text-center  md:my-10">
            <SocialLinks />
            <p className="mt-5 text-xs text-primary-50 lg:text-sm">
              All right reserved {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
