import type { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import styles from "./Button.module.scss";

type ButtonProps = {
  children: ReactNode;
  className?: string;
} & Pick<ButtonHTMLAttributes<HTMLButtonElement>, "onClick" | "type">;

export function Button({
  children,
  className,
  type = "button",
  onClick,
}: ButtonProps) {
  return (
    <button
      className={clsx(styles.button, className)}
      type={type}
      onClick={onClick}
    >
      <span className={styles.label}>{children}</span>

      <span className={styles.icon} aria-hidden="true">
        ↗
      </span>
    </button>
  );
}
