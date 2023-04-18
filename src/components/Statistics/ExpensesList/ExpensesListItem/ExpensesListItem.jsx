const ExpensesListItem = ({ item }) => {
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
          <li>{item.name}</li>
          <li>{item.prise}</li>
          <li>{item.categorie}</li>
          <li>edit</li>
          <li>delete</li>
        </ul>
      </li>
    </>
  );
};

export default ExpensesListItem;
