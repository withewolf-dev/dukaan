import React from 'react'

type Props = {}

const Banner = (props: Props) => {
  return (
    <div className="h-[328px]  bg-primary-blue">
      <div className="flex justify-center">
        <div className="flex w-[1120px] justify-between pt-6">
          <img src="/white.svg" />
          <div className=" flex items-center">
            <p className="font-gal text-[18px] font-normal text-white">
              Sign in
            </p>
            <button className="ml-8 rounded-md bg-white py-3 px-6 font-galMedium text-[#146EB4]">
              Download for PC
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
