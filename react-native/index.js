import { NativeModules, NativeEventEmitter, Platform } from 'react-native';

const { FFmpegKitReactNative } = NativeModules;

if (!FFmpegKitReactNative) {
  console.warn('⚠️ FFmpegKitReactNative native module is not available. Check your linking.');
}

// Basic classes exposed like original package
export const FFmpegKit = FFmpegKitReactNative;
export const FFprobeKit = FFmpegKitReactNative;
export const FFmpegKitConfig = FFmpegKitReactNative;
export const MediaInformationSession = FFmpegKitReactNative;
export const FFmpegSession = FFmpegKitReactNative;
export const ReturnCode = FFmpegKitReactNative;
export const Statistics = FFmpegKitReactNative;

// Event emitter
export const FFmpegKitEventEmitter = Platform.OS === 'ios' ? new NativeEventEmitter(FFmpegKitReactNative) : null;