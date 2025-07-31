import React, { DetailedHTMLProps, HTMLAttributes } from "react";

import styles from "./Paragraph.module.scss";
import classNames from "classnames";

type Level = 1 | 2 | 3 | 4 | 5 | 6;
interface IParagraphs
    extends DetailedHTMLProps<
        HTMLAttributes<HTMLParagraphElement>,
        HTMLParagraphElement
    > {
    children?: React.ReactNode;
    level?: Level;
    className?: string;
}

function Paragraph({ children, level = 1, className }: IParagraphs) {
    return (
        <p className={classNames(styles[`para_text_${level}`], className)}>
            {children}
        </p>
    );
}

export default Paragraph;
