import { useRouter } from 'expo-router';
import { View } from 'react-native';

import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';

export default function SignIn() {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center gap-4 p-6">
      <Text variant="h1">Sign In</Text>
      <Text>Sign in to your account.</Text>
      <View className="flex-row items-center gap-1">
        <Text>Don&apos;t have an account?</Text>
        <Button variant="link" onPress={() => router.push('/signup')}>
          <Text>Sign Up</Text>
        </Button>
      </View>
    </View>
  );
}
