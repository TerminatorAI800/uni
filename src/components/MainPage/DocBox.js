import styles from "./DocBox.module.css";
import PropTypes from "prop-types";

function DocBox(props) {
  /*

props.icon -> The icon for the box.
props.title -> The title of the box.
props.description -> The description of the box.

 TODO:
1. Image tag for the icon has not been added keeping in 
   mind the future need for a dynamic or static image.


*/

  return (
    <div className={styles.card}>
      <div className={styles.icon}></div>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.description}>{props.description}</div>
    </div>
  );
}

// Defining the propType for the title and description of the card.

DocBox.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default DocBox;
