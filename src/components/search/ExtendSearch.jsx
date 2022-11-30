import styles from './ExtendSearch.module.css'


const ExtendSearch = (props) => {
    const hideSearch = () => {
        props.hideSearch()
    }
    return <div className={styles.container}>
        <input type="text"/>
        <button onClick={hideSearch}>X</button>
        
    </div>;
}


export default ExtendSearch;