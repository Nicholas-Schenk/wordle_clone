import Box from './components/Box'
import './App.css';
import React, { Component } from 'react';
var words = [
"stable",
"salary",
"honest",
"settle",
"caught",
"domain",
"annual",
"miller",
"advice",
"client",
"wright",
"afraid",
"speech",
"within",
"become",
"escape",
"symbol",
"public",
"method",
"proper",
"recall",
"rather",
"belief",
"stream",
"eleven",
"reduce",
"retain",
"mental",
"chosen",
"flying",
"center",
"expand",
"injury",
"design",
"import",
"bureau",
"reform",
"medium",
"centre",
"linked",
"length",
"column",
"energy",
"native",
"father",
"united",
"castle",
"avenue",
"option",
"league",
"treaty",
"gather",
"holder",
"factor",
"deputy",
"branch",
"unless",
"course",
"anyone",
"almost",
"direct",
"mobile",
"dealer",
"sector",
"female",
"finish",
"review",
"abroad",
"filing",
"eighth",
"master",
"suffer",
"bridge",
"format",
"answer",
"offset",
"august",
"secret",
"actual",
"submit",
"player",
"lawyer",
"lesson",
"merely",
"little",
"marked",
"volume",
"common",
"struck",
"picked",
"dinner",
"letter",
"cannot",
"manage",
"likely",
"famous",
"budget",
"detect",
"choice",
"belong",
"thrown",
"leader",
"spoken",
"figure",
"regime",
"period",
"expect",
"costly",
"career",
"effort",
"cancer",
"second",
"family",
"junior",
"excess",
"listen",
"define",
"assess",
"artist",
"attend",
"merger",
"server",
"entire",
"sudden",
"retail",
"normal",
"prefer",
"garden",
"reveal",
"credit",
"switch",
"breath",
"taught",
"casual",
"winner",
"choose",
"author",
"raised",
"remote",
"button",
"select",
"equity",
"target",
"acting",
"jersey",
"burden",
"driver",
"spring",
"severe",
"soviet",
"launch",
"yellow",
"killed",
"headed",
"system",
"notion",
"stolen",
"sister",
"policy",
"active",
"circle",
"talent",
"object",
"simply",
"broken",
"action",
"leaves",
"defend",
"former",
"became",
"writer",
"slight",
"patent",
"guilty",
"foster",
"effect",
"reader",
"simple",
"signal",
"affect",
"mirror",
"weekly",
"strike",
"strong",
"nearly",
"lucent",
"French",
"decade",
"assume",
"before",
"narrow",
"engage",
"social",
"during",
"moment",
"forest",
"matter",
"single",
"itself",
"formal",
"degree",
"handle",
"mainly",
"bottom",
"decide",
"rising",
"backed",
"saving",
"pretty",
"couple",
"around",
"twenty",
"proven",
"making",
"inside",
"legacy",
"update",
"appear",
"weight",
"strain",
"fellow",
"covers",
"plenty",
"window",
"facing",
"chance",
"camera",
"rating",
"prince",
"mining",
"online",
"fourth",
"lights",
"partly",
"orange",
"dollar",
"german",
"reward",
"employ",
"spread",
"module",
"morris",
"follow",
"murder",
"device",
"unlike",
"closed",
"export",
"pursue",
"nights",
"entity",
"damage",
"bright",
"labour",
"profit",
"friend",
"return",
"threat",
"stress",
"emerge",
"myself",
"losing",
"agenda",
"unable",
"market",
"manner",
"across",
"street",
"spirit",
"bishop",
"relate",
"person",
"joseph",
"phrase",
"timely",
"wholly",
"member",
"signed",
"packed",
"behalf",
"theory",
"obtain",
"steady",
"income",
"custom",
"finger",
"ruling",
"resort",
"ending",
"height",
"series",
"relief",
"seller",
"fabric",
"fallen",
"robust",
"reason",
"remain",
"create",
"taking",
"people",
"really",
"coming",
"unique",
"barely",
"fiscal",
"recent",
"exceed",
"liquid",
"hardly",
"tenant",
"vision",
"region",
"gender",
"should",
"mutual",
"palace",
"living",
"church",
"access",
"corner",
"defeat",
"status",
"fought",
"output",
"notice",
"arrive",
"hidden",
"origin",
"fairly",
"wealth",
"indeed",
"versus",
"record",
"ethnic",
"beauty",
"toward",
"museum",
"tender",
"forced",
"danger",
"repeat",
"golden",
"strict",
"impact",
"tissue",
"sample",
"supply",
"margin",
"repair",
"differ",
"wonder",
"animal",
"battle",
"please",
"senior",
"engine",
"bought",
"behind",
"number",
"though",
"solely",
"mother",
"planet",
"change",
"combat",
"latest",
"surely",
"random",
"accept",
"aspect",
"county",
"island",
"doctor",
"ensure",
"comply",
"enable",
"secure",
"health",
"sought",
"extend",
"police",
"depend",
"sexual",
"afford",
"trying",
"survey",
"either",
"thanks",
"manual",
"intend",
"replay",
"flight",
"ticket",
"happen",
"office",
"desert",
"vendor",
"pocket",
"travel",
"coffee",
"failed",
"tennis",
"valley",
"driven",
"twelve",
"source",
"better",
"string",
"ground",
"future",
"luxury",
"carbon",
"mature",
"editor",
"saying",
"anyway",
"always",
"bottle",
"growth",
"oxford",
"closer",
"nearby",
"intent",
"screen",
"moving",
"school",
"scheme",
"attack",
"winter",
"enough",
"studio",
"search",
"desire",
"agency",
"charge",
"easily",
"visual",
"minute",
"varied",
"latter",
"martin",
"demand",
"permit",
"prison",
"season",
"advise",
"summit",
"walker",
"remove",
"border",
"worker",
"forget",
"debate",
"timing",
"marine",
"assist",
"seeing",
"nature",
"rarely",
"detail",
"rescue",
"silent",
"except",
"amount",
"nation",
"appeal",
"modern",
"eating",
"memory",
"copper",
"beyond",
"extent",
"middle",
"estate",
"victim",
"safety",
"parent",
"motion",
"smooth",
"crisis",
"berlin",
"invest",
"report",
"handed",
"empire",
"nobody",
"summer",
"thirty",
"result",
"riding",
"expert",
"mostly",
"modest",
"double",
"global",
"useful",
"silver",
"regard"
]
var num = 0
var min = 0
var won = false
class App extends Component {
  constructor(props){
    super(props);
    this.state = {letters: ["-", "-", "-", "-", "-", '-',
                            "-", "-", "-", "-", "-", '-',
                            "-", "-", "-", "-", "-", '-',
                            "-", "-", "-", "-", "-", '-',
                            "-", "-", "-", "-", "-", '-',
                            "-", "-", "-", "-", "-", '-',
                  ], 
                  letterColors: ["white", "white", "white", "white", "white", 'white',
                  "white", "white", "white", "white", "white", 'white',
                  "white", "white", "white", "white", "white", 'white',
                  "white", "white", "white", "white", "white", 'white',
                  "white", "white", "white", "white", "white", 'white',
                  "white", "white", "white", "white", "white", 'white'
                  ], 
                  usedLetters: " "
                }
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
    componentDidMount() {
      document.addEventListener("keydown", this.handleKeyPress);
    }
    componentWillUnmount() {
      document.removeEventListener("keydown", this.handleKeyPress);
    }
    handleKeyPress = (event) =>{
      if(event.key === 'Backspace'){
        if (num === min){
          return
        }
        if(num%6 === 0 && num !== 0){
        let copy = this.state.letterColors
          for(let i = 6; i > 0; i--){
            copy[num-i] = 'white'
          }
          this.setState({letterColors: copy})
        }
        num-=1
        var copy = this.state.letters
        copy[num] = '-'
        this.setState({letters:copy})
        return
      }
      if(event.key === 'Enter' && num%6 === 0 && num !== 0){
        var word =  this.state.letters[num-6] + this.state.letters[num-5] +  this.state.letters[num-4] +  this.state.letters[num-3] + this.state.letters[num-2] +  this.state.letters[num-1] 
        if(this.checkWord(word)){
          word = word.toLowerCase()
          var today = new Date();
          var dd = String(today.getDate()).padStart(2, '0');
          var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
          var yyyy = today.getFullYear();
          today = mm + '/' + dd + '/' + yyyy;
          const date1 = new Date('1/29/2022');
          const date2 = new Date(today)
          const diffTime = Math.abs(date2 - date1);
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
          let correctWord = words[diffDays]
          copy = this.state.letterColors
          let count = 0
          for(let i = 0; i < 6; i++){
            if(correctWord.indexOf(word[i]) === i){
              count += 1
              copy[num-6+i] = 'green'
            } else if (correctWord.indexOf(word[i]) >=0){
              copy[num-6+i] = 'yellow'
            } else{

              if(!this.state.usedLetters.includes(word[i])){
                this.setState({usedLetters: this.state.usedLetters + " " + word[i]})
              }
            }
          }
          if (count == 6){
            won = true
          } else{
            console.log("COUNT: "+count)
          }
          this.setState({letterColors: copy})
          min = num
          
        } else{
          copy = this.state.letterColors
          for(let i = 6; i > 0; i--){
            copy[num-i] = 'red'
          }
          this.setState({letterColors: copy})
        }
      }

      if(event.key.toLowerCase() === event.key.toUpperCase() || event.key.length > 1 || num >= min+6 || won){
        return
      }
      console.log(event.key)
      copy = this.state.letters
      copy[num] = event.key
      this.setState({letters:copy})
      num += 1
    }

    checkWord(word){
      
      console.log(word)
      if(words.includes(word)){
        return true;
      } else {
        return false;
      }

    }
  render(){
    
    return(
    <div className="App" >
      <h1>Rordle</h1>
      <div className = "Row" style={{display:'block'}}>
        <Box text = {this.state.letters[0]} color = {this.state.letterColors[0]}/>
        <Box text = {this.state.letters[1]} color = {this.state.letterColors[1]}/>
        <Box text = {this.state.letters[2]} color = {this.state.letterColors[2]}/>
        <Box text = {this.state.letters[3]} color = {this.state.letterColors[3]}/>
        <Box text = {this.state.letters[4]} color = {this.state.letterColors[4]}/>
        <Box text = {this.state.letters[5]} color = {this.state.letterColors[5]}/>
      </div>
      <div className = "Row">
        <Box text = {this.state.letters[6]} color = {this.state.letterColors[6]}/>
        <Box text = {this.state.letters[7]} color = {this.state.letterColors[7]}/>
        <Box text = {this.state.letters[8]} color = {this.state.letterColors[8]}/>
        <Box text = {this.state.letters[9]} color = {this.state.letterColors[9]}/>
        <Box text = {this.state.letters[10]} color = {this.state.letterColors[10]}/>
        <Box text = {this.state.letters[11]} color = {this.state.letterColors[11]}/>
      </div>
      <div className = "Row">
        <Box text = {this.state.letters[12]} color = {this.state.letterColors[12]}/>
        <Box text = {this.state.letters[13]} color = {this.state.letterColors[13]}/>
        <Box text = {this.state.letters[14]} color = {this.state.letterColors[14]}/>
        <Box text = {this.state.letters[15]} color = {this.state.letterColors[15]}/>
        <Box text = {this.state.letters[16]} color = {this.state.letterColors[16]}/>
        <Box text = {this.state.letters[17]} color = {this.state.letterColors[17]}/>
      </div>
      <div className = "Row">
        <Box text = {this.state.letters[18]} color = {this.state.letterColors[18]}/>
        <Box text = {this.state.letters[19]} color = {this.state.letterColors[19]}/>
        <Box text = {this.state.letters[20]} color = {this.state.letterColors[20]}/>
        <Box text = {this.state.letters[21]} color = {this.state.letterColors[21]}/>
        <Box text = {this.state.letters[22]} color = {this.state.letterColors[22]}/>
        <Box text = {this.state.letters[23]} color = {this.state.letterColors[23]}/>
      </div>
      <div className = "Row">
        <Box text = {this.state.letters[24]} color = {this.state.letterColors[24]}/>
        <Box text = {this.state.letters[25]} color = {this.state.letterColors[25]}/>
        <Box text = {this.state.letters[26]} color = {this.state.letterColors[26]}/>
        <Box text = {this.state.letters[27]} color = {this.state.letterColors[27]}/>
        <Box text = {this.state.letters[28]} color = {this.state.letterColors[28]}/>
        <Box text = {this.state.letters[29]} color = {this.state.letterColors[29]}/>
      </div>
      <div className = "Row">
        <Box text = {this.state.letters[30]} color = {this.state.letterColors[30]}/>
        <Box text = {this.state.letters[31]} color = {this.state.letterColors[31]}/>
        <Box text = {this.state.letters[32]} color = {this.state.letterColors[32]}/>
        <Box text = {this.state.letters[33]} color = {this.state.letterColors[33]}/>
        <Box text = {this.state.letters[34]} color = {this.state.letterColors[34]}/>
        <Box text = {this.state.letters[35]} color = {this.state.letterColors[35]}/>
      </div>
      {won ? <p className='para'>YOU WIN! It took you {Math.round(num/6)} tries!</p> : <div> <p className='para'>Letters that you tried that aren't in it: </p><p className='para'>{this.state.usedLetters}</p> </div>
      }
    </div>
    );
  }
}
export default App;
