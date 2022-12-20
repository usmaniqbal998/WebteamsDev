import React from 'react'
import PageLayout from '../components/pagelayout'
import Section from '../components/organisms/Section'
import Button from '../components/atoms/Button'
import SocialLinks from '../components/organisms/SocialLinks'

const contact = () => {
  return (
    <PageLayout>
      <Section>
        <div className="mx-auto max-w-5xl">
          <h1 className="pb-16 text-center font-emphasis text-5xl font-bold leading-[70px] text-white md:pb-10 md:text-left md:text-8xl md:leading-[117%]">
            Contact <span className="text-secondary-400">Us</span>
          </h1>
          <div className="grid grid-cols-1 gap-20 md:grid-cols-2 md:gap-12">
            <div>
              <div className="mx-auto flex max-w-xs flex-col gap-8">
                <input
                  className="border-b border-white bg-transparent py-3 text-sm outline-none placeholder:text-[#878787] hover:border-[#878787] md:text-base"
                  type="text"
                  placeholder="Name"
                />
                <input
                  className="border-b border-white bg-transparent py-3 text-sm outline-none placeholder:text-[#878787] hover:border-[#878787] md:text-base"
                  type="email"
                  placeholder="Email"
                />
                <input
                  className="border-b border-white bg-transparent py-3 text-sm outline-none placeholder:text-[#878787] hover:border-[#878787] md:text-base"
                  type="text"
                  placeholder="Tell us about your project"
                />
                <Button name="Send" />
              </div>
            </div>
            <div>
              <div className="mx-auto flex max-w-xs flex-col gap-10 md:gap-12">
                <div>
                  <h5 className="pb-5 text-base font-bold text-[#878787] md:text-xl">
                    Support
                  </h5>
                  <p className="text-xl font-bold">Info@webteams.com</p>
                </div>
                <div>
                  <h5 className="pb-5 text-base font-bold text-[#878787] md:text-xl">
                    Social Platform
                  </h5>
                  <SocialLinks />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </PageLayout>
  )
}

export default contact
