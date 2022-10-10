import styles from "./Button.module.css";

type Variant =
  | "primary_blue"
  | "primary_heavenly"
  | "secondary_white"
  | "secondary_blue";

interface IPropsButton {
  children: any;
  onClick: any;
  variant: Variant;
  wa?: boolean;
  type?: 'button' | 'submit'
}

export const Button = ({
  children,
  onClick,
  variant,
  wa,
  type = "button",
}: IPropsButton) => {
  const width = wa ? styles.wa : null;

  return (
    <button
      type={type}
      className={styles.btn + " " + styles[variant] + " " + width}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
