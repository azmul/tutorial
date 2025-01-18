import styles from "./css.module.scss";
import { Container } from "@mantine/core";

export function Css() {
  return (
    <Container className={styles.color}>
      <h1 className="text-3xl">css</h1>
    </Container>
  );
}
