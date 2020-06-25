import { css } from 'styled-components';
import {
  border_box,
  flex,
  flex_auto,
  flex_grow,
  max_width_full,
  max_width_none,
  pd_left_none,
  pd_left_xs,
  pd_right_none,
  pd_right_xs,
  pos_relative,
  width_auto,
} from '../../themes/default/styles';
import { ContainerColTheme } from './interface';

const ContainerColTheme: ContainerColTheme = {
  wrapper: css`
    ${[
      pos_relative,
      border_box,
      flex_grow,
      max_width_full,
      pd_right_xs,
      pd_left_xs,
    ]}
    flex-basis: 0;
    min-height: 1px;

    [data-no-gutters='true'] > & {
      ${[pd_right_none, pd_left_none]}
    }

    &[data-auto='true'] {
      ${[width_auto, max_width_none, flex_auto]}
    }

    &[data-flex='true'] {
      ${flex}
    }

    &[data-size='1'] {
      flex: 0 0 8.333333%;
      max-width: 8.333333%;
    }

    &[data-size='2'] {
      flex: 0 0 16.666667%;
      max-width: 16.666667%;
    }

    &[data-size='3'] {
      flex: 0 0 25%;
      max-width: 25%;
    }

    &[data-size='4'] {
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }

    &[data-size='5'] {
      flex: 0 0 41.666667%;
      max-width: 41.666667%;
    }

    &[data-size='6'] {
      flex: 0 0 50%;
      max-width: 50%;
    }

    &[data-size='7'] {
      flex: 0 0 58.333333%;
      max-width: 58.333333%;
    }

    &[data-size='8'] {
      flex: 0 0 66.666667%;
      max-width: 66.666667%;
    }

    &[data-size='9'] {
      flex: 0 0 75%;
      max-width: 75%;
    }

    &[data-size='10'] {
      flex: 0 0 83.333333%;
      max-width: 83.333333%;
    }

    &[data-size='11'] {
      flex: 0 0 91.666667%;
      max-width: 91.666667%;
    }

    &[data-size='12'] {
      flex: 0 0 100%;
      max-width: 100%;
    }

    &[data-order='first'] {
      order: -1;
    }

    &[data-order='last'] {
      order: 13;
    }

    &[data-order='0'] {
      order: 0;
    }

    &[data-order='1'] {
      order: 1;
    }

    &[data-order='2'] {
      order: 2;
    }

    &[data-order='3'] {
      order: 3;
    }

    &[data-order='4'] {
      order: 4;
    }

    &[data-order='5'] {
      order: 5;
    }

    &[data-order='6'] {
      order: 6;
    }

    &[data-order='7'] {
      order: 7;
    }

    &[data-order='8'] {
      order: 8;
    }

    &[data-order='9'] {
      order: 9;
    }

    &[data-order='10'] {
      order: 10;
    }

    &[data-order='11'] {
      order: 11;
    }

    &[data-order='12'] {
      order: 12;
    }

    &[data-offset='1'] {
      margin-left: 8.333333%;
    }

    &[data-offset='2'] {
      margin-left: 16.666667%;
    }

    &[data-offset='3'] {
      margin-left: 25%;
    }

    &[data-offset='4'] {
      margin-left: 33.333333%;
    }

    &[data-offset='5'] {
      margin-left: 41.666667%;
    }

    &[data-offset='6'] {
      margin-left: 50%;
    }

    &[data-offset='7'] {
      margin-left: 58.333333%;
    }

    &[data-offset='8'] {
      margin-left: 66.666667%;
    }

    &[data-offset='9'] {
      margin-left: 75%;
    }

    &[data-offset='10'] {
      margin-left: 83.333333%;
    }

    &[data-offset='11'] {
      margin-left: 91.666667%;
    }
  `,
};

export { ContainerColTheme };
