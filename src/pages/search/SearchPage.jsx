import SearchResult from "../../components/search/SearchResult";
import styles from './SearchPage.module.css'

const SearchPage = () => {
  return (
    <div className={styles.container}>
      <SearchResult />
    </div>
  );
};

export default SearchPage;
