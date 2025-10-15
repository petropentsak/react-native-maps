export const __esModule: boolean;
export const MATCH_INIT: RegExp;
export function addGoogleMapsAppDelegateImport(src: any): generateCode_1.MergeResults;
export function removeGoogleMapsAppDelegateImport(src: any): generateCode_1.MergeResults;
export function addGoogleMapsAppDelegateInit(src: any, apiKey: any): generateCode_1.MergeResults;
export function removeGoogleMapsAppDelegateInit(src: any): generateCode_1.MergeResults;
/**
 * @param src The contents of the Podfile.
 * @param useGoogleMaps if GoogleMaps for iOS is used
 * @returns Podfile with react-native-maps integration configured.
 */
export function addMapsCocoapods(src: any, useGoogleMaps: any): generateCode_1.MergeResults;
export function withMapsIOS(config: any, props: any): any;
import generateCode_1 = require("@expo/config-plugins/build/utils/generateCode");
