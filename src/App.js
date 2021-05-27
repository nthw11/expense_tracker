import Expenses from './components/Expenses';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Car Insurance',
      amount: 296.96,
      date: new Date(2021, 4, 27),
    },
    { id: 'e2', title: 'Dog food', amount: 96.96, date: new Date(2021, 4, 7) },
    {
      id: 'e3',
      title: 'Trophy Beer',
      amount: 29.96,
      date: new Date(2021, 3, 22),
    },
    { id: 'e4', title: 'Pizza', amount: 26.96, date: new Date(2021, 2, 21) },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
