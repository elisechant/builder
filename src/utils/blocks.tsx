import type {Blocks, BlocksMap} from "@/stores/types";

export const selectBlocks = (map: BlocksMap): Blocks => Object.values(map)
