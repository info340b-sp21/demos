import React from 'react';

// //Example 5
// export function HelloMessage() {
//     let message = "Hello World!";
//     return <h1>{message}</h1>;

// }



// // Example 6

// function HelloMessage() {

//     let message = "Hello World!";
//     return <h1>{message}</h1>;

// }

// export default function App() {

//     return (
//         <div>
//             <header className="jumbotron">
//                 <HelloMessage />
//             </header>
//             <main>
//                 <p>
//                     Hi
//                 </p>
//             </main>
//         </div>
//     );
// }




// // Example 7 - add buttons and blue style to the background color

// function HelloMessage() {

//     let message = "Hello World!";
//     return <h1>{message}</h1>;
// }

// function Button() {
//     return (
//         <button className="btn btn-primary rounded-circle">Hi</button>
//     )
// }

// export default function App() {
//     return (
//         <div>
//             <header className="jumbotron">
//                 <HelloMessage />
//             </header>
//             <main>
//                 <p>
//                     <Button />
//                     <Button />
//                     <Button />
//                     <Button />
//                 </p>
//             </main>
//         </div>
//     );
// }




// // Example 8 - pass in attributes through the props


// function HelloMessage() {
//       let message = "Hello World!";
//       return <h1>{message}</h1>;
// }

// function Button(props) {
//     console.log(props);
//        let buttontext = props.text;
//     return (
//       <button className="btn btn-primary rounded-circle">{buttontext}</button>
//     )
// }
// export default function App() {
//       return (
//         <div>
//           <header className="jumbotron">
//             <HelloMessage />
//           </header>
//           <main>
//             <p>
//               <Button text="1"/>     {/* passing in props for the buttons */}
//               <Button text="2"/>
//               <Button text="3"/>
//             </p>
//           </main>
//         </div>
//       );
// }




// // Example 9
// import CardList from './Cards';

// function HelloMessage() {
//     let message = "Hello world message";
//     let h1 = <h1 id="hello" className="myclass">{message}</h1>;
    
//     //return the DOM to show
//     return (
//         <div className="jumbotron">
//             {h1}
//         </div>
//     );
// }

// export default function App() {
//     let messageArray = ["Hi", "hello", "taking too long", "add", "more", "stuff", "lorem ipsum"];
//     return (
//         <div>
//             <HelloMessage />
//             <div className="container">
//                 <CardList messages={messageArray} />
//             </div>
//         </div>
//     );
// }

