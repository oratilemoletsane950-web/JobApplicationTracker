import { useRouter } from 'expo-router';
import { View } from 'react-native';

import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';

export default function SignUp() {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center gap-4 p-6">
      <Text variant="h1">Sign Up</Text>
      <Text>Create an account to get started.</Text>
      <View className="flex-row items-center gap-1">
        <Text>Already have an account?</Text>
        <Button variant="link" onPress={() => router.push('/signin')}>
          <Text>Sign In</Text>
        </Button>
      </View>
    </View>
  );
}
