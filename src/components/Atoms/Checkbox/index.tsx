import InternalCheckbox from "./CheckBox";
import Group from "./CheckBoxGroup";

type TCheckbox = typeof InternalCheckbox & {
    Group: typeof Group;
};

const CheckBox = InternalCheckbox as TCheckbox;

CheckBox.Group = Group;

export default CheckBox;
