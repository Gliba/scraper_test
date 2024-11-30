import './App.css';
import { Button } from './components/ui/button';
import { Spinner } from './components/ui/loading-spinner';
import { useAxios } from './hooks/useAxios';
import ProductList from './products/page-list';

function App() {
  const [loading, data, error, request] = useAxios(
    {
      method: 'POST',
      url: 'http://localhost:3001/scraper',
    },
    false,
  );

  const handleClick = () => {
    request();
  };

  if (loading) return <Spinner size="large" />;

  return (
    <>
      <Button onClick={handleClick} variant="outline">
        Scrape
      </Button>
      <ProductList></ProductList>
    </>
  );
}

export default App;
