// Original rendering
const container = document.getElementById('react-container');
ReactDOM.render("Hello! Welcome to React", container);

// Functional component using React.createElement
const Container = () => {
    return React.createElement(
        'div',
        null,
        'Hey Kalvians! Welcome to React Learning',
        React.createElement('div', null, `Let's rock and roll`)
    );
}

// Render the functional component using React.createElement
ReactDOM.render(React.createElement(Container), container);

// Class component using React.createElement
class ReactContainer extends React.Component {
    // Render method to render the React DOM 
    render() {
        return React.createElement(
            'div',
            null,
            'Hey Kalvians',
            React.createElement('div', null, `Let's rock and roll with classes`)
        );
    }
}

// Render the class component using React.createElement
ReactDOM.render(React.createElement(ReactContainer), container);

// JSX version of the class component
class ReactContainerJSX extends React.Component {
    // JSX tags; there should be one parent element
    render() {
        return (
            <div>
                Hello! Welcome to Kalvium   
                <div>This is babel</div>
            </div>
        );
    };
}

// Directly pass the JSX component to render
ReactDOM.render(<ReactContainerJSX />, container);


// import React from 'react';

// function App() {
//   return (
//     <div>
//       <h1>Hello Kalvium</h1>
//     </div>
//   );
// }

// export default App;