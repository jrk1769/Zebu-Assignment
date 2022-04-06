import './App.css';
import React from "react";
import Card from './components/Card';

function App() {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch("http://localhost:3001/api")
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
        console.log(data);
      });
  }, []);

  return (
    <div className="App">
        {data && 
        <div className="card-group">
        <Card 
          img={data[0].picture.large}
          name={data[0].name}
          gender={data[0].gender}
          email={data[0].email}
          city={data[0].location.city}
          state={data[0].location.state}
          country={data[0].location.country}
        />
        <Card 
          img={data[1].picture.large}
          name={data[1].name}
          gender={data[1].gender}
          email={data[1].email}
          city={data[1].location.city}
          state={data[1].location.state}
          country={data[1].location.country}
        />
        <Card 
          img={data[2].picture.large}
          name={data[2].name}
          gender={data[2].gender}
          email={data[2].email}
          city={data[2].location.city}
          state={data[2].location.state}
          country={data[2].location.country}
        />
        <Card 
          img={data[3].picture.large}
          name={data[3].name}
          gender={data[3].gender}
          email={data[3].email}
          city={data[3].location.city}
          state={data[3].location.state}
          country={data[3].location.country}
        />
        <Card 
          img={data[4].picture.large}
          name={data[4].name}
          gender={data[4].gender}
          email={data[4].email}
          city={data[4].location.city}
          state={data[4].location.state}
          country={data[4].location.country}
        />
        </div>
        }
    </div>
)}

export default App;
