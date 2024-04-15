import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { toastConfig } from 'react-simple-toasts';
import RootLayout from '@/components/RootLayout'
import InitialiseState from '@/components/InitialiseState'
import {useEffect, useState} from "react";
import {mockHCardBlock} from "@/stores/__mocks";
import {useBlocksStore} from "@/stores/blocks";
import {Blocks} from "@/stores/types";
import 'react-simple-toasts/dist/theme/dark.css';

const fetchUserBlocks = async () => {
  const enableMock = process.env.NODE_ENV !== 'development'
  return await new Promise(res => setTimeout(() => res(enableMock ? [mockHCardBlock] : []), 1000))
}

// @ts-ignore
toastConfig({ theme: 'toast-success', position: 'top-right' });

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string>()
  const saveBlocks = useBlocksStore(state => state.saveBlocks)

  useEffect(() => {
    fetchUserBlocks()
      .then((blocks) => saveBlocks(blocks as Blocks))
      .catch(error => setError(error.message))
      .finally(() => setLoading(false))
  }, [saveBlocks])

  if (error) {
    return <p>{error}</p>
  }

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <InitialiseState>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </InitialiseState>
  )
}
