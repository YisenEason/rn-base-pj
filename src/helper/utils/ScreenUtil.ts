import { Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');
const FONT_SCALE_RATIO = PixelRatio.getFontScale();

/// UI设计稿基于iphone 6
const UI_DESIGN_WIDTH = 750; // UI设计稿宽度
const UI_DESIGN_HEIGHT = 1334; // UI设计稿高度
const UI_ASPECT_RATIO = 750 / 1334; // UI设计稿高宽比，iphone 6高宽比为16：9 // tslint:disable-line

const WIDTH_SCALE_RATIO = width / UI_DESIGN_WIDTH; // 宽缩放比
const HEIGHT_SCALE_RATIO = height / UI_DESIGN_HEIGHT; // 高缩放比

/// 屏幕尺寸适配方法
export const dp = (size: number) => Math.floor(size * WIDTH_SCALE_RATIO + 0.5);

/// 屏幕字号适配方法
export const sp = (size: number) => Math.floor(size * WIDTH_SCALE_RATIO + 0.5) * FONT_SCALE_RATIO;

/**
 * 根据宽高比获取高度
 * @param width 宽度
 * @param scale 宽度/高度，宽高比
 * @returns 高度
 */
const getHeightByScale = (width: number, scale: number) => {
  let sc = 1 / scale;
  return width * sc;
}

export {
  getHeightByScale
}