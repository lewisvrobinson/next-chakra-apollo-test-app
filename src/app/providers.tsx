import { ChakraProvider } from '@/providers/chakra';
import { ApolloProvider } from '@/providers/apollo';
import { AuthProvider, AuthUser } from '@/providers/auth';

export function Providers({
  user,
  children,
}: {
  user: AuthUser;
  children: React.ReactNode;
}) {
  return (
    <AuthProvider user={user}>
      <ApolloProvider>
        <ChakraProvider>{children}</ChakraProvider>
      </ApolloProvider>
    </AuthProvider>
  );
}
