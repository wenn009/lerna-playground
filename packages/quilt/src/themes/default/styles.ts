// tslint:disable:variable-name
import { css } from 'styled-components';
import { colors, fonts, palette, scale, spaces } from './utils';

/**
 * Index and Quick Search:
 * 0. Custom
 * 0.1 Color
 * 0.2 Background Color
 * 0.3 Border Color
 * 0.4 Other
 *
 * 1. Layout
 * 1.A Display
 * 1.B Floats
 * 1.C Object Fit
 * 1.D Object Position
 * 1.E Overflow
 * 1.F Position
 * 1.G Visibility
 * 1.H Z-Index
 *
 * 2. Typography
 * 2.A Color
 * 2.B Font Family
 * 2.C Font Size
 * 2.D Font Weight
 * 2.E Letter Spacing
 * 2.F Line Height
 * 2.G Lists
 * 2.H Style & Decoration
 * 2.I Text Alignment
 * 2.J Vertical Alignment
 * 2.K Whitespace & Wrapping
 *
 * 3. Backgrounds
 * 3.A Background Attachment
 * 3.B Background Color
 * 3.C Background Position
 * 3.D Background Repeat
 * 3.E Background Size
 *
 * 4. Borders
 * 4.A Border Color
 * 4.B Border Style
 * 4.C Border Width
 * 4.D Border Radius
 *
 * 5. Flexbox
 * 5.A Flex Direction
 * 5.B Flex Wrapping
 * 5.C Align Items
 * 5.D Align Content
 * 5.E Align Self
 * 5.F Justify Content
 * 5.G Flex, Grow & Shrink
 *
 * 6. Spacing
 * 6.A Margin
 * 6.B Padding
 *
 * 7. Sizing
 * 7.A Width
 * 7.B Height
 *
 * 8. Tables
 * 8.A Border Collapse
 * 8.B Table Layout
 *
 * 9. Effects
 * 9.A Box Shadow
 * 9.B Opacity
 *
 * 10. Interactivity
 * 10.A Cursor
 * 10.B Outline
 * 10.C Pointer Events
 * 10.D Resize
 * 10.E User Select
 *
 * 11. SVG
 * 11.A Fill & Stroke
 */

// 0. Custom

// 0.1 Color
const text_color_default = css`
  color: ${palette.text.default};
`;

const text_color_muted = css`
  color: ${palette.text.muted};
`;

const text_color_primary = css`
  color: ${palette.primary.main};
`;

const text_color_primary_light = css`
  color: ${palette.primary.light};
`;

const text_color_secondary = css`
  color: ${palette.secondary.main};
`;

const text_color_secondary_light = css`
  color: ${palette.secondary.light};
`;

const text_color_secondary_complement = css`
  color: ${palette.secondary.complement};
`;

const text_color_charcoal = css`
  color: ${colors.charcoal};
`;
const text_color_slate = css`
  color: ${colors.slate};
`;
const text_color_stone = css`
  color: ${colors.stone};
`;
const text_color_fog = css`
  color: ${colors.fog};
`;
const text_color_whiteSmoke = css`
  color: ${colors.whiteSmoke};
`;
const text_color_white = css`
  color: ${colors.white};
`;
const text_color_white_25 = css`
  color: ${colors.white}40;
`;
const text_color_white_50 = css`
  color: ${colors.white}80;
`;
const text_color_white_75 = css`
  color: ${colors.white}BF;
`;

// 0.2 Background Color

const bg_default = css`
  background-color: ${palette.text.default};
`;

const bg_none = css`
  background-color: none;
`;

const bg_muted = css`
  background-color: ${palette.text.muted};
`;

const bg_primary = css`
  background-color: ${palette.primary.main};
`;

const bg_primary_25 = css`
  background-color: ${palette.primary.main}40;
`;

const bg_primary_50 = css`
  background-color: ${palette.primary.main}80;
`;

const bg_primary_75 = css`
  background-color: ${palette.primary.main}BF;
`;

const bg_primary_light = css`
  background-color: ${palette.primary.light};
`;

const bg_secondary = css`
  background-color: ${palette.secondary.main};
`;

const bg_secondary_light = css`
  background-color: ${palette.secondary.light};
`;

const bg_secondary_complement = css`
  background-color: ${palette.secondary.complement};
`;

const bg_charcoal = css`
  background-color: ${colors.charcoal};
`;

const bg_slate = css`
  background-color: ${colors.slate};
`;

const bg_stone = css`
  background-color: ${colors.stone};
`;

const bg_fog = css`
  background-color: ${colors.fog};
`;

const bg_fog_25 = css`
  background-color: ${colors.fog}40;
`;

const bg_fog_50 = css`
  background-color: ${colors.fog}80;
`;

const bg_fog_75 = css`
  background-color: ${colors.fog}BF;
`;

const bg_whiteSmoke = css`
  background-color: ${colors.whiteSmoke};
`;

const bg_blackHaze = css`
  background-color: ${colors.blackHaze};
`;

const bg_overlay = css`
  background: ${palette.overlay.default};
`;

// 0.3 Border Color

const border_fog = css`
  border-color: ${colors.fog};
`;

const border_slate = css`
  border-color: ${colors.slate};
`;

const border_stone = css`
  border-color: ${colors.stone};
`;

const border_whiteSmoke = css`
  border-color: ${colors.whiteSmoke};
`;

const border_blackHaze = css`
  border-color: ${colors.blackHaze};
`;

// 0.4 Other

const content_box = css`
  box-sizing: content-box;
`;

// 1. Layout
// 1.A Display
const block = css`
  display: block;
`;

const inline_block = css`
  display: inline-block;
`;

const inline = css`
  display: inline;
`;

const table = css`
  display: table;
`;

const table_row = css`
  display: table-row;
`;

const table_cell = css`
  display: table-cell;
`;

const hidden = css`
  display: none;
`;

const flex = css`
  display: flex;
`;

const inline_flex = css`
  display: inline-flex;
`;

// 1.B Floats
const float_right = css`
  float: right;
}`;

const float_left = css`
  float: left;
}`;

const float_none = css`
  float: none;
}`;

const clearfix = css`
  &:after {
    content: "";
    display: table;
    clear: both;
  }
}`;

// 1.C Object Fit
const object_contain = css`
  -o-object-fit: contain;
  object-fit: contain;
`;

const object_cover = css`
  -o-object-fit: cover;
  object-fit: cover;
`;

const object_fill = css`
  -o-object-fit: fill;
  object-fit: fill;
`;

const object_none = css`
  -o-object-fit: none;
  object-fit: none;
`;

// 1.D Object Position
const object_scale_down = css`
  -o-object-fit: scale-down;
  object-fit: scale-down;
`;

const object_bottom = css`
  -o-object-position: bottom;
  object-position: bottom;
`;

const object_center = css`
  -o-object-position: center;
  object-position: center;
`;

const object_left = css`
  -o-object-position: left;
  object-position: left;
`;

const object_left_bottom = css`
  -o-object-position: left bottom;
  object-position: left bottom;
`;

const object_left_top = css`
  -o-object-position: left top;
  object-position: left top;
`;

const object_right = css`
  -o-object-position: right;
  object-position: right;
`;

const object_right_bottom = css`
  -o-object-position: right bottom;
  object-position: right bottom;
`;

const object_right_top = css`
  -o-object-position: right top;
  object-position: right top;
`;

const object_top = css`
  -o-object-position: top;
  object-position: top;
`;

// 1.E Overflow
const overflow_auto = css`
  overflow: auto;
`;

const overflow_hidden = css`
  overflow: hidden;
`;

const overflow_visible = css`
  overflow: visible;
`;

const overflow_scroll = css`
  overflow: scroll;
`;

const overflow_x_auto = css`
  overflow-x: auto;
`;

const overflow_y_auto = css`
  overflow-y: auto;
`;

const overflow_x_hidden = css`
  overflow-x: hidden;
`;

const overflow_y_hidden = css`
  overflow-y: hidden;
`;

const overflow_x_visible = css`
  overflow-x: visible;
`;

const overflow_y_visible = css`
  overflow-y: visible;
`;

const overflow_x_scroll = css`
  overflow-x: scroll;
`;

const overflow_y_scroll = css`
  overflow-y: scroll;
`;

const scrolling_touch = css`
  -webkit-overflow-scrolling: touch;
`;

const scrolling_auto = css`
  -webkit-overflow-scrolling: auto;
`;

// 1.F Position
const pos_static = css`
  position: static;
`;

const pos_fixed = css`
  position: fixed;
`;

const pos_absolute = css`
  position: absolute;
`;

const pos_relative = css`
  position: relative;
`;

const pos_sticky = css`
  position: -webkit-sticky;
  position: sticky;
`;

const pin_t = css`
  top: 0;
`;
const pin_r = css`
  right: 0;
`;
const pin_b = css`
  bottom: 0;
`;
const pin_l = css`
  left: 0;
`;
const pin_y = css`
  top: 0;
  bottom: 0;
`;
const pin_x = css`
  right: 0;
  left: 0;
`;
const pin = css`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;
const pin_none = css`
  top: auto;
  right: auto;
  bottom: auto;
  left: auto;
