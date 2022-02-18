import React from 'react'

type Props = {}

function CardList({}: Props) {
  return (
    <div className="pt-11">
      <div className="grid grid-cols-2 gap-8">
        {data.map((d, i) => (
          <div
            key={i}
            className=" flex h-[80px] w-[372px]  items-center rounded-sm bg-[#F2F2F2] px-4 py-2 font-gal font-normal text-[#1A181E] "
          >
            {d}
          </div>
        ))}
      </div>
    </div>
  )
}

export default CardList

export const data = [
  'There is no Sore it will Not Heal, No cool it will not Subdue.',
  'coziness building for tomorrow',
  'Review the facts cool is the best.',
  'There is no Sore it will Not Heal, No cool it will not Subdue.',
  'coziness building for tomorrow',
  'Review the facts cool is the best.',
  'There is no Sore it will Not Heal, No cool it will not Subdue.',
  'coziness building for tomorrow',
  'Review the facts cool is the best.',
  'There is no Sore it will Not Heal, No cool it will not Subdue.',
  'coziness building for tomorrow',
  'There is no Sore it will Not Heal, No cool it will not Subdue.',
  'coziness building for tomorrow',
  'There is no Sore it will Not Heal, No cool it will not Subdue.',
  'coziness building for tomorrow',
  'There is no Sore it will Not Heal, No cool it will not Subdue.',
  'There is no Sore it will Not Heal, No cool it will not Subdue.',
  'There is no Sore it will Not Heal, No cool it will not Subdue.',
]
