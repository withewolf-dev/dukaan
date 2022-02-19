import React from 'react'

type Props = {}

const FreeProduct = (props: Props) => {
  return (
    <div className="bg-[#ffffff] px-[60px] pt-[80px] pb-24">
      <p className="font-gal text-3xl font-semibold tracking-tighter">
        Try our other free products
      </p>
      <div className="bg-[#E5E5E5 ] grid grid-cols-3 gap-5">
        {data.map((d, i) => (
          <div key={i} className="pt-[48px]">
            <img src={d.img} />
            <p className="pt-[16px] font-gal text-xl font-medium text-[#1A181E]">
              {d.title}
            </p>
            <p className="w-[470px] pt-[4px] font-gal text-base font-normal text-[#4D4D4D]">
              Stock your store with 100s of products and start selling to
              customers in minutes, without the hassle of inventory or
              packaging.
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FreeProduct

export const data = [
  {
    title: 'Privacy Policy Generator',
    paragraph:
      'Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.',
    img: '/Rectangle124.png',
  },
  {
    title: 'Terms & Conditions Generator',
    paragraph:
      'Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.',
    img: '/Rectangle125.png',
  },
  {
    title: 'Domain Name Generator',
    paragraph:
      'Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.',
    img: '/Rectangle126.png',
  },
  {
    title: 'Invoice Generator',
    paragraph:
      'Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.',
    img: '/Rectangle127.png',
  },
]
