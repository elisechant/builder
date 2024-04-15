import {create} from 'zustand'
import {immer} from 'zustand/middleware/immer'
import type {Block} from '@/stores/types'

type State = {
  draft: Block | undefined
}
type Actions = {
  saveDraft: (b: Block) => void
  saveDraftProps: (p: Block['props']) => void
  clear: () => void
}

export const useDraftBlockStore = create<State & Actions>()(
  immer((set) => ({
    draft: undefined,
    saveDraft: (b) => set((state) => {
      state.draft = b
    }),
    saveDraftProps: (p) => set((state) => {
      if (typeof state.draft !== 'undefined') {
        state.draft.props = p
      }
    }),
    clear: () => set((state) => {
      state.draft = undefined
    }),
  })),
)
