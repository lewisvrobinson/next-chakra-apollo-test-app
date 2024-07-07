import { ChakraProvider } from '@/providers/chakra';
import { ApolloProvider } from '@/providers/apollo';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ApolloProvider>
      <ChakraProvider>{children}</ChakraProvider>
    </ApolloProvider>
  );
}
