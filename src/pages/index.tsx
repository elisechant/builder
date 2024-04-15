import Link from 'next/link'
import {useRouter} from 'next/router'
import {useBlocksStore} from "@/stores/blocks";
import {useDraftBlockStore} from "@/stores/draftBlock";
import useBreakpoint from '@/hooks/useBreakpoint'
import {BuilderLayout, BuilderLayoutPanel, BuilderLayoutPreview} from "@/components/builder/Layout";
import HCard from "@/h-system/components/HCard";
import type {HCardProps} from "@/h-system/components/HCard";
import EditHCardForm from '@/components/builder/EditHCardForm'

export default function Builder() {
  const saveBlock = useBlocksStore(state => state.saveBlock)
  const draft = useDraftBlockStore(state => state.draft)
  const saveDraftProps = useDraftBlockStore(state => state.saveDraftProps)
  const { isMobile, isDesktop, isMobilePlus } = useBreakpoint()
  const router = useRouter()

  const save = () => {
    if (typeof draft === 'undefined') return
    saveBlock(draft)
    if (isMobile) {
      router.push('live')
    }
  }

  if (!draft) return null

  if (draft.componentKey !== 'hCard') {
    return <p>Only edit for hCard is supported</p>
  }

  return (
    <BuilderLayout>
      <BuilderLayoutPanel>
        <h1 className={'text-3xl leading-relaxed text-slate-700 font-medium mb-2'}>{draft.componentKey} Builder</h1>
        <div>
          <EditHCardForm fields={draft.props as HCardProps}
                         setFieldOnChange={(name: keyof HCardProps, value: any) => {
                            saveDraftProps({...draft?.props || {}, [name]: value})
                         }}
                         submit={save}
                         isNew={typeof draft.updatedAt === 'undefined'}
          />
        </div>
        {isMobilePlus && (
          <div className={'absolute bottom-8 left-8'}>
            <Link href={'/live'} data-testid={'goto-published'}>View published</Link>
          </div>
        )}
      </BuilderLayoutPanel>

      {isDesktop && (
        <BuilderLayoutPreview>
          <HCard {...draft.props} />
        </BuilderLayoutPreview>
      )}
    </BuilderLayout>
  )
}
