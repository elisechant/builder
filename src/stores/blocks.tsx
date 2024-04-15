import {create} from 'zustand'
import {immer} from 'zustand/middleware/immer'
import type {Block, Blocks, BlocksMap} from '@/stores/types'
import {nanoid} from "nanoid";

type State = {
  map: BlocksMap
}
type Actions = {
  saveBlock: (b: Block) => void
  saveBlocks: (b: Blocks) => void
}

export const useBlocksStore = create<State & Actions>()(
  immer((set) => ({
    map: {},
    saveBlock: (b) => set((state) => {
      state.map[b.id] = b
    }),
    saveBlocks: (blocks) => set((state) => {
      blocks.forEach((b) => {
        state.map[b.id] = b
      })
    })
  })),
)

export const createBlock = (componentKey: Block['componentKey'], props: Block['props']  = {}) => {
  if (typeof componentKey === 'undefined') {
    throw new Error('Require componentKey')
  }
  return {
    id: nanoid(),
    componentKey,
    props: {},
  }
}
