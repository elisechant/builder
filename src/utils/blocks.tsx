import type {Blocks, BlocksMap} from "@/stores/types";

export const selectBlocks = (map: BlocksMap): Blocks => Object.values(map)

export const selectHCards = (map: BlocksMap): Blocks => selectBlocks(map).filter(b => b.componentKey === 'hCard')
