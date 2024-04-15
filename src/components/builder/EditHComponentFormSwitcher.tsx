import {HComponentKey} from "@/h-system/types";
import type {HCardProps} from '@/h-system/hCard/HCard';
import EditHCardForm from '@/h-system/hCard/EditHCardForm'

export type HComponentProps = HCardProps

type Props = {
  componentKey: HComponentKey
  props: HComponentProps
  setProps: (key: string, value: any) => void
  saveBlock: () => void
  isNew: boolean
}

export default function EditHComponentFormSwitcher({ componentKey, props, setProps, saveBlock, isNew }: Props) {
  switch (componentKey) {
    case 'hCard': {
      return <EditHCardForm fields={props} setFieldOnChange={setProps} submit={saveBlock} isNew={isNew} />
    }
    default: {
      throw new Error(`${componentKey} not yet supported`)
    }
  }
}