`;
// 1.G Visibility
const visible = css`
  visibility: visible;
`;

const invisible = css`
  visibility: hidden;
`;
// 1.H Z-Index
const z_0 = css`
  z-index: 0;
`;

const z_10 = css`
  z-index: 10;
`;

const z_20 = css`
  z-index: 20;
`;

const z_30 = css`
  z-index: 30;
`;

const z_40 = css`
  z-index: 40;
`;

const z_50 = css`
  z-index: 50;
`;

const z_auto = css`
  z-index: auto;
`;

// 2. Typography
// 2.A Color
const text_color_transparent = css`
  color: transparent;
`;

// 2.B Font Family
const font_primary = css`
  font-family: ${fonts.primary};
`;

const font_secondary = css`
  font-family: ${fonts.secondary};
`;

// 2.C Font Size
const font_size_xs = css`
  font-size: ${scale.xs};
`;

const font_size_sm = css`
  font-size: ${scale.sm};
`;

const font_size_md = css`
  font-size: ${scale.md};
`;

const font_size_lg = css`
  font-size: ${scale.lg};
`;

const font_size_xl = css`
  font-size: ${scale.xl};
`;

const font_size_xxl = css`
  font-size: ${scale.xxl};
`;

// 2.D Font Weight
const font_light = css`
  font-weight: 300;
`;

const font_med = css`
  font-weight: 400;
`;

const font_bold = css`
  font-weight: 500;
`;

// 2.E Letter Spacing
const tracking_tight = css`
  letter-spacing: -0.5px;
`;
const tracking_normal = css`
  letter-spacing: 0;
`;
const tracking_wide = css`
  letter-spacing: 0.5px;
`;

// 2.F Line Height
const leading_none = css`
  line-height: 0;
`;

const leading_tight = css`
  line-height: 1.25;
`;

const leading_normal = css`
  line-height: 1.5;
`;

const leading_loose = css`
  line-height: 1.75;
`;

// 2.G Lists
const list_reset = css`
  list-style: none;
  padding: 0;
`;

const list_inside = css`
  list-style-position: inside;
`;

const list_outside = css`
  list-style-position: outside;
`;

const list_none = css`
  list-style-type: none;
`;

const list_disc = css`
  list-style-type: disc;
`;

const list_decimal = css`
  list-style-type: decimal;
`;

// 2.H Style and Decoration
const italic = css`
  font-style: italic;
`;

const roman = css`
  font-style: normal;
`;

const uppercase = css`
  text-transform: uppercase;
`;

const lowercase = css`
  text-transform: lowercase;
`;

const capitalize = css`
  text-transform: capitalize;
`;

const normal_case = css`
  text-transform: none;
`;

const underline = css`
  text-decoration: underline;
`;

const line_through = css`
  text-decoration: line-through;
`;

const no_underline = css`
  text-decoration: none;
`;

// 2.I Text Alignment
const text_left = css`
  text-align: left;
`;

const text_center = css`
  text-align: center;
`;

const text_right = css`
  text-align: right;
`;

const text_justify = css`
  text-align: justify;
`;

// 2.J Vertical Alignment
const align_baseline = css`
  vertical-align: baseline;
`;

const align_top = css`
  vertical-align: top;
`;

const align_middle = css`
  vertical-align: middle;
`;

const align_bottom = css`
  vertical-align: bottom;
`;

const align_text_top = css`
  vertical-align: text-top;
`;

const align_text_bottom = css`
  vertical-align: text-bottom;
`;

// 2.K Whitespace & Wrapping
const whitespace_normal = css`
  white-space: normal;
`;

const whitespace_no_wrap = css`
  white-space: nowrap;
`;

const whitespace_pre = css`
  white-space: pre;
`;

const whitespace_pre_line = css`
  white-space: pre-line;
`;

const whitespace_pre_wrap = css`
  white-space: pre-wrap;
`;

const break_normal = css`
  overflow-wrap: normal;
  word-break: normal;
`;

const break_words = css`
  overflow-wrap: break-word;
`;

const break_all = css`
  word-break: break-all;
`;

const truncate = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

// 3. Backgrounds
// 3.A Background Attachment
const bg_fixed = css`
  background-attachment: fixed;
`;

const bg_local = css`
  background-attachment: local;
`;

const bg_scroll = css`
  background-attachment: scroll;
`;
// 3.B Background Color
const bg_transparent = css`
  background-color: transparent;
`;

const bg_gradient = css`
  background: linear-gradient(
    to bottom right,
    ${palette.gradient.start},
    ${palette.gradient.stop}
  );
`;

const bg_black = css`
  background-color: #22292f;
`;

const bg_gray_darkest = css`
  background-color: #3d4852;
`;

const bg_gray_darker = css`
  background-color: #606f7b;
`;

const bg_gray_dark = css`
  background-color: #8795a1;
`;

const bg_gray = css`
  background-color: #b8c2cc;
`;

const bg_gray_light = css`
  background-color: #dae1e7;
`;

const bg_gray_lighter = css`
  background-color: #f1f5f8;
`;

const bg_gray_lightest = css`
  background-color: #f8fafc;
`;

const bg_white = css`
  background-color: #ffffff;
`;

const bg_white_25 = css`
  background-color: #ffffff40;
`;

const bg_white_50 = css`
  background-color: #ffffff80;
`;

const bg_white_75 = css`
  background-color: #ffffffbf;
`;

const bg_red_darkest = css`
  background-color: #3b0d0c;
`;

const bg_red_darker = css`
  background-color: #621b18;
`;

const bg_red_dark = css`
  background-color: #cc1f1a;
`;

const bg_red = css`
  background-color: #e3342f;
`;

const bg_red_light = css`
  background-color: #ef5753;
`;

const bg_red_lighter = css`
  background-color: #f9acaa;
`;

const bg_red_lightest = css`
  background-color: #fcebea;
`;

const bg_orange_darkest = css`
  background-color: #462a16;
`;

const bg_orange_darker = css`
  background-color: #613b1f;
`;

const bg_orange_dark = css`
  background-color: #de751f;
`;

const bg_orange = css`
  background-color: #f6993f;
`;

const bg_orange_light = css`
  background-color: #faad63;
`;

const bg_orange_lighter = css`
  background-color: #fcd9b6;
`;

const bg_orange_lightest = css`
  background-color: #fff5eb;
`;

const bg_yellow_darkest = css`
  background-color: #453411;
`;

const bg_yellow_darker = css`
  background-color: #684f1d;
`;

const bg_yellow_dark = css`
  background-color: #f2d024;
`;

const bg_yellow = css`
  background-color: #ffed4a;
`;

const bg_yellow_light = css`
  background-color: #fff382;
`;

const bg_yellow_lighter = css`
  background-color: #fff9c2;
`;

const bg_yellow_lightest = css`
  background-color: #fcfbeb;
`;

const bg_green_darkest = css`
  background-color: #0f2f21;
`;

const bg_green_darker = css`
  background-color: #1a4731;
`;

const bg_green_dark = css`
  background-color: #1f9d55;
`;

const bg_green = css`
  background-color: #38c172;
`;

const bg_green_light = css`
  background-color: #51d88a;
`;

const bg_green_lighter = css`
  background-color: #a2f5bf;
`;

const bg_green_lightest = css`
  background-color: #e3fcec;
`;

const bg_teal_darkest = css`
  background-color: #0d3331;
`;

const bg_teal_darker = css`
  background-color: #20504f;
`;

const bg_teal_dark = css`
  background-color: #38a89d;
`;

const bg_teal = css`
  background-color: #4dc0b5;
`;

const bg_teal_light = css`
  background-color: #64d5ca;
`;

const bg_teal_lighter = css`
  background-color: #a0f0ed;
`;

const bg_teal_lightest = css`
  background-color: #e8fffe;
`;

const bg_blue_darkest = css`
  background-color: #12283a;
`;

const bg_blue_darker = css`
  background-color: #1c3d5a;
`;

const bg_blue_dark = css`
  background-color: #2779bd;
`;

const bg_blue = css`
  background-color: #3490dc;
`;

const bg_blue_light = css`
  background-color: #6cb2eb;
`;

const bg_blue_lighter = css`
  background-color: #bcdefa;
`;

const bg_blue_lightest = css`
  background-color: #eff8ff;
`;

const bg_indigo_darkest = css`
  background-color: #191e38;
`;

const bg_indigo_darker = css`
  background-color: #2f365f;
`;

const bg_indigo_dark = css`
  background-color: #5661b3;
`;

const bg_indigo = css`
  background-color: #6574cd;
`;

const bg_indigo_light = css`
  background-color: #7886d7;
`;

const bg_indigo_lighter = css`
  background-color: #b2b7ff;
`;

const bg_indigo_lightest = css`
  background-color: #e6e8ff;
