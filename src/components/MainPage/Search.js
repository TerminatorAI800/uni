import styles from "./Search.module.css";

/*

Search bar for the documentation page.

TODO: 
1. Implement onClick for the button to show the results
   according to the search criterion.

*/

function Search(props) {
  return (
    <div className={styles.card}>
      <input
        className={styles.inputField}
        type="text"
        placeholder="Search Here for the docs"
      ></input>
      <button className={styles.searchButton} type="button">
        Search Now
      </button>
    </div>
  );
}

export default Search;
