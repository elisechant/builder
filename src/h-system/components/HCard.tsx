import type {ReactNode} from "react";

const StyledRow = ({ children }: { children: ReactNode }) => (
  <div className={'border-gray-300 pb-0.5'} style={{borderBottomWidth: '1px'}}>{children}</div>
)

const StyledText = ({ label, children }: { label?: string, children: ReactNode }) => (
  <p>
    <span className={'inline-block w-16 text-[10px] font-medium uppercase tracking-tight text-slate-700'}>{label ? label : ''}</span>
    <span>{children}</span>
  </p>
)

export type HCardProps = {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  addressStreetNumber?: string
  addressStreet?: string
  addressSuburb?: string
  addressState?: string
  addressPostcode?: string
  addressCountry?: string
  avatar?: {
    dataUrl: string
    width: string
    height: string
    size: number
  }
}

export default function HCard({ firstName,
                                lastName,
                                email,
                                phone,
                                addressStreetNumber,
                                addressStreet,
                                addressSuburb,
                                addressState,
                                addressPostcode,
                                addressCountry,
                                avatar
}: HCardProps) {
  return (
    <article className={'min-w-96 max-w-96 shadow bg-white border-b-2 border-b-gray-400'}>
      <div className={'relative bg-[#283d50] p-5 pt-9'}>
        <h1 className={'text-lg leading-none text-white'} data-testid={'hcard-name'}>{firstName} {lastName}</h1>
        <div className={'absolute right-3 top-2'} data-testid={'hcard-avatar'}>
          {avatar ? (
            <div className={'w-[90px] h-[90px] bg-no-repeat bg-right-top bg-contain'} style={{
              backgroundImage: `url('${avatar.dataUrl}')`,
            }} />
          ) : null}
        </div>
      </div>

      <div className={'p-5 pt-6 pb-9'}>
        <div className={'grid grid-cols-1 gap-y-2.5'}>
          <StyledRow><StyledText label={'Email'}>{email}</StyledText></StyledRow>
          <StyledRow><StyledText label={'Phone'}>{phone}</StyledText></StyledRow>
          <StyledRow><StyledText label={'Address'}>{addressStreetNumber} {addressStreet}</StyledText></StyledRow>
          <StyledRow>
            <StyledText label={''}>
              {addressSuburb}{addressSuburb && addressState ? ', ' : ''}{addressState}
            </StyledText>
          </StyledRow>
          <StyledRow>
            <div className={'grid grid-cols-2'}>
              <StyledText label={'Postcode'}>{addressPostcode}</StyledText>
              <StyledText label={'Country'}>{addressCountry}</StyledText>
            </div>
          </StyledRow>
        </div>
      </div>
    </article>
  )
}