`;

const bg_purple_darkest = css`
  background-color: #21183c;
`;

const bg_purple_darker = css`
  background-color: #382b5f;
`;

const bg_purple_dark = css`
  background-color: #794acf;
`;

const bg_purple = css`
  background-color: #9561e2;
`;

const bg_purple_light = css`
  background-color: #a779e9;
`;

const bg_purple_lighter = css`
  background-color: #d6bbfc;
`;

const bg_purple_lightest = css`
  background-color: #f3ebff;
`;

const bg_pink_darkest = css`
  background-color: #451225;
`;

const bg_pink_darker = css`
  background-color: #6f213f;
`;

const bg_pink_dark = css`
  background-color: #eb5286;
`;

const bg_pink = css`
  background-color: #f66d9b;
`;

const bg_pink_light = css`
  background-color: #fa7ea8;
`;

const bg_pink_lighter = css`
  background-color: #ffbbca;
`;

const bg_pink_lightest = css`
  background-color: #ffebef;
`;

// 3.C Background Position
const bg_bottom = css`
  background-position: bottom;
`;

const bg_center = css`
  background-position: center;
`;

const bg_left = css`
  background-position: left;
`;

const bg_left_bottom = css`
  background-position: left bottom;
`;

const bg_left_top = css`
  background-position: left top;
`;

const bg_right = css`
  background-position: right;
`;

const bg_right_bottom = css`
  background-position: right bottom;
`;

const bg_right_top = css`
  background-position: right top;
`;

const bg_top = css`
  background-position: top;
`;

// 3.D Background Repeat
const bg_repeat = css`
  background-repeat: repeat;
`;

const bg_no_repeat = css`
  background-repeat: no-repeat;
`;

const bg_repeat_x = css`
  background-repeat: repeat-x;
`;

const bg_repeat_y = css`
  background-repeat: repeat-y;
`;

// 3.E Background Size
const bg_auto = css`
  background-size: auto;
`;

const bg_cover = css`
  background-size: cover;
`;

const bg_contain = css`
  background-size: contain;
`;

// 4. Border
// 4.A Border Color

const border_box = css`
  box-sizing: border-box;
`;

const border_transparent = css`
  border-color: transparent;
`;

const border_black = css`
  border-color: #000;
`;

const border_white = css`
  border-color: #fff;
`;

const border_primary = css`
  border-color: ${palette.primary.main};
`;

const border_primary_light = css`
  border-color: ${palette.primary.light};
`;

const border_secondary = css`
  border-color: ${palette.secondary.main};
`;

const border_secondary_light = css`
  border-color: ${palette.secondary.light};
`;

const border_secondary_complement = css`
  border-color: ${palette.secondary.complement};
`;

const border_gray_100 = css`
  border-color: #f7fafc;
`;

const border_gray_200 = css`
  border-color: #edf2f7;
`;

const border_gray_300 = css`
  border-color: #e2e8f0;
`;

const border_gray_400 = css`
  border-color: #cbd5e0;
`;

const border_gray_500 = css`
  border-color: #a0aec0;
`;

const border_gray_600 = css`
  border-color: #718096;
`;

const border_gray_700 = css`
  border-color: #4a5568;
`;

const border_gray_800 = css`
  border-color: #2d3748;
`;

const border_gray_900 = css`
  border-color: #1a202c;
`;

const border_red_100 = css`
  border-color: #fff5f5;
`;

const border_red_200 = css`
  border-color: #fed7d7;
`;

const border_red_300 = css`
  border-color: #feb2b2;
`;

const border_red_400 = css`
  border-color: #fc8181;
`;

const border_red_500 = css`
  border-color: #f56565;
`;

const border_red_600 = css`
  border-color: #e53e3e;
`;

const border_red_700 = css`
  border-color: #c53030;
`;

const border_red_800 = css`
  border-color: #9b2c2c;
`;

const border_red_900 = css`
  border-color: #742a2a;
`;

const border_orange_100 = css`
  border-color: #fffaf0;
`;

const border_orange_200 = css`
  border-color: #feebc8;
`;

const border_orange_300 = css`
  border-color: #fbd38d;
`;

const border_orange_400 = css`
  border-color: #f6ad55;
`;

const border_orange_500 = css`
  border-color: #ed8936;
`;

const border_orange_600 = css`
  border-color: #dd6b20;
`;

const border_orange_700 = css`
  border-color: #c05621;
`;

const border_orange_800 = css`
  border-color: #9c4221;
`;

const border_orange_900 = css`
  border-color: #7b341e;
`;

const border_yellow_100 = css`
  border-color: #fffff0;
`;

const border_yellow_200 = css`
  border-color: #fefcbf;
`;

const border_yellow_300 = css`
  border-color: #faf089;
`;

const border_yellow_400 = css`
  border-color: #f6e05e;
`;

const border_yellow_500 = css`
  border-color: #ecc94b;
`;

const border_yellow_600 = css`
  border-color: #d69e2e;
`;

const border_yellow_700 = css`
  border-color: #b7791f;
`;

const border_yellow_800 = css`
  border-color: #975a16;
`;

const border_yellow_900 = css`
  border-color: #744210;
`;

const border_green_100 = css`
  border-color: #f0fff4;
`;

const border_green_200 = css`
  border-color: #c6f6d5;
`;

const border_green_300 = css`
  border-color: #9ae6b4;
`;

const border_green_400 = css`
  border-color: #68d391;
`;

const border_green_500 = css`
  border-color: #48bb78;
`;

const border_green_600 = css`
  border-color: #38a169;
`;

const border_green_700 = css`
  border-color: #2f855a;
`;

const border_green_800 = css`
  border-color: #276749;
`;

const border_green_900 = css`
  border-color: #22543d;
`;

const border_teal_100 = css`
  border-color: #e6fffa;
`;

const border_teal_200 = css`
  border-color: #b2f5ea;
`;

const border_teal_300 = css`
  border-color: #81e6d9;
`;

const border_teal_400 = css`
  border-color: #4fd1c5;
`;

const border_teal_500 = css`
  border-color: #38b2ac;
`;

const border_teal_600 = css`
  border-color: #319795;
`;

const border_teal_700 = css`
  border-color: #2c7a7b;
`;

const border_teal_800 = css`
  border-color: #285e61;
`;

const border_teal_900 = css`
  border-color: #234e52;
`;

const border_blue_100 = css`
  border-color: #ebf8ff;
`;

const border_blue_200 = css`
  border-color: #bee3f8;
`;

const border_blue_300 = css`
  border-color: #90cdf4;
`;

const border_blue_400 = css`
  border-color: #63b3ed;
`;

const border_blue_500 = css`
  border-color: #4299e1;
`;

const border_blue_600 = css`
  border-color: #3182ce;
`;

const border_blue_700 = css`
  border-color: #2b6cb0;
`;

const border_blue_800 = css`
  border-color: #2c5282;
`;

const border_blue_900 = css`
  border-color: #2a4365;
`;

const border_indigo_100 = css`
  border-color: #ebf4ff;
`;

const border_indigo_200 = css`
  border-color: #c3dafe;
`;

const border_indigo_300 = css`
  border-color: #a3bffa;
`;

const border_indigo_400 = css`
  border-color: #7f9cf5;
`;

const border_indigo_500 = css`
  border-color: #667eea;
`;

const border_indigo_600 = css`
  border-color: #5a67d8;
`;

const border_indigo_700 = css`
  border-color: #4c51bf;
`;

const border_indigo_800 = css`
  border-color: #434190;
`;

const border_indigo_900 = css`
  border-color: #3c366b;
`;

const border_purple_100 = css`
  border-color: #faf5ff;
`;

const border_purple_200 = css`
  border-color: #e9d8fd;
`;

const border_purple_300 = css`
  border-color: #d6bcfa;
`;

const border_purple_400 = css`
  border-color: #b794f4;
`;

const border_purple_500 = css`
  border-color: #9f7aea;
`;

const border_purple_600 = css`
  border-color: #805ad5;
`;

const border_purple_700 = css`
  border-color: #6b46c1;
`;

const border_purple_800 = css`
  border-color: #553c9a;
`;

const border_purple_900 = css`
  border-color: #44337a;
`;

const border_pink_100 = css`
  border-color: #fff5f7;
`;

const border_pink_200 = css`
  border-color: #fed7e2;
`;

const border_pink_300 = css`
  border-color: #fbb6ce;
`;

const border_pink_400 = css`
  border-color: #f687b3;
`;

const border_pink_500 = css`
  border-color: #ed64a6;
`;

const border_pink_600 = css`
  border-color: #d53f8c;
`;

const border_pink_700 = css`
  border-color: #b83280;
`;

const border_pink_800 = css`
  border-color: #97266d;
`;

const border_pink_900 = css`
  border-color: #702459;
`;

// 4.B Border Style
const border_solid = css`
  border-style: solid;
`;

const border_dashed = css`
  border-style: dashed;
`;

const border_dotted = css`
  border-style: dotted;
`;

const border_none = css`
  border-style: none;
`;

// 4.C Border Width
const border_0 = css`
  border-width: 0;
`;

const border_1 = css`
  border-width: 1px;
`;

const border_2 = css`
  border-width: 2px;
`;

const border_4 = css`
  border-width: 4px;
`;

const border_8 = css`
  border-width: 8px;
`;

const border = css`
  border-width: 1px;
`;

const border_top_0 = css`
  border-top-width: 0;
`;

const border_right_0 = css`
  border-right-width: 0;
`;

const border_bottom_0 = css`
  border-bottom-width: 0;
`;

const border_left_0 = css`
  border-left-width: 0;
`;

const border_top_2 = css`
  border-top-width: 2px;
`;

const border_right_2 = css`
  border-right-width: 2px;
`;

const border_bottom_2 = css`
  border-bottom-width: 2px;
`;

const border_left_2 = css`
  border-left-width: 2px;
`;

const border_top_4 = css`
  border-top-width: 4px;
`;

const border_right_4 = css`
  border-right-width: 4px;
`;

const border_bottom_4 = css`
  border-bottom-width: 4px;
`;

const border_left_4 = css`
  border-left-width: 4px;
`;

const border_top_8 = css`
  border-top-width: 8px;
`;

const border_right_8 = css`
  border-right-width: 8px;
`;

const border_bottom_8 = css`
  border-bottom-width: 8px;
`;

const border_left_8 = css`
  border-left-width: 8px;
`;

const border_top = css`
  border-top-width: 1px;
`;

const border_right = css`
  border-right-width: 1px;
`;

const border_bottom = css`
  border-bottom-width: 1px;
`;

const border_left = css`
  border-left-width: 1px;
`;

// 4.D Border Radius
const rounded_none = css`
  border-radius: 0;
`;

const rounded_sm = css`
  border-radius: 0.125rem;
`;

const rounded = css`
  border-radius: 0.25rem;
`;

const rounded_lg = css`
  border-radius: 0.5rem;
`;

const rounded_full = css`
  border-radius: 9999px;
`;

const rounded_top_none = css`
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;

const rounded_right_none = css`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

const rounded_bottom_none = css`
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
`;

const rounded_left_none = css`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

const rounded_top_sm = css`
  border-top-left-radius: 0.125rem;
  border-top-right-radius: 0.125rem;
`;

const rounded_right_sm = css`
  border-top-right-radius: 0.125rem;
  border-bottom-right-radius: 0.125rem;
`;

const rounded_bottom_sm = css`
  border-bottom-right-radius: 0.125rem;
  border-bottom-left-radius: 0.125rem;
`;

const rounded_left_sm = css`
  border-top-left-radius: 0.125rem;
  border-bottom-left-radius: 0.125rem;
`;

const rounded_top = css`
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
`;

const rounded_right = css`
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
`;

const rounded_bottom = css`
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
`;

const rounded_left = css`
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
`;

const rounded_top_lg = css`
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
`;

const rounded_right_lg = css`
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
`;

const rounded_bottom_lg = css`
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
`;

const rounded_left_lg = css`
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
`;

const rounded_top_full = css`
  border-top-left-radius: 9999px;
  border-top-right-radius: 9999px;
`;

const rounded_right_full = css`
  border-top-right-radius: 9999px;
  border-bottom-right-radius: 9999px;
`;

const rounded_bottom_full = css`
  border-bottom-right-radius: 9999px;
  border-bottom-left-radius: 9999px;
`;

const rounded_left_full = css`
  border-top-left-radius: 9999px;
  border-bottom-left-radius: 9999px;
`;

const rounded_top_left_none = css`
  border-top-left-radius: 0;
`;

const rounded_top_right_none = css`
  border-top-right-radius: 0;
`;

const rounded_bottom_right_none = css`
  border-bottom-right-radius: 0;
`;

const rounded_bottom_left_none = css`
  border-bottom-left-radius: 0;
`;

const rounded_top_left_sm = css`
  border-top-left-radius: 0.125rem;
`;

const rounded_top_right_sm = css`
  border-top-right-radius: 0.125rem;
`;

const rounded_bottom_right_sm = css`
  border-bottom-right-radius: 0.125rem;
`;

const rounded_bottom_left_sm = css`
  border-bottom-left-radius: 0.125rem;
`;

const rounded_top_left = css`
  border-top-left-radius: 0.25rem;
`;

const rounded_top_right = css`
  border-top-right-radius: 0.25rem;
`;

const rounded_bottom_right = css`
  border-bottom-right-radius: 0.25rem;
`;

const rounded_bottom_left = css`
  border-bottom-left-radius: 0.25rem;
`;

const rounded_top_left_lg = css`
  border-top-left-radius: 0.5rem;
`;

const rounded_top_right_lg = css`
  border-top-right-radius: .5rem;
}`;

const rounded_bottom_right_lg = css`
  border-bottom-right-radius: 0.5rem;
`;

const rounded_bottom_left_lg = css`
  border-bottom-left-radius: 0.5rem;
`;

const rounded_top_left_full = css`
  border-top-left-radius: 9999px;
`;

const rounded_top_right_full = css`
  border-top-right-radius: 9999px;
`;

const rounded_bottom_right_full = css`
  border-bottom-right-radius: 9999px;
`;

const rounded_bottom_left_full = css`
  border-bottom-left-radius: 9999px;
`;

// 5. Flexbox
// 5.A Flex Direction
const flex_row = css`
  flex-direction: row;
`;

const flex_row_reverse = css`
  flex-direction: row-reverse;
`;

const flex_col = css`
  flex-direction: column;
`;

const flex_col_reverse = css`
  flex-direction: column-reverse;
`;

// 5.B Flex Wrapping
const flex_wrap = css`
  flex-wrap: wrap;
`;

const flex_wrap_reverse = css`
  flex-wrap: wrap-reverse;
`;

const flex_no_wrap = css`
  flex-wrap: nowrap;
`;

// 5.C Align Items
const items_start = css`
  align-items: flex-start;
`;

const items_end = css`
  align-items: flex-end;
`;

const items_center = css`
  align-items: center;
`;

const items_baseline = css`
  align-items: baseline;
`;

const items_stretch = css`
  align-items: stretch;
`;

// 5.D Align Content
const content_center = css`
  align-content: center;
`;

const content_start = css`
  align-content: flex-start;
`;

const content_end = css`
  align-content: flex-end;
`;

const content_between = css`
  align-content: space-between;
`;

const content_around = css`
  align-content: space-around;
`;

// 5.E Align Self
const self_auto = css`
  align-self: auto;
`;

const self_start = css`
  align-self: flex-start;
`;

const self_end = css`
  align-self: flex-end;
`;

const self_center = css`
  align-self: center;
`;

const self_stretch = css`
  align-self: stretch;
`;

// 5.F Justify Content
const justify_start = css`
  justify-content: flex-start;
`;

const justify_end = css`
  justify-content: flex-end;
`;

const justify_center = css`
  justify-content: center;
`;

const justify_between = css`
  justify-content: space-between;
`;

const justify_around = css`
  justify-content: space-around;
`;

// 5.G Flex, Grow & Shrink
const flex_initial = css`
  flex: 0 1 auto;
`;

const flex_auto = css`
  flex: 0 0 auto;
`;

const flex_none = css`
  flex: none;
`;

const flex_grow_0 = css`
  flex-grow: 0;
`;

const flex_grow = css`
  flex-grow: 1;
`;

const flex_shrink_0 = css`
  flex-shrink: 0;
`;

const flex_shrink = css`
  flex-shrink: 1;
`;

// 6. Spacing

// 6.A Spacing

const mg_auto = css`
  margin: auto;
`;

const mg_none = css`
  margin: 0;
`;

const mg_xxs = css`
  margin: ${spaces.xxs};
`;

const mg_xs = css`
  margin: ${spaces.xs};
`;

const mg_sm = css`
  margin: ${spaces.sm};
`;

const mg_md = css`
  margin: ${spaces.md};
`;

const mg_lg = css`
  margin: ${spaces.lg};
`;

const mg_xl = css`
  margin: ${spaces.xl};
`;

const mg_xxl = css`
  margin: ${spaces.xxl};
`;

const mg_xxxl = css`
  margin: ${spaces.xxxl};
`;

const mg_xxxxl = css`
  margin: ${spaces.xxxxl};
`;

const mg_xxxxxl = css`
  margin: ${spaces.xxxxxl};
`;

const mg_xxxxxxl = css`
  margin: ${spaces.xxxxxxl};
`;

const mg_top_auto = css`
  margin-top: auto;
`;

const mg_top_none = css`
  margin-top: 0px;
`;

const mg_top_xxs = css`
  margin-top: ${spaces.xxs};
`;

const mg_top_xs = css`
  margin-top: ${spaces.xs};
`;

const mg_top_sm = css`
  margin-top: ${spaces.sm};
`;

const mg_top_md = css`
  margin-top: ${spaces.md};
`;

const mg_top_lg = css`
  margin-top: ${spaces.lg};
`;

const mg_top_xl = css`
  margin-top: ${spaces.xl};
`;

const mg_top_xxl = css`
  margin-top: ${spaces.xxl};
`;

const mg_top_xxxl = css`
  margin-top: ${spaces.xxxl};
`;

const mg_top_xxxxl = css`
  margin-top: ${spaces.xxxxl};
`;

const mg_top_xxxxxl = css`
  margin-top: ${spaces.xxxxxl};
`;

const mg_top_xxxxxxl = css`
  margin-top: ${spaces.xxxxxxl};
`;

const mg_left_auto = css`
  margin-left: auto;
`;

const mg_left_none = css`
  margin-left: 0px;
`;

const mg_left_xxs = css`
  margin-left: ${spaces.xxs};
`;

const mg_left_xs = css`
  margin-left: ${spaces.xs};
`;

const mg_left_sm = css`
  margin-left: ${spaces.sm};
`;

const mg_left_md = css`
  margin-left: ${spaces.md};
`;

const mg_left_lg = css`
  margin-left: ${spaces.lg};
`;

const mg_left_xl = css`
  margin-left: ${spaces.xl};
`;

const mg_left_xxl = css`
  margin-left: ${spaces.xxl};
`;

const mg_left_xxxl = css`
  margin-left: ${spaces.xxxl};
`;

const mg_left_xxxxl = css`
  margin-left: ${spaces.xxxxl};
`;

const mg_left_xxxxxl = css`
  margin-left: ${spaces.xxxxxl};
`;

const mg_left_xxxxxxl = css`
  margin-left: ${spaces.xxxxxxl};
`;

const mg_right_auto = css`
  margin-right: auto;
`;

const mg_right_none = css`
  margin-right: 0px;
`;

const mg_right_xxs = css`
  margin-right: ${spaces.xxs};
`;

const mg_right_xs = css`
  margin-right: ${spaces.xs};
`;

const mg_right_sm = css`
  margin-right: ${spaces.sm};
`;

const mg_right_md = css`
  margin-right: ${spaces.md};
`;

const mg_right_lg = css`
  margin-right: ${spaces.lg};
`;

const mg_right_xl = css`
  margin-right: ${spaces.xl};
`;

const mg_right_xxl = css`
  margin-right: ${spaces.xxl};
`;

const mg_right_xxxl = css`
  margin-right: ${spaces.xxxl};
`;

const mg_right_xxxxl = css`
  margin-right: ${spaces.xxxxl};
`;

const mg_right_xxxxxl = css`
  margin-right: ${spaces.xxxxxl};
`;

const mg_right_xxxxxxl = css`
  margin-right: ${spaces.xxxxxxl};
`;

const mg_bottom_auto = css`
  margin-bottom: auto;
`;

const mg_bottom_none = css`
  margin-bottom: 0px;
`;

const mg_bottom_xxs = css`
  margin-bottom: ${spaces.xxs};
`;

const mg_bottom_xs = css`
  margin-bottom: ${spaces.xs};
`;

const mg_bottom_sm = css`
  margin-bottom: ${spaces.sm};
`;

const mg_bottom_md = css`
  margin-bottom: ${spaces.md};
`;

const mg_bottom_lg = css`
  margin-bottom: ${spaces.lg};
`;

const mg_bottom_xl = css`
  margin-bottom: ${spaces.xl};
`;

const mg_bottom_xxl = css`
  margin-bottom: ${spaces.xxl};
`;

const mg_bottom_xxxl = css`
  margin-bottom: ${spaces.xxxl};
`;

const mg_bottom_xxxxl = css`
  margin-bottom: ${spaces.xxxxl};
`;

const mg_bottom_xxxxxl = css`
  margin-bottom: ${spaces.xxxxxl};
`;

const mg_bottom_xxxxxxl = css`
  margin-bottom: ${spaces.xxxxxxl};
`;

const mg_x_none = css`
  margin-left: 0px;
  margin-right: 0px;
`;

const mg_x_xxs = css`
  margin-left: ${spaces.xxs};
  margin-right: ${spaces.xxs};
`;

const mg_x_xs = css`
  margin-left: ${spaces.xs};
  margin-right: ${spaces.xs};
`;

const mg_x_sm = css`
  margin-left: ${spaces.sm};
  margin-right: ${spaces.sm};
`;

const mg_x_md = css`
  margin-left: ${spaces.md};
  margin-right: ${spaces.md};
`;

const mg_x_lg = css`
  margin-left: ${spaces.lg};
  margin-right: ${spaces.lg};
`;

const mg_x_xl = css`
  margin-left: ${spaces.xl};
  margin-right: ${spaces.xl};
`;

const mg_x_xxl = css`
  margin-left: ${spaces.xxl};
  margin-right: ${spaces.xxl};
`;

const mg_x_xxxl = css`
  margin-left: ${spaces.xxxl};
  margin-right: ${spaces.xxxl};
`;

const mg_x_xxxxl = css`
  margin-left: ${spaces.xxxxl};
  margin-right: ${spaces.xxxxl};
`;

const mg_x_xxxxxl = css`
  margin-left: ${spaces.xxxxxl};
  margin-right: ${spaces.xxxxxl};
`;

const mg_x_xxxxxxl = css`
  margin-left: ${spaces.xxxxxxl};
  margin-right: ${spaces.xxxxxxl};
`;

const mg_y_none = css`
  margin-top: 0px;
  margin-bottom: 0px;
`;

const mg_y_xxs = css`
  margin-top: ${spaces.xxs};
  margin-bottom: ${spaces.xxs};
`;

const mg_y_xs = css`
  margin-top: ${spaces.xs};
  margin-bottom: ${spaces.xs};
`;

const mg_y_sm = css`
  margin-top: ${spaces.sm};
  margin-bottom: ${spaces.sm};
`;

const mg_y_md = css`
  margin-top: ${spaces.md};
  margin-bottom: ${spaces.md};
`;

const mg_y_lg = css`
  margin-top: ${spaces.lg};
  margin-bottom: ${spaces.lg};
`;

const mg_y_xl = css`
  margin-top: ${spaces.xl};
  margin-bottom: ${spaces.xl};
`;

const mg_y_xxl = css`
  margin-top: ${spaces.xxl};
  margin-bottom: ${spaces.xxl};
`;

const mg_y_xxxl = css`
  margin-top: ${spaces.xxxl};
  margin-bottom: ${spaces.xxxl};
`;

const mg_y_xxxxl = css`
  margin-top: ${spaces.xxxxl};
  margin-bottom: ${spaces.xxxxl};
`;

const mg_y_xxxxxl = css`
  margin-top: ${spaces.xxxxxl};
  margin-bottom: ${spaces.xxxxxl};
`;

const mg_y_xxxxxxl = css`
  margin-top: ${spaces.xxxxxxl};
  margin-bottom: ${spaces.xxxxxxl};
`;

// 6.B Padding
const pd_none = css`
  padding: 0;
`;

const pd_xxs = css`
  padding: ${spaces.xxs};
`;

const pd_xs = css`
  padding: ${spaces.xs};
`;

const pd_sm = css`
  padding: ${spaces.sm};
`;

const pd_md = css`
  padding: ${spaces.md};
`;

const pd_lg = css`
  padding: ${spaces.lg};
`;

const pd_xl = css`
  padding: ${spaces.xl};
`;

const pd_xxl = css`
  padding: ${spaces.xxl};
`;

const pd_xxxl = css`
  padding: ${spaces.xxxl};
`;

const pd_xxxxl = css`
  padding: ${spaces.xxxxl};
`;

const pd_xxxxxl = css`
  padding: ${spaces.xxxxxl};
`;

const pd_xxxxxxl = css`
  padding: ${spaces.xxxxxxl};
`;

const pd_top_none = css`
  padding-top: 0px;
`;

const pd_top_xxs = css`
  padding-top: ${spaces.xxs};
`;

const pd_top_xs = css`
  padding-top: ${spaces.xs};
`;

const pd_top_sm = css`
  padding-top: ${spaces.sm};
`;

const pd_top_md = css`
  padding-top: ${spaces.md};
`;

const pd_top_lg = css`
  padding-top: ${spaces.lg};
`;

const pd_top_xl = css`
  padding-top: ${spaces.xl};
`;

const pd_top_xxl = css`
  padding-top: ${spaces.xxl};
`;

const pd_top_xxxl = css`
  padding-top: ${spaces.xxxl};
`;

const pd_top_xxxxl = css`
  padding-top: ${spaces.xxxxl};
`;

const pd_top_xxxxxl = css`
  padding-top: ${spaces.xxxxxl};
`;

const pd_top_xxxxxxl = css`
  padding-top: ${spaces.xxxxxxl};
`;

const pd_left_none = css`
  padding-left: 0px;
`;

const pd_left_xxs = css`
  padding-left: ${spaces.xxs};
`;

