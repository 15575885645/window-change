import data from './node'
import React, { useEffect, useState } from 'react';
import Search from './components/Search/index';

function App() {
  const [, setUpdate] = useState(false);
  const [dataSource,setDataSource]=useState(data);
  
  function forceUpdate(){
    setUpdate(b=>!b);
  }

   

  return <div>
    {dataSource}
  </div>
}

export default App;