import {
  LensterCollectModule,
  LensterFollowModule
} from '@generated/lenstertypes'
import getUniswapURL from '@lib/getUniswapURL'
import { Mixpanel } from '@lib/mixpanel'
import React, { FC } from 'react'
import { PUBLICATION } from 'src/tracking'

interface Props {
  module: LensterCollectModule | LensterFollowModule
}

const Uniswap: FC<Props> = ({ module }) => {
  return (
    <div className="space-y-1">
      <div className="text-sm">
        You don&apos;t have enough <b>{module?.amount?.asset?.symbol}</b>
      </div>
      <a
        href={getUniswapURL(
          parseFloat(module?.amount?.value),
          module?.amount?.asset?.address
        )}
        onClick={() => {
          Mixpanel.track(PUBLICATION.COLLECT_MODULE.OPEN_UNISWAP)
        }}
        className="flex items-center space-x-1.5 text-xs font-bold text-pink-500"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img
          src="https://assets.lenster.xyz/images/brands/uniswap.png"
          className="w-5 h-5"
          height={20}
          width={20}
          alt="Uniswap"
        />
        <div>Swap in Uniswap</div>
      </a>
    </div>
  )
}

export default Uniswap
