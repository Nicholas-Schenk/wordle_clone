import './Box.css'
function Box(text) {
  if (text.text === '-'){
    return (
      <p className="Box" style={{color:'transparent'}}>
        {text.text}
      </p>
      );  
  } 
  if(text.color === 'white' || text.color === 'red'){
    return (
      <p className="Box" style={{color: text.color}}>
        {text.text}
      </p>
      );  
  }
  //console.log(text.text)
    return (
        <p className="Box" style={{backgroundColor: text.color}}>
          {text.text}
        </p>
        );  
}

export default Box;
