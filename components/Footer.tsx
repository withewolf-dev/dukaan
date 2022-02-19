import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className=" bg-[#1A181E] px-[160px] pt-[64px] pb-6">
      <div className="flex">
        <img src="/white.svg" className="pb-[106px]" />
        <div className="ml-[140px] flex  space-x-28 text-white">
          <div className="flex flex-col space-y-4 font-gal text-lg font-normal">
            <p>Contact</p>
            <p>FAQ's</p>
          </div>
          <div className="flex flex-col space-y-4 font-gal text-lg font-normal">
            <p>Tutorials</p>
            <p>Blog</p>
          </div>
          <div className="flex flex-col space-y-4 font-gal text-lg font-normal">
            <p>Privacy</p>
            <p>Banned Items</p>
          </div>
          <div className="flex flex-col space-y-4 font-gal text-lg font-normal">
            <p>About</p>
            <div className="flex items-center">
              <p>Jobs</p>
              <span className="ml-1 flex h-6 w-6  justify-center rounded-full  bg-white font-gal text-[14px] font-normal text-black">
                3
              </span>
            </div>
          </div>
          <div className="flex flex-col space-y-4 font-gal text-lg font-normal">
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Linkedin</p>
          </div>
        </div>
      </div>
      <div className="border-b-[1px] border-[#D9D9D9] pt-12"></div>
      <div className="flex justify-between pt-6 font-gal text-sm font-normal text-white">
        <p>Dukaan 2020, All rights reserved.</p>
        <div className="flex">
          <p>Made in </p>
          <img src="/Group.png" className="ml-4 object-contain" />
        </div>
      </div>
    </div>
  )
}

export default Footer

export const data = [
  'Contact',
  "FAQ's",
  'Tutorials',
  'Blog',
  'Privacy',

  'About',
  'Banned ',
  'Jobs',
  'Facebook',
  'Twitter',
]
