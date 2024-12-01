import css from './SearchBox.module.css';

const SearchBox = ({value, onChange}) => {
    return (
        <div className={css.search_box}>
            <input 
                className={css.search_input}
                type="text"
                placeholder="Search contacts"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
};

export default SearchBox;