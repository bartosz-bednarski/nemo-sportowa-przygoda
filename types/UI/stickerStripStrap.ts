import {customColors} from './colors';

export type stickerH1Type = {
  stripTextColor: customColors;
  stripBgColor: customColors;
  scale: number;
  title: string;
  title2: string;
  titleStrip: string;
  paddingBottom?: number;
};
export type stickerH2Type = {
  stripTextColor: customColors;
  stripBgColor: customColors;
  scale: number;
  title: string;
  titleStrip: string;
  paddingBottom?: number;
  titleColor?: customColors;
};
export type stickerH4Type = {
  stripTextColor: customColors;
  stripBgColor: customColors;
  scale: number;
  title: string;
  titleStrip: string;
  paddingBottom?: number;
};
export type stripH1Type = {
  type: 'span' | 'h1';
  scale: number;
  stripBgColor: customColors;
  stripTextColor: customColors;
  title: string;
  paddingBottom?: number;
};
export type stripH2Type = {
  type: 'span' | 'h2';
  scale: number;
  stripBgColor: customColors;
  stripTextColor: customColors;
  title: string;
  paddingBottom?: number;
};

export type stripH3Type = {
  scale: number;
  stripBgColor: customColors;
  stripTextColor: customColors;
  title: string;
  marginBottom?: string;
};
export type stripH4Type = {
  type: 'span' | 'h4';
  scale: number;
  stripBgColor: customColors;
  stripTextColor: customColors;
  title: string;
  marginBottom?: string;
};
export type stripParagraphType = {
  scale: number;
  stripBgColor: customColors;
  stripTextColor: customColors;
  title: string;
};

export type scrapType = {position: 'top' | 'bottom'; color: customColors};
export type scrap2Type = {position: 'top' | 'bottom'; color: customColors};
