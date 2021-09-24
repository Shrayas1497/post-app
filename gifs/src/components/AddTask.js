import  {useState } from 'react'

const GIPHY_API = "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&limit=1&offset=0&q=";
const AddTask =({onAdd}) =>{
    const[text,setText]=useState('')
    
    let [Search, setSearch] = useState("");
    let [gifs, setGifs] = useState([]);
    
    
    const searchGif = (e) => {
        
      if(Search.length > 0){
        
        fetch(GIPHY_API+Search)
        .then((res)=>{
          
          return res.json();
        })
        .then((result)=>{
          console.log(result);
          setGifs(result.data.map((gif)=>{
            return gif.images.fixed_height.url;
          }))
        })
        .catch(()=>{
          alert("Something went wrong");
          
        })
      }
    }
    
    const onSubmit=(e)=>
    {
        e.preventDefault()
    if(!text){
        alert('please add a message')
        return 
    }
    onAdd({text,gif:gifs[0]})
    setText('')
    setSearch('')
       
}   
    return (
       <> 
        <div className='add-form' >
            <div className='form-control from-control-check'>
            <label>insert message</label>
            <input type='text' placeholder='message' value={text} onChange={(e)=>setText(e.target.value)}  />
        </div> 
        <div className='form-control'>
            <label>Gif</label>
            <input type='text' placeholder='gifs' value={Search} onChange={(e)=>setSearch(e.target.value)} />
        
        </div>
        <button onClick={searchGif}>
                      Search
                    </button>
                    <button className='btn btn-block' onClick={onSubmit}>
                      POST
                    </button>
       

    
       
        </div>
          <div className="list">
          {
            gifs.map((gif)=>{
              return (
                <div className="item">
                  <img src={gifs}/>  
                </div>
              )
            })
          }
        </div>
        </>
        
    )
}
export default AddTask