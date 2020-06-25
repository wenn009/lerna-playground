/*
  MIT License

  Copyright (c) 2016 heeyeun

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/

/**
 * Abstract class that includes all of the colors from the open-color project.
 * https://github.com/yeun/open-color
 */
abstract class OpenColor {
  gray0: string = '#f8f9fa';
  gray1: string = '#f1f3f5';
  gray2: string = '#e9ecef';
  gray3: string = '#dee2e6';
  gray4: string = '#ced4da';
  gray5: string = '#adb5bd';
  gray6: string = '#868e96';
  gray7: string = '#495057';
  gray8: string = '#343a40';
  gray9: string = '#212529';
  red0: string = '#fff5f5';
  red1: string = '#ffe3e3';
  red2: string = '#ffc9c9';
  red3: string = '#ffa8a8';
  red4: string = '#ff8787';
  red5: string = '#ff6b6b';
  red6: string = '#fa5252';
  red7: string = '#f03e3e';
  red8: string = '#e03131';
  red9: string = '#c92a2a';
  pink0: string = '#fff0f6';
  pink1: string = '#ffdeeb';
  pink2: string = '#fcc2d7';
  pink3: string = '#faa2c1';
  pink4: string = '#f783ac';
  pink5: string = '#f06595';
  pink6: string = '#e64980';
  pink7: string = '#d6336c';
  pink8: string = '#c2255c';
  pink9: string = '#a61e4d';
  grape0: string = '#f8f0fc';
  grape1: string = '#f3d9fa';
  grape2: string = '#eebefa';
  grape3: string = '#e599f7';
  grape4: string = '#da77f2';
  grape5: string = '#cc5de8';
  grape6: string = '#be4bdb';
  grape7: string = '#ae3ec9';
  grape8: string = '#9c36b5';
  grape9: string = '#862e9c';
  violet0: string = '#f3f0ff';
  violet1: string = '#e5dbff';
  violet2: string = '#d0bfff';
  violet3: string = '#b197fc';
  violet4: string = '#9775fa';
  violet5: string = '#845ef7';
  violet6: string = '#7950f2';
  violet7: string = '#7048e8';
  violet8: string = '#6741d9';
  violet9: string = '#5f3dc4';
  indigo0: string = '#edf2ff';
  indigo1: string = '#dbe4ff';
  indigo2: string = '#bac8ff';
  indigo3: string = '#91a7ff';
  indigo4: string = '#748ffc';
  indigo5: string = '#5c7cfa';
  indigo6: string = '#4c6ef5';
  indigo7: string = '#4263eb';
  indigo8: string = '#3b5bdb';
  indigo9: string = '#364fc7';
  blue0: string = '#e7f5ff';
  blue1: string = '#d0ebff';
  blue2: string = '#a5d8ff';
  blue3: string = '#74c0fc';
  blue4: string = '#4dabf7';
  blue5: string = '#339af0';
  blue6: string = '#228be6';
  blue7: string = '#1c7ed6';
  blue8: string = '#1971c2';
  blue9: string = '#1864ab';
  cyan0: string = '#e3fafc';
  cyan1: string = '#c5f6fa';
  cyan2: string = '#99e9f2';
  cyan3: string = '#66d9e8';
  cyan4: string = '#3bc9db';
  cyan5: string = '#22b8cf';
  cyan6: string = '#15aabf';
  cyan7: string = '#1098ad';
  cyan8: string = '#0c8599';
  cyan9: string = '#0b7285';
  teal0: string = '#e6fcf5';
  teal1: string = '#c3fae8';
  teal2: string = '#96f2d7';
  teal3: string = '#63e6be';
  teal4: string = '#38d9a9';
  teal5: string = '#20c997';
  teal6: string = '#12b886';
  teal7: string = '#0ca678';
  teal8: string = '#099268';
  teal9: string = '#087f5b';
  green0: string = '#ebfbee';
  green1: string = '#d3f9d8';
  green2: string = '#b2f2bb';
  green3: string = '#8ce99a';
  green4: string = '#69db7c';
  green5: string = '#51cf66';
  green6: string = '#40c057';
  green7: string = '#37b24d';
  green8: string = '#2f9e44';
  green9: string = '#2b8a3e';
  lime0: string = '#f4fce3';
  lime1: string = '#e9fac8';
  lime2: string = '#d8f5a2';
  lime3: string = '#c0eb75';
  lime4: string = '#a9e34b';
  lime5: string = '#94d82d';
  lime6: string = '#82c91e';
  lime7: string = '#74b816';
  lime8: string = '#66a80f';
  lime9: string = '#5c940d';
  yellow0: string = '#fff9db';
  yellow1: string = '#fff3bf';
  yellow2: string = '#ffec99';
  yellow3: string = '#ffe066';
  yellow4: string = '#ffd43b';
  yellow5: string = '#fcc419';
  yellow6: string = '#fab005';
  yellow7: string = '#f59f00';
  yellow8: string = '#f08c00';
  yellow9: string = '#e67700';
  orange0: string = '#fff4e6';
  orange1: string = '#ffe8cc';
  orange2: string = '#ffd8a8';
  orange3: string = '#ffc078';
  orange4: string = '#ffa94d';
  orange5: string = '#ff922b';
  orange6: string = '#fd7e14';
  orange7: string = '#f76707';
  orange8: string = '#e8590c';
  orange9: string = '#d9480f';
  [color: string]: string;
}

export { OpenColor };
