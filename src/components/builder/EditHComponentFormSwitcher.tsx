import {HComponentKey} from "@/h-system/types";
import type {HCardProps} from '@/h-system/components/HCard';
import EditHCardForm from '@/components/builder/EditHCardForm'

export type HComponentProps = HCardProps

type Props = {
  componentKey: HComponentKey
  props: HComponentProps
  setProps: (key: keyof HComponentProps, value: any) => void
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