const pd_left_xs = css`
  padding-left: ${spaces.xs};
`;

const pd_left_sm = css`
  padding-left: ${spaces.sm};
`;

const pd_left_md = css`
  padding-left: ${spaces.md};
`;

const pd_left_lg = css`
  padding-left: ${spaces.lg};
`;

const pd_left_xl = css`
  padding-left: ${spaces.xl};
`;

const pd_left_xxl = css`
  padding-left: ${spaces.xxl};
`;

const pd_left_xxxl = css`
  padding-left: ${spaces.xxxl};
`;

const pd_left_xxxxl = css`
  padding-left: ${spaces.xxxxl};
`;

const pd_left_xxxxxl = css`
  padding-left: ${spaces.xxxxxl};
`;

const pd_left_xxxxxxl = css`
  padding-left: ${spaces.xxxxxxl};
`;

const pd_right_none = css`
  padding-right: 0px;
`;

const pd_right_xxs = css`
  padding-right: ${spaces.xxs};
`;

const pd_right_xs = css`
  padding-right: ${spaces.xs};
`;

const pd_right_sm = css`
  padding-right: ${spaces.sm};
`;

const pd_right_md = css`
  padding-right: ${spaces.md};
`;

const pd_right_lg = css`
  padding-right: ${spaces.lg};
`;

const pd_right_xl = css`
  padding-right: ${spaces.xl};
`;

const pd_right_xxl = css`
  padding-right: ${spaces.xxl};
`;

const pd_right_xxxl = css`
  padding-right: ${spaces.xxxl};
`;

const pd_right_xxxxl = css`
  padding-right: ${spaces.xxxxl};
`;

const pd_right_xxxxxl = css`
  padding-right: ${spaces.xxxxxl};
`;

const pd_right_xxxxxxl = css`
  padding-right: ${spaces.xxxxxxl};
`;

const pd_bottom_none = css`
  padding-bottom: 0px;
`;

const pd_bottom_xxs = css`
  padding-bottom: ${spaces.xxs};
`;

const pd_bottom_xs = css`
  padding-bottom: ${spaces.xs};
`;

const pd_bottom_sm = css`
  padding-bottom: ${spaces.sm};
`;

const pd_bottom_md = css`
  padding-bottom: ${spaces.md};
`;

const pd_bottom_lg = css`
  padding-bottom: ${spaces.lg};
`;

const pd_bottom_xl = css`
  padding-bottom: ${spaces.xl};
`;

const pd_bottom_xxl = css`
  padding-bottom: ${spaces.xxl};
`;

const pd_bottom_xxxl = css`
  padding-bottom: ${spaces.xxxl};
`;

const pd_bottom_xxxxl = css`
  padding-bottom: ${spaces.xxxxl};
`;

const pd_bottom_xxxxxl = css`
  padding-bottom: ${spaces.xxxxxl};
`;

const pd_bottom_xxxxxxl = css`
  padding-bottom: ${spaces.xxxxxxl};
`;

const pd_x_none = css`
  padding-left: 0px;
  padding-right: 0px;
`;

const pd_x_xxs = css`
  padding-left: ${spaces.xxs};
  padding-right: ${spaces.xxs};
`;

const pd_x_xs = css`
  padding-left: ${spaces.xs};
  padding-right: ${spaces.xs};
`;

const pd_x_sm = css`
  padding-left: ${spaces.sm};
  padding-right: ${spaces.sm};
`;

const pd_x_md = css`
  padding-left: ${spaces.md};
  padding-right: ${spaces.md};
`;

const pd_x_lg = css`
  padding-left: ${spaces.lg};
  padding-right: ${spaces.lg};
`;

const pd_x_xl = css`
  padding-left: ${spaces.xl};
  padding-right: ${spaces.xl};
`;

const pd_x_xxl = css`
  padding-left: ${spaces.xxl};
  padding-right: ${spaces.xxl};
`;

const pd_x_xxxl = css`
  padding-left: ${spaces.xxxl};
  padding-right: ${spaces.xxxl};
`;

const pd_x_xxxxl = css`
  padding-left: ${spaces.xxxxl};
  padding-right: ${spaces.xxxxl};
`;

const pd_x_xxxxxl = css`
  padding-left: ${spaces.xxxxxl};
  padding-right: ${spaces.xxxxxl};
`;

const pd_x_xxxxxxl = css`
  padding-left: ${spaces.xxxxxxl};
  padding-right: ${spaces.xxxxxxl};
`;

const pd_y_none = css`
  padding-top: 0px;
  padding-bottom: 0px;
`;

const pd_y_xxs = css`
  padding-top: ${spaces.xxs};
  padding-bottom: ${spaces.xxs};
`;

const pd_y_xs = css`
  padding-top: ${spaces.xs};
  padding-bottom: ${spaces.xs};
`;

const pd_y_sm = css`
  padding-top: ${spaces.sm};
  padding-bottom: ${spaces.sm};
`;

const pd_y_md = css`
  padding-top: ${spaces.md};
  padding-bottom: ${spaces.md};
`;

const pd_y_lg = css`
  padding-top: ${spaces.lg};
  padding-bottom: ${spaces.lg};
`;

const pd_y_xl = css`
  padding-top: ${spaces.xl};
  padding-bottom: ${spaces.xl};
`;

const pd_y_xxl = css`
  padding-top: ${spaces.xxl};
  padding-bottom: ${spaces.xxl};
`;

const pd_y_xxxl = css`
  padding-top: ${spaces.xxxl};
  padding-bottom: ${spaces.xxxl};
`;

const pd_y_xxxxl = css`
  padding-top: ${spaces.xxxxl};
  padding-bottom: ${spaces.xxxxl};
`;

const pd_y_xxxxxl = css`
  padding-top: ${spaces.xxxxxl};
  padding-bottom: ${spaces.xxxxxl};
`;

const pd_y_xxxxxxl = css`
  padding-top: ${spaces.xxxxxxl};
  padding-bottom: ${spaces.xxxxxxl};
`;

// 7. Sizing

// 7.A Width

const width_auto = css`
  width: auto;
`;

const width_0 = css`
  width: 0;
`;

const width_full = css`
  width: 100%;
`;

const width_screen = css`
  width: 100vw;
`;

const min_width_0 = css`
  min-width: 0;
`;

const min_width_full = css`
  min-width: 100%;
`;

const max_width_none = css`
  max-width: none;
`;

const max_width_auto = css`
  max-width: auto;
`;

const max_width_full = css`
  max-width: 100%;
`;

// 7.B Height
const h_0 = css`
  height: 0;
`;

const h_auto = css`
  height: auto;
`;

const h_px = css`
  height: 1px;
`;

const h_full = css`
  height: 100%;
`;

const h_screen = css`
  height: 100vh;
`;

const min_h_0 = css`
  min-height: 0;
`;

const min_h_full = css`
  min-height: 100%;
`;

const min_h_screen = css`
  min-height: 100vh;
`;

const max_h_full = css`
  max-height: 100%;
`;

const max_h_screen = css`
  max-height: 100vh;
`;

// 8. Tables
// 8.A Border Collapse
const border_collapse = css`
  border-collapse: collapse;
`;

const border_separate = css`
  border-collapse: separate;
`;

// 8.B Table Layout
const table_auto = css`
  table-layout: auto;
`;

const table_fixed = css`
  table-layout: fixed;
`;

// 9. Effects
// 9.A Box Shadow
const shadow = css`
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

const shadow_md = css`
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

const shadow_lg = css`
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;

const shadow_xl = css`
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
`;

const shadow_2xl = css`
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
`;

const shadow_inner = css`
  box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
`;

const shadow_outline = css`
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
`;

const shadow_none = css`
  box-shadow: none;
`;

// 9.B Opacity
const opacity_0 = css`
  opacity: 0;
`;

const opacity_25 = css`
  opacity: 0.25;
`;

const opacity_50 = css`
  opacity: 0.5;
`;

const opacity_75 = css`
  opacity: 0.75;
`;

const opacity_100 = css`
  opacity: 1;
`;

// 10. Interactivity

// 10.A Cursor
const cursor_auto = css`
  cursor: auto;
`;

const cursor_default = css`
  cursor: default;
`;

const cursor_pointer = css`
  cursor: pointer;
`;

const cursor_wait = css`
  cursor: wait;
`;

const cursor_move = css`
  cursor: move;
`;

const cursor_not_allowed = css`
  cursor: not-allowed;
`;

// 10.B Outline
const outline_none = css`
  outline: 0;
`;

// 10.C Pointer Events
const pointer_events_none = css`
  pointer-events: none;
`;

const pointer_events_auto = css`
  pointer-events: auto;
`;

// 10.D Resize
const resize_none = css`
  resize: none;
`;

const resize_y = css`
  resize: vertical;
`;

const resize_x = css`
  resize: horizontal;
`;

const resize = css`
  resize: both;
`;

// 10.E User Select
const select_none = css`
  user-select: none;
