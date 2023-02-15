import React from "react";
import styles from "./Loader.module.css";
import Colors from "src/styles/colors";

interface LoaderProps {
  color?: string;
  size?: number;
}

const Loader: React.FC<LoaderProps> = ({ color = Colors.LIGHT_GRAY, size = 48 }) => {
  return <span className={styles.loader} style={{ borderColor: color as string, height: size, width: size }} />;
};

export default React.memo(Loader);
