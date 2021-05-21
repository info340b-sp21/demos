
// import React from 'react';
// //example 9

// function Card(props)  {
//         console.log(props.message);
//         return (
//             <div className="card">
//                 <div className="card-body">
//                     {props.message}
//                 </div>
//             </div>
//         );
// }
// export default function CardList(props) {
//         // let cardArray = props.messages.map((msgStr) => {
//         // let card = <Card message={msgStr} />;
//            let cardArray = props.messages.map((msgStr, idx) => {
//            let card = <Card message={msgStr} key={msgStr}/>;

//             return card;
//         })
//         console.log(cardArray);
//         return (
//             <div className="card-deck">
//                 {cardArray}     {/* an array of cards renders each of them in react */}
//             </div>
//         );
// }


//         let cardArray = props.messages.map((msgStr, idx) => {
//            let card = <Card message={msgStr} key={idx}/>;
