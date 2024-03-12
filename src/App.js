import React, {useState, useEffect} from 'react' 

function App(){

  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("/members").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log('data', data);
      }
    )
  }, [])


  return (
    <div>
        <p>This is the App.jsx file</p>
        {(typeof data.members === 'undefined') ?(
            <p>loading..</p>
        ): (
          data.members.map((member, i) => (
            <p key={i}>{member}</p>
          ))
        )
      }

    </div>  
  )
}

export default App