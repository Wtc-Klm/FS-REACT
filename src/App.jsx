import Contact from './assets/Contact';
import Hello from './assets/Hello';


function App() {
  const helloData = [
    { name: 'Wuttichai', message: 'Hi there' },
    { name: 'Top', message: 'Hello..' }
  ];

  return (
    <div >
      {helloData.map((data, index) => (
        <Hello key={index} name={data.name} message={data.message} />
      ))}

      <Contact email="Test@gmail.com" phone ="0817320731" />
    </div>
  );
}

export default App;