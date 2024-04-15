import {HComponentKey} from "@/h-system/types";

export interface Block {
  id: string
  componentKey: HComponentKey
  props: { [key: string]: unknown }
  updatedAt?: string
}

export type Blocks = Array<Block>

export type BlocksMap = { [key: string]: Block }
