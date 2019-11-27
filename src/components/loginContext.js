import React, {useState, createContext} from 'react'

export const LoginContext = createContext();


export const LoginProvider = props => {
  const [login, setLogin] = useState(
    {
      logged_in: false
    }
  );

  return(
      <LoginContext.Provider value={[login, setLogin]}>
        {props.children}
      </LoginContext.Provider>
  );
}

// //Camper.defaultProps = {
//   name: 'CamperBot'
// }
//
// Camper.propTypes = {
//   name: PropTypes.string.isRequired
// }
//
// class MyApp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       inputValue: ''
//     }
//     this.handleChange = this.handleChange.bind(this);
//   }
//   handleChange(event) {
//     this.setState({
//       inputValue: event.target.value
//     });
//   }
//   render() {
//     return (
//        <div>
//         { /* change code below this line */ }
//       <GetInput handleChange={this.handleChange} input={this.state.inputValue}/>
//
//       <RenderInput input={this.state.inputValue}/>
//         { /* change code above this line */ }
//        </div>
//     );
//   }
// };
//
// class GetInput extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <h3>Get Input:</h3>
//         <input
//           value={this.props.input}
//           onChange={this.props.handleChange}/>
//       </div>
//     );
//   }
// };
//
// class RenderInput extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <h3>Input Render:</h3>
//         <p>{this.props.input}</p>
//       </div>
//     );
//   }
// };


//{this.state.display == true && <h1>Displayed!</h1>}
