import * as Device from 'expo-device';
import { Platform, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AnimatedIcon } from '@/components/animated-icon';
import { HintRow } from '@/components/hint-row';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { WebBadge } from '@/components/web-badge';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import {Button} from '@/components/ui/button';
import {Text} from '@/components/ui/text';

import {useRouter} from 'expo-router';
export default function HomeScreen() 
{ 
  const router = useRouter();
  return (
    <ThemedView>

      <Button onPress={() => router.push('/signup')}>
        <Text>
          Sign Up
        </Text>
      </Button>
      

      <Button onPress={() => router.push('/signin')}>
        <Text>
          Sign In
        </Text>
      </Button>

    </ThemedView>
  );
}


