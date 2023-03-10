import "./App.scss";
import Layout from "./components/ui/Layout";
import Card from "./components/Card/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./components/ui/Loader";

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/tours");
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoading) return <Loader />;

  return (
    <Layout>
      {data &&
        data.map((item) => (
          <Card
            key={item.id}
            image={item.image}
            title={item.title}
            price_new={item.price_new}
            price_old={item.price_old}
            rating={item.rating}
            countries={item.countries}
            duration={item.duration}
          />
        ))}
    </Layout>
  );
}

export default App;
