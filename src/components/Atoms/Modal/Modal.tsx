import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

import styles from "./Modal.module.scss";
import classNames from "classnames";

import Button from "../Button";
import Icons from "../Icons/Icons";

interface IModal {
    /**
     * Text of Cancel button
     */
    cancelText?: string;
    /**
     * Children elements to be rendered inside the modal.
     */
    children?: React.ReactNode;
    /**
     * Whether a close (x) button is visible on top right or not
     */
    closable?: boolean;
    /**
     * Whether modal footer is displayed or not
     */
    footer?: boolean | React.ReactElement;
    /**
     * Whether close modal using keyboard
     */
    keyboard?: boolean;
    /**
     * Text of the OK button
     */
    okText?: string;
    /**
     * The modal's title
     */
    title?: React.ReactNode;
    className?: string;
    onChange?: (isOpen: boolean) => void;
}

function Modal({
    title,
    children,
    closable = true,
    className,
    okText,
    cancelText,
    footer,
    onChange,
}: IModal) {
    const modalRef = useRef<HTMLDivElement>(null);
    const modalRoot =
        typeof window !== "undefined"
            ? document.getElementById("modal-root")
            : null;

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onChange?.(false);
            }
        };
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [onChange]);

    const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            onChange?.(false);
        }
    };

    function handleCancelModal() {
        onChange?.(false);
    }

    if (!modalRoot) return null;

    return createPortal(
        <motion.div
            className={classNames(styles.modal)}
            onClick={handleClickOutside}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
        >
            <motion.div
                className={classNames(styles.modal_box, className)}
                ref={modalRef}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.4 }}
                onClick={(e) => e.stopPropagation()}
            >
                {closable && (
                    <motion.div
                        className={styles.close}
                        onClick={handleCancelModal}
                        transition={{ duration: 0.4 }}
                        initial={{ rotate: [180, 0] }}
                        whileHover={{ rotate: [0, 180] }}
                    >
                        <Icons.CloseIcon />
                    </motion.div>
                )}
                <div className={styles.title}>{title}</div>
                <div className={styles.content}>{children}</div>
                <div className={styles.btns}>
                    {okText && (
                        <Button
                            className={styles.ok}
                            postfixIcon={<Icons.ArrowRightIcon />}
                            htmlType="tertiary"
                        >
                            {okText}
                        </Button>
                    )}
                    {cancelText && (
                        <Button
                            className={styles.cancel}
                            htmlType="tertiary"
                            onClick={handleCancelModal}
                        >
                            {cancelText}
                        </Button>
                    )}
                </div>
                {footer}
            </motion.div>
        </motion.div>,
        modalRoot
    );
}

export default Modal;
