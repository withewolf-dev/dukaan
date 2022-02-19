import React from 'react'
import CardList from './CardList'
import SloganMakerFooter from './SloganMakerFooter'

type Props = {}

const SloganMaker = (props: Props) => {
  return (
    <Container>
      <h1 className="font-gal text-4xl font-semibold leading-10  tracking-tighter text-blac-30">
        Free slogan maker
      </h1>
      <h5 className="pt-[16px] font-gal text-xl  font-normal leading-7 text-[#4D4D4D]">
        Simply enter a term that describes your business, and get up to 1,000
        relevant slogans for free.
      </h5>
      <p className="pt-[48px] text-base font-normal text-blac-30">
        Word for your slogan
      </p>
      <Box />
      <div className="pt-12">
        <button className=" rounded-md bg-primary-blue  py-3 px-6 px-6  text-white">
          Generate Slogan
        </button>
      </div>
      <div className="border-b-[1px] border-[#D9D9D9] pt-12"></div>
      <div className="flex items-center justify-between pt-[52px]">
        <h5 className="font-galMedium text-xl text-[#1A181E]">
          We have generated 1,023 slogans for “cozy”
        </h5>
        <button className=" rounded-md border border-[#146EB4] py-2 px-6 px-2   font-galMedium text-sm  text-[#146EB4]">
          Download All
        </button>
      </div>
      <CardList />
      <div className="border-b-[1px] border-[#D9D9D9] pt-12"></div>
      <SloganMakerFooter />
    </Container>
  )
}

export default SloganMaker

export const Container = (props) => {
  return (
    <div className="flex justify-center">
      <div className="absolute  top-[134px] h-[1990px] w-[1120px] rounded-md bg-white pb-5 shadow-lg">
        <div className="px-[192px] pt-[64px] pb-16">{props.children}</div>
      </div>
    </div>
  )
}

export const Box = (props) => {
  return (
    <div className="pt-2">
      <div className="flex h-12 w-[352px] items-center justify-between rounded-md border-[1px] border-[#D9D9D9] px-4 py-3 font-galRegular text-base text-[#4D4D4D]">
        cozy
        <img src="/cross.png" />
      </div>
    </div>
  )
}
