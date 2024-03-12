import React, {useState, useEffect} from 'react' 

function Artist(){

  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("/artist").then(
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
        <p>This is the Artist.jsx file</p>
        {/* {(typeof data.members === 'undefined') ?(
            <p>loading..</p>
        ): (
          data.members.map((member, i) => (
            <p key={i}>{member}</p>
          ))
        )
      } */}

    </div>  
  )
}

export default Artist