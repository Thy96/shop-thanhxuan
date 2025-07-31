import BaseRadio from './Radio';
import RadioGroup from './RadioGroup';

type TRadio = typeof BaseRadio & {
  Group: typeof RadioGroup;
};

const Radio = BaseRadio as TRadio;
Radio.Group = RadioGroup;

export default Radio;
