import { Stack } from "expo-router";
// useCallback: cache a function definition between re-renders
import { useCallback } from "react";
// UseFonts: required for using custom fonts
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

// Show splash screen until hideAsync is called
SplashScreen.preventAutoHideAsync();

const Layout = () => {
  // Import fonts
  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  // Show homepage if fonts loaded successfully
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return <Stack onLayout={onLayoutRootView} />;
};

export default Layout;
