import Link from 'next/link'
import {useBlocksStore} from "@/stores/blocks"
import {selectBlocks} from "@/utils/blocks"
import {LiveLayout} from "@/components/live/Layout"
import HCard from "@/h-system/components/HCard";
import Head from "next/head";

export default function Live() {
  const blocks = useBlocksStore(state => selectBlocks(state.map))
  const hCards = blocks.filter(b => b.componentKey === 'hCard')

  return (
    <>
      <Head>
        <title>Live</title>
        <meta name="viewport" content="initial-scale=0.8" />
      </Head>
      <LiveLayout>
        {hCards.map(b => (
          <div key={b.id} className={'mb-4'}>
            <HCard {...b.props} />
          </div>
        ))}
        <Link className={'absolute bottom-8'} href={'/'} data-testid={'goto-builder'}>‹ Back to Builder</Link>
      </LiveLayout>
    </>

  )
}
