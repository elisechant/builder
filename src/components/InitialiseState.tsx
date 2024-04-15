import {createBlock, useBlocksStore} from "@/stores/blocks";
import {selectBlocks} from "@/utils/blocks";
import {useDraftBlockStore} from "@/stores/draftBlock";
import type {ReactNode} from "react";
import {useEffect} from "react";

type Props = {
  children: ReactNode
}

export default function InitialiseState({ children }: Props){
  const blocks = useBlocksStore(state => selectBlocks(state.map))
  const draft = useDraftBlockStore(state => state.draft)
  const saveDraft = useDraftBlockStore(state => state.saveDraft)

  useEffect(() => {
    if (!draft) {
      if (!blocks.length) {
        // initialise a new hCard
        saveDraft(createBlock('hCard'))
      } else {
        // default to first
        saveDraft(blocks[0])
      }
    }
  }, [blocks, draft, saveDraft])

  if (!draft) {
    return <p>Loading...</p>
  }

  return <>{children}</>
}
