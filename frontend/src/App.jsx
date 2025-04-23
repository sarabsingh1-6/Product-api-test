import { useEffect } from 'react';


function App() {
  useEffect(() => {
    fetch('http://localhost:5000/api/product')
      .then((res) => {
        if (!res.ok) throw new Error('API Error');
        return res.json();
      })
      .then((data) => console.log('Product:', data))
      .catch((err) => console.error('Error:', err));
  }, []);

  return (
    <div>
      <h1>Check the console for product data</h1>
    </div>
  );
}

export default App;
