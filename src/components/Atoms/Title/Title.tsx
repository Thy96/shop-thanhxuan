import classNames from "classnames";
import styles from "./Title.module.scss";
import { DetailedHTMLProps, HTMLAttributes } from "react";

type HeadingVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type Level = 1 | 2 | 3 | 4 | 5 | 6;
interface ITitle
    extends DetailedHTMLProps<
        HTMLAttributes<HTMLHeadingElement>,
        HTMLHeadingElement
    > {
    children: React.ReactNode;
    icon?: React.ReactNode;
    className?: string;
    level?: Level;
}
function Title({ level = 1, children, className, icon, ...restProps }: ITitle) {
    const Heading = ("h" + level) as HeadingVariant;

    const headingClassName = classNames(styles[`title_${level}`], className);

    return (
        <Heading {...restProps} className={headingClassName}>
            {icon && <span className={styles.title_icon}>{icon}</span>}
            <span>{children}</span>
        </Heading>
    );
}

export default Title;
