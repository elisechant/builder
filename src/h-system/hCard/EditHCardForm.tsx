import {useState} from "react"
import { useForm } from 'react-hook-form'
import toast from 'react-simple-toasts'
import Label from "@/design-system/Label"
import Input from "@/design-system/Input"
import Legend from "@/design-system/Legend"
import Button from "@/design-system/Button"
import {FileUploadButton} from "@/design-system/FileUploadButton";
import {HCardProps} from "./HCard"

type Props = {
  fields: HCardProps
  setFieldOnChange: (key: string, value: any) => void
  submit: () => void
  isNew: boolean
}

export default function EditHCardForm({ fields, setFieldOnChange, submit, isNew }: Props) {
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
  } = useForm()

  return (
    <form data-testid={'hcard-form'} onSubmit={handleSubmit(data => {
      console.log('submitting:', JSON.stringify(fields))
      try {
        setLoading(true)
        submit()
        toast('Saved')
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    })}>
      <fieldset className={'mb-4'}>
        <Legend>Personal Details</Legend>

        <div className={'grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2'}>
          <div className={'mb-1.5'}>
            <Label htmlFor={'firstName'}>Given name</Label>
            <Input {...register('firstName')} value={fields.firstName} onChange={(e) => {
              setFieldOnChange('firstName', e.currentTarget.value)
            }} />
          </div>
          <div className={'mb-1.5'}>
            <Label htmlFor={'lastName'}>Surname</Label>
            <Input {...register('lastName')} value={fields.lastName} onChange={(e) => {
              setFieldOnChange('lastName', e.currentTarget.value)
            }} />
          </div>
          <div className={'mb-1.5'}>
            <Label htmlFor={'email'}>Email</Label>
            <Input {...register('email')} value={fields.email} onChange={(e) => {
              setFieldOnChange('email', e.currentTarget.value)
            }} />
          </div>
          <div className={'mb-1.5'}>
            <Label htmlFor={'phone'}>Phone</Label>
            <Input {...register('phone')} value={fields.phone} onChange={(e) => {
              setFieldOnChange('phone', e.currentTarget.value)
            }} />
          </div>
        </div>
      </fieldset>

      <fieldset className={'mb-4'}>
        <Legend>Address</Legend>
        <div className={'grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2'}>
          <div className={'mb-1.5'}>
            <Label htmlFor={'addressStreetNumber'}>House name or #</Label>
            <Input {...register('addressStreetNumber')} value={fields.addressStreetNumber} onChange={(e) => {
              setFieldOnChange('addressStreetNumber', e.currentTarget.value)
            }} />
          </div>
          <div className={'mb-1.5'}>
            <Label htmlFor={'addressStreet'}>Street</Label>
            <Input {...register('addressStreet')} value={fields.addressStreet} onChange={(e) => {
              setFieldOnChange('addressStreet', e.currentTarget.value)
            }} />
          </div>
          <div className={'mb-1.5'}>
            <Label htmlFor={'addressSuburb'}>Suburb</Label>
            <Input {...register('addressSuburb')} value={fields.addressSuburb} onChange={(e) => {
              setFieldOnChange('addressSuburb', e.currentTarget.value)
            }} />
          </div>
          <div className={'mb-1.5'}>
            <Label htmlFor={'addressState'}>State</Label>
            <Input {...register('addressState')} value={fields.addressState} onChange={(e) => {
              setFieldOnChange('addressState', e.currentTarget.value)
            }} />
          </div>
          <div className={'mb-1.5'}>
            <Label htmlFor={'addressPostcode'}>Postcode</Label>
            <Input {...register('addressPostcode')} value={fields.addressPostcode} onChange={(e) => {
              setFieldOnChange('addressPostcode', e.currentTarget.value)
            }} />
          </div>
          <div className={'mb-1.5'}>
            <Label htmlFor={'addressCountry'}>Country</Label>
            <Input {...register('addressCountry')} value={fields.addressCountry} onChange={(e) => {
              setFieldOnChange('addressCountry', e.currentTarget.value)
            }} />
          </div>
        </div>
      </fieldset>

      <div className={'pt-4'}>
        <div className={'grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2'}>
          <FileUploadButton
            btnProps={{ block: true, color: 'secondary', size: 'lg' }}
            onFile={(data) => setFieldOnChange('avatar', data)}
          >
            Upload Avatar
          </FileUploadButton>
          <Button block type={'submit'} size={'lg'} disabled={loading} data-testid={'edit-hcard-submit'}>
            {isNew
              ? loading ? 'Creating...' : 'Create hCard'
              : loading ? 'Updating...' : 'Update hCard'}
          </Button>
        </div>
      </div>
    </form>
  )
}
