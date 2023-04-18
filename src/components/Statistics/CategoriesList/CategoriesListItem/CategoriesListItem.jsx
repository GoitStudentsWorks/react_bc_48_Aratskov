const CategoriesListItem = ({ item }) => {
  return (
    <>
      <li>
        <ul
          style={{
            display: 'flex',
            gap: '50px',
            paddingBottom: '30px',
            paddingLeft: '30px',
          }}
        >
          <li>{item.categorie}</li>
          <li>{item.cost}</li>
          <li>persent</li>
        </ul>
      </li>
    </>
  );
};

export default CategoriesListItem;
