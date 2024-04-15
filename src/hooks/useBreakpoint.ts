import {useMedia} from 'react-use'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config'

export default function useBreakpoint () {
  const {theme} = resolveConfig(tailwindConfig)

  const isMobile = useMedia(`(max-width: ${theme.screens.sm})`)
  const isMobilePlus = useMedia(`(min-width: ${theme.screens.md})`)
  const isDesktop = useMedia(`(min-width: ${theme.screens.sm})`);

  return {
    isMobile,
    isMobilePlus,
    isDesktop: !isMobile && isDesktop,
  }
}
