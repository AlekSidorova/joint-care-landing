import type { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import styles from "./Button.module.scss";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  size?: "default" | "hero";
} & Pick<ButtonHTMLAttributes<HTMLButtonElement>, "onClick" | "type">;

export function Button({
  children,
  className,
  type = "button",
  onClick,
  size = "default",
}: ButtonProps) {
  return (
    <button
      className={clsx(styles.button, styles[size], className)}
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
