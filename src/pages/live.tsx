import Link from 'next/link'
import Head from "next/head";
import {useBlocksStore} from "@/stores/blocks"
import {selectHCards} from "@/utils/blocks"
import {LiveLayout} from "@/components/live/Layout"
import HCard from "@/h-system/hCard/HCard";

export default function Live() {
  const hCards = useBlocksStore(state => selectHCards(state.map))
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
