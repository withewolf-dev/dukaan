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
        <button className=" h-[50px] w-56  rounded-md bg-primary-blue px-6  text-white">
          Generate Slogan
        </button>
      </div>
      <div className="border-b-[1px] border-[#D9D9D9] pt-12"></div>
      <div className="flex items-center justify-between pt-[52px]">
        <h2>We have generated 1,023 slogans for “cozy”</h2>
        <button className=" h-[36px] w-[137px] rounded-md border border-[#146EB4]   px-2 text-sm  text-[#146EB4]">
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
      <div className="absolute  top-[134px] h-[1880px] w-[1120px] rounded-md bg-white pb-5 shadow-lg">
        <div className="px-[192px] pt-[64px]">{props.children}</div>
      </div>
    </div>
  )
}

export const Box = (props) => {
  return (
    <div className="pt-2">
      <div className="flex h-12 w-[352px] items-center rounded-md border-[1px] border-[#D9D9D9]">
        cozy
      </div>
    </div>
  )
}
