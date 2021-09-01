import axios from "axios";
import { useEffect } from 'react';


function DataOp() {

  useEffect(() => {
    axios.get('http://localhost:9000/api/cliente')
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      })
  })

  return <div></div>
}

export default DataOp;
