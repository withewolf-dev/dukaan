import React from 'react'

type Props = {}

function SloganMakerFooter({}: Props) {
  return (
    <div className="flex flex-row justify-center pt-12">
      <div className="ml-64 flex items-center justify-center space-x-4 ">
        <span
          className="flex h-6 w-6 justify-center rounded-full bg-[#146EB4] pt-1 text-xs text-white
      "
        >
          1
        </span>
        <span className="text-[#146EB4]">2</span>
        <span className="text-[#146EB4]">3</span>
        <span className="text-[#146EB4]">...</span>
        <span className="text-[#146EB4]">21</span>
      </div>
      <div className="ml-44">
        <span className=" font-gal text-sm text-[#146EB4]"> Next</span>
      </div>
    </div>
  )
}

export default SloganMakerFooter