`;

const select_text = css`
  user-select: text;
`;

// 11. SVG

// 11.A Fill & Stroke
const fill_current = css`
  fill: currentColor;
`;

const stroke_current = css`
  stroke: currentColor;
`;

export {
  // 0.1 Color
  text_color_default,
  text_color_muted,
  text_color_primary,
  text_color_primary_light,
  text_color_secondary,
  text_color_secondary_light,
  text_color_secondary_complement,
  text_color_charcoal,
  text_color_slate,
  text_color_stone,
  text_color_fog,
  text_color_whiteSmoke,
  text_color_white,
  text_color_white_25,
  text_color_white_50,
  text_color_white_75,
  // 0.2 Background Color
  bg_default,
  bg_none,
  bg_muted,
  bg_primary,
  bg_primary_25,
  bg_primary_50,
  bg_primary_75,
  bg_primary_light,
  bg_secondary,
  bg_secondary_light,
  bg_secondary_complement,
  bg_charcoal,
  bg_slate,
  bg_stone,
  bg_fog,
  bg_fog_25,
  bg_fog_50,
  bg_fog_75,
  bg_whiteSmoke,
  bg_blackHaze,
  bg_overlay,
  // 0.3 Border Color
  border_fog,
  border_slate,
  border_stone,
  border_whiteSmoke,
  border_blackHaze,
  // 0.4 Other
  content_box,
  // 1.A Display
  block,
  inline_block,
  inline,
  table,
  table_row,
  table_cell,
  hidden,
  flex,
  inline_flex,
  // 1.B Floats
  float_right,
  float_left,
  float_none,
  clearfix,
  // 1.C Object Fit
  object_contain,
  object_cover,
  object_fill,
  object_none,
  // 1.D Object Position
  object_scale_down,
  object_bottom,
  object_center,
  object_left,
  object_left_bottom,
  object_left_top,
  object_right,
  object_right_bottom,
  object_right_top,
  object_top,
  // 1.E Overflow
  overflow_auto,
  overflow_hidden,
  overflow_visible,
  overflow_scroll,
  overflow_x_auto,
  overflow_y_auto,
  overflow_x_hidden,
  overflow_y_hidden,
  overflow_x_visible,
  overflow_y_visible,
  overflow_x_scroll,
  overflow_y_scroll,
  scrolling_touch,
  scrolling_auto,
  // 1.F Position
  pos_static,
  pos_fixed,
  pos_absolute,
  pos_relative,
  pos_sticky,
  pin_t,
  pin_r,
  pin_b,
  pin_l,
  pin_y,
  pin_x,
  pin,
  pin_none,
  // 1.G Visibility
  visible,
  invisible,
  // 1.H Z-Index
  z_0,
  z_10,
  z_20,
  z_30,
  z_40,
  z_50,
  z_auto,
  // 2.A Color
  text_color_transparent,
  // 2.B Font Family
  font_primary,
  font_secondary,
  // 2.C Font Family
  font_size_xs,
  font_size_sm,
  font_size_md,
  font_size_lg,
  font_size_xl,
  font_size_xxl,
  // 2.D Font Family
  font_light,
  font_med,
  font_bold,
  // 2.E Letter Spacing
  tracking_tight,
  tracking_normal,
  tracking_wide,
  // 2.F Line Height
  leading_none,
  leading_tight,
  leading_normal,
  leading_loose,
  // 2.G Lists
  list_reset,
  list_inside,
  list_outside,
  list_none,
  list_disc,
  list_decimal,
  // 2.H Style & Decoration
  italic,
  roman,
  uppercase,
  lowercase,
  capitalize,
  normal_case,
  underline,
  line_through,
  no_underline,
  // 2.I Text Alignment
  text_left,
  text_center,
  text_right,
  text_justify,
  // 2.J Vertical Alignment
  align_baseline,
  align_top,
  align_middle,
  align_bottom,
  align_text_top,
  align_text_bottom,
  // 2.K Whitespace & Wrapping
  whitespace_normal,
  whitespace_no_wrap,
  whitespace_pre,
  whitespace_pre_line,
  whitespace_pre_wrap,
  break_normal,
  break_words,
  break_all,
  truncate,
  // 3.A Background Attachment
  bg_fixed,
  bg_local,
  bg_scroll,
  // 3.B Background Color
  bg_transparent,
  bg_gradient,
  bg_black,
  bg_gray_darkest,
  bg_gray_darker,
  bg_gray_dark,
  bg_gray,
  bg_gray_light,
  bg_gray_lighter,
  bg_gray_lightest,
  bg_white,
  bg_white_25,
  bg_white_50,
  bg_white_75,
  bg_red_darkest,
  bg_red_darker,
  bg_red_dark,
  bg_red,
  bg_red_light,
  bg_red_lighter,
  bg_red_lightest,
  bg_orange_darkest,
  bg_orange_darker,
  bg_orange_dark,
  bg_orange,
  bg_orange_light,
  bg_orange_lighter,
  bg_orange_lightest,
  bg_yellow_darkest,
  bg_yellow_darker,
  bg_yellow_dark,
  bg_yellow,
  bg_yellow_light,
  bg_yellow_lighter,
  bg_yellow_lightest,
  bg_green_darkest,
  bg_green_darker,
  bg_green_dark,
  bg_green,
  bg_green_light,
  bg_green_lighter,
  bg_green_lightest,
  bg_teal_darkest,
  bg_teal_darker,
  bg_teal_dark,
  bg_teal,
  bg_teal_light,
  bg_teal_lighter,
  bg_teal_lightest,
  bg_blue_darkest,
  bg_blue_darker,
  bg_blue_dark,
  bg_blue,
  bg_blue_light,
  bg_blue_lighter,
  bg_blue_lightest,
  bg_indigo_darkest,
  bg_indigo_darker,
  bg_indigo_dark,
  bg_indigo,
  bg_indigo_light,
  bg_indigo_lighter,
  bg_indigo_lightest,
  bg_purple_darkest,
  bg_purple_darker,
  bg_purple_dark,
  bg_purple,
  bg_purple_light,
  bg_purple_lighter,
  bg_purple_lightest,
  bg_pink_darkest,
  bg_pink_darker,
  bg_pink_dark,
  bg_pink,
  bg_pink_light,
  bg_pink_lighter,
  bg_pink_lightest,
  // 3.C Background Position
  bg_bottom,
  bg_center,
  bg_left,
  bg_left_bottom,
  bg_left_top,
  bg_right,
  bg_right_bottom,
  bg_right_top,
  bg_top,
  // 3.D Background Repeat
  bg_repeat,
  bg_no_repeat,
  bg_repeat_x,
  bg_repeat_y,
  // 3.E Background Size
  bg_auto,
  bg_cover,
  bg_contain,
  // 4.A Border Color
  border_box,
  border_transparent,
  border_black,
  border_white,
  border_primary,
  border_primary_light,
  border_secondary,
  border_secondary_light,
  border_secondary_complement,
  border_gray_100,
  border_gray_200,
  border_gray_300,
  border_gray_400,
  border_gray_500,
  border_gray_600,
  border_gray_700,
  border_gray_800,
  border_gray_900,
  border_red_100,
  border_red_200,
  border_red_300,
  border_red_400,
  border_red_500,
  border_red_600,
  border_red_700,
  border_red_800,
  border_red_900,
  border_orange_100,
  border_orange_200,
  border_orange_300,
  border_orange_400,
  border_orange_500,
  border_orange_600,
  border_orange_700,
  border_orange_800,
  border_orange_900,
  border_yellow_100,
  border_yellow_200,
  border_yellow_300,
  border_yellow_400,
  border_yellow_500,
  border_yellow_600,
  border_yellow_700,
  border_yellow_800,
  border_yellow_900,
  border_green_100,
  border_green_200,
  border_green_300,
  border_green_400,
  border_green_500,
  border_green_600,
  border_green_700,
  border_green_800,
  border_green_900,
  border_teal_100,
  border_teal_200,
  border_teal_300,
  border_teal_400,
  border_teal_500,
  border_teal_600,
  border_teal_700,
  border_teal_800,
  border_teal_900,
  border_blue_100,
  border_blue_200,
  border_blue_300,
  border_blue_400,
  border_blue_500,
  border_blue_600,
  border_blue_700,
  border_blue_800,
  border_blue_900,
  border_indigo_100,
  border_indigo_200,
  border_indigo_300,
  border_indigo_400,
  border_indigo_500,
  border_indigo_600,
  border_indigo_700,
  border_indigo_800,
  border_indigo_900,
  border_purple_100,
  border_purple_200,
  border_purple_300,
  border_purple_400,
  border_purple_500,
  border_purple_600,
  border_purple_700,
  border_purple_800,
  border_purple_900,
  border_pink_100,
  border_pink_200,
  border_pink_300,
  border_pink_400,
  border_pink_500,
  border_pink_600,
  border_pink_700,
  border_pink_800,
  border_pink_900,
  // 4.B Border Style
  border_solid,
  border_dashed,
  border_dotted,
  border_none,
  // 4.C Border Width
  border_0,
  border_1,
  border_2,
  border_4,
  border_8,
  border,
  border_top_0,
  border_right_0,
  border_bottom_0,
  border_left_0,
  border_top_2,
  border_right_2,
  border_bottom_2,
  border_left_2,
  border_top_4,
  border_right_4,
  border_bottom_4,
  border_left_4,
  border_top_8,
  border_right_8,
  border_bottom_8,
  border_left_8,
  border_top,
  border_right,
  border_bottom,
  border_left,
  // 4.D Border Radius
  rounded_none,
  rounded_sm,
  rounded,
  rounded_lg,
  rounded_full,
  rounded_top_none,
  rounded_right_none,
  rounded_bottom_none,
  rounded_left_none,
  rounded_top_sm,
  rounded_right_sm,
  rounded_bottom_sm,
  rounded_left_sm,
  rounded_top,
  rounded_right,
  rounded_bottom,
  rounded_left,
  rounded_top_lg,
  rounded_right_lg,
  rounded_bottom_lg,
  rounded_left_lg,
  rounded_top_full,
  rounded_right_full,
  rounded_bottom_full,
  rounded_left_full,
  rounded_top_left_none,
  rounded_top_right_none,
  rounded_bottom_right_none,
  rounded_bottom_left_none,
  rounded_top_left_sm,
  rounded_top_right_sm,
  rounded_bottom_right_sm,
  rounded_bottom_left_sm,
  rounded_top_left,
  rounded_top_right,
  rounded_bottom_right,
  rounded_bottom_left,
  rounded_top_left_lg,
  rounded_top_right_lg,
  rounded_bottom_right_lg,
  rounded_bottom_left_lg,
  rounded_top_left_full,
  rounded_top_right_full,
  rounded_bottom_right_full,
  rounded_bottom_left_full,
  // 5.A Flex Direction
  flex_row,
  flex_row_reverse,
  flex_col,
  flex_col_reverse,
  // 5.B Flex Wrapping
  flex_wrap,
  flex_wrap_reverse,
  flex_no_wrap,
  // 5.C Align Items
  items_start,
  items_end,
  items_center,
  items_baseline,
  items_stretch,
  // 5.D Align Content
  content_center,
  content_start,
  content_end,
  content_between,
  content_around,
  // 5.E Align Self
  self_auto,
  self_start,
  self_end,
  self_center,
  self_stretch,
  // 5.F Justify Content
  justify_start,
  justify_center,
  justify_end,
  justify_between,
  justify_around,
  // 5.G Flex, Grow & Shrink
  flex_initial,
  flex_auto,
  flex_none,
  flex_grow_0,
  flex_grow,
  flex_shrink_0,
  flex_shrink,
  // 6.A Margin
  mg_auto,
  mg_none,
  mg_xxs,
  mg_xs,
  mg_sm,
  mg_md,
  mg_lg,
  mg_xl,
  mg_xxl,
  mg_xxxl,
  mg_xxxxl,
  mg_xxxxxl,
  mg_xxxxxxl,
  mg_top_auto,
  mg_top_none,
  mg_top_xxs,
  mg_top_xs,
  mg_top_sm,
  mg_top_md,
  mg_top_lg,
  mg_top_xl,
  mg_top_xxl,
  mg_top_xxxl,
  mg_top_xxxxl,
  mg_top_xxxxxl,
  mg_top_xxxxxxl,
  mg_left_auto,
  mg_left_none,
  mg_left_xxs,
  mg_left_xs,
  mg_left_sm,
  mg_left_md,
  mg_left_lg,
  mg_left_xl,
  mg_left_xxl,
  mg_left_xxxl,
  mg_left_xxxxl,
  mg_left_xxxxxl,
  mg_left_xxxxxxl,
  mg_right_auto,
  mg_right_none,
  mg_right_xxs,
  mg_right_xs,
  mg_right_sm,
  mg_right_md,
  mg_right_lg,
  mg_right_xl,
  mg_right_xxl,
  mg_right_xxxl,
  mg_right_xxxxl,
  mg_right_xxxxxl,
  mg_right_xxxxxxl,
  mg_bottom_auto,
  mg_bottom_none,
  mg_bottom_xxs,
  mg_bottom_xs,
  mg_bottom_sm,
  mg_bottom_md,
  mg_bottom_lg,
  mg_bottom_xl,
  mg_bottom_xxl,
  mg_bottom_xxxl,
  mg_bottom_xxxxl,
  mg_bottom_xxxxxl,
  mg_bottom_xxxxxxl,
  mg_x_none,
  mg_x_xxs,
  mg_x_xs,
  mg_x_sm,
  mg_x_md,
  mg_x_lg,
  mg_x_xl,
  mg_x_xxl,
  mg_x_xxxl,
  mg_x_xxxxl,
  mg_x_xxxxxl,
  mg_x_xxxxxxl,
  mg_y_none,
  mg_y_xxs,
  mg_y_xs,
  mg_y_sm,
  mg_y_md,
  mg_y_lg,
  mg_y_xl,
  mg_y_xxl,
  mg_y_xxxl,
  mg_y_xxxxl,
  mg_y_xxxxxl,
  mg_y_xxxxxxl,
  // 6.B Padding
  pd_none,
  pd_xxs,
  pd_xs,
  pd_sm,
  pd_md,
  pd_lg,
  pd_xl,
  pd_xxl,
  pd_xxxl,
  pd_xxxxl,
  pd_xxxxxl,
  pd_xxxxxxl,
  pd_top_none,
  pd_top_xxs,
  pd_top_xs,
  pd_top_sm,
  pd_top_md,
  pd_top_lg,
  pd_top_xl,
  pd_top_xxl,
  pd_top_xxxl,
  pd_top_xxxxl,
  pd_top_xxxxxl,
  pd_top_xxxxxxl,
  pd_left_none,
  pd_left_xxs,
  pd_left_xs,
  pd_left_sm,
  pd_left_md,
  pd_left_lg,
  pd_left_xl,
  pd_left_xxl,
  pd_left_xxxl,
  pd_left_xxxxl,
  pd_left_xxxxxl,
  pd_left_xxxxxxl,
  pd_right_none,
  pd_right_xxs,
  pd_right_xs,
  pd_right_sm,
  pd_right_md,
  pd_right_lg,
  pd_right_xl,
  pd_right_xxl,
  pd_right_xxxl,
  pd_right_xxxxl,
  pd_right_xxxxxl,
  pd_right_xxxxxxl,
  pd_bottom_none,
  pd_bottom_xxs,
  pd_bottom_xs,
  pd_bottom_sm,
  pd_bottom_md,
  pd_bottom_lg,
  pd_bottom_xl,
  pd_bottom_xxl,
  pd_bottom_xxxl,
  pd_bottom_xxxxl,
  pd_bottom_xxxxxl,
  pd_bottom_xxxxxxl,
  pd_x_none,
  pd_x_xxs,
  pd_x_xs,
  pd_x_sm,
  pd_x_md,
  pd_x_lg,
  pd_x_xl,
  pd_x_xxl,
  pd_x_xxxl,
  pd_x_xxxxl,
  pd_x_xxxxxl,
  pd_x_xxxxxxl,
  pd_y_none,
  pd_y_xxs,
  pd_y_xs,
  pd_y_sm,
  pd_y_md,
  pd_y_lg,
  pd_y_xl,
  pd_y_xxl,
  pd_y_xxxl,
  pd_y_xxxxl,
  pd_y_xxxxxl,
  pd_y_xxxxxxl,
  // 7.A Width
  width_auto,
  width_0,
  width_full,
  width_screen,
  min_width_0,
  min_width_full,
  max_width_none,
  max_width_auto,
  max_width_full,
  // 7.B Height
  h_0,
  h_auto,
  h_px,
  h_full,
  h_screen,
  min_h_0,
  min_h_full,
  min_h_screen,
  max_h_full,
  max_h_screen,
  // 8.A Border Collapse
  border_collapse,
  border_separate,
  // 8.B Table Layout
  table_auto,
  table_fixed,
  // 9.A Box Shadow
  shadow,
  shadow_md,
  shadow_lg,
  shadow_xl,
  shadow_2xl,
  shadow_inner,
  shadow_outline,
  shadow_none,
  // 9.B Opacity
  opacity_0,
  opacity_25,
  opacity_50,
  opacity_75,
  opacity_100,
  // 10.A Cursor
  cursor_auto,
  cursor_default,
  cursor_pointer,
  cursor_wait,
  cursor_move,
  cursor_not_allowed,
  // 10.B Outline
  outline_none,
  // 10.C Pointer Events
  pointer_events_none,
  pointer_events_auto,
  // 10.D Resize
  resize_none,
  resize_y,
  resize_x,
  resize,
  // 10.E User Select
  select_none,
  select_text,
  // 11.A Fill & Stroke
  fill_current,
  stroke_current,
};
