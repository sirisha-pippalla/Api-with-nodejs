import React, {useState, useEffect} from "react";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(()=> {
    fetch("http://localhost:4000/employees")
    .then((res) => res.json())
    // .then((json) => console.log(json))
    .then((details) => setData(details))
   
  }, [])

  return(
    <div>
      <table className = "table table-bordered">
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Location</th>
              </tr>
              {/* <tr>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.location}</td>
              </tr> */}
            </table>
      {data.map((item) => {
        return(
          <div>
            {/* <h1>{item.name}</h1>
            <h2>{item.age}</h2> */}
            <table className = "table table-bordered">
              {/* <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Location</th>
              </tr> */}
              <tr>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.location}</td>
              </tr>
            </table>
          </div>
        )
      })}
    </div>
  )
};


export default App;