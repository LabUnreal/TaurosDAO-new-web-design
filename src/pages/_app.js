import * as React from "react";
import { WagmiConfig } from 'wagmi'
import { configureChains } from 'wagmi'
import { createClient } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { mainnet, goerli } from 'wagmi/chains'
import { MoralisProvider } from "react-moralis"
import { Provider } from "react-redux";
import store from "@src/redux/store";
import { infuraProvider } from 'wagmi/providers/infura'
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

const { provider, webSocketProvider, chains } = configureChains(
  [mainnet],
  [
    // alchemyProvider({ apiKey: 'hu9KmpMxud_8q6Tlskrt42zOpiGy-9xN' }),
    publicProvider(),
    infuraProvider({ apiKey: '5c9cb0b35a2742659dec6fc7680c16c4' })
    
  ],
)

// Necessary for Wagmi Client Provider /* Do Not Delete or client will not work*/
const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    // new CoinbaseWalletConnector({
    //   chains,
    //   options: {
    //     appName: 'TaurosDAO',
    //   },
    // }),
    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true,
      },
    }),
    new InjectedConnector({
      chains,
      options: {
        name: 'Injected',
        shimDisconnect: true,
      },
    }),
  ],
  provider,
  webSocketProvider,
})

const theme = extendTheme({
    fonts: {
      heading: "Rufina, serif",
      body: "PT Serif, sans-serif"
    },
    fontSizes: {
      '7xl': '4.5rem',
      '8xl': '5rem',
      '9xl': '5.5rem',
    },
  });

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <WagmiConfig client={client}>
        <ChakraProvider theme={theme}>
          <React.StrictMode />
            <MoralisProvider appId="ny6Iude7WFwg2QaZtvDK7zQC81e9uKRIeaCkFNxM" serverUrl="https://htogiwbd7il5.usemoralis.com:2053/server">
              <Component {...pageProps} />
            </MoralisProvider>
        </ChakraProvider>
      </WagmiConfig>
    </Provider>
  );
}

export default MyApp;