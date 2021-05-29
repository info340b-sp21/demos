import React, { useState } from 'react';

import { Button } from 'reactstrap';

// // Slide 15 Browser Router
// import { BrowserRouter, Route } from 'react-router-dom';

// // slide 18 switch
// import { BrowserRouter, Route, Switch } from 'react-router-dom';

// // slide 19 Link
// import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

// slide 21 Link
import { BrowserRouter, Route, Switch, NavLink,useParams, Redirect } from 'react-router-dom';


function App(props) {

  const [posts, setPosts] = useState(props.initialPosts);

  const addPost = (text, date) => {
    console.log("adding post");
    let postsCopy = { ...posts } //make copy
    postsCopy[date] = text; //add new element
    setPosts(postsCopy);

  }

  let postLinks = Object.keys(posts).map((date) => {
    return (
      <li key={date}>
        <a href={'/blog/posts/' + date} className="nav-link">{date}</a>
      </li>
    )
  });

  // // Original 
  // return (
  //   <div className="container">
  //     <h1>My Blog</h1>
  //     <nav>
  //       <ul className="nav">
  //         <li>
  //           <a href='/' className="nav-link">Home</a>
  //         </li>
  //         <li>
  //           <a href='/about' className="nav-link">About</a>
  //         </li>
  //         <li>
  //           <a href='/blog' className="nav-link">Blog</a>
  //         </li>
  //         {postLinks}
  //       </ul>
  //     </nav>
  //     <NewPostPage postCallback={addPost} />
  //     <AboutPage />
  //     <BlogPostList posts={posts} />
  //   </div>
  // );

  // // Slide 15 BrowserRouter
  //   return (
  //     <BrowserRouter>
  //     <div className="container">
  //       <h1>My Blog</h1>
  //       <nav>
  //         <ul className="nav">
  //           <li>
  //             <a href='/' className="nav-link">Home</a>
  //           </li>
  //           <li>
  //             <a href='/about' className="nav-link">About</a>
  //           </li>
  //           <li>
  //             <a href='/blog' className="nav-link">Blog</a>
  //           </li>
  //           {postLinks}
  //         </ul>
  //       </nav>
  //       <NewPostPage postCallback={addPost} />
  //       <AboutPage />
  //       <BlogPostList posts={posts} />
  //     </div>
  //     </BrowserRouter>
  //   );

  // // Slide 17 Route
  // return (
  //   <BrowserRouter>
  //     <div className="container">
  //       <h1>My Blog</h1>
  //       <nav>
  //         <ul className="nav">
  //           <li>
  //             <a href='/' className="nav-link">Home</a>
  //           </li>
  //           <li>
  //             <a href='/about' className="nav-link">About</a>
  //           </li>
  //           <li>
  //             <a href='/blog' className="nav-link">Blog</a>
  //           </li>
  //           {postLinks}
  //         </ul>
  //       </nav>
  //       <Route exact path="/"> {/* with exact,  it has to begin and end with '/' */}
  //         <WelcomePage />
  //       </Route>
  //       <Route path="/post"> {/* this is basically an if statement*/}
  //         <NewPostPage postCallback={addPost} />
  //       </Route>
  //       <Route path="/about">
  //         <AboutPage />
  //       </Route>
  //       <Route exact path="/blog"> {/* with exact, it will only show '/blog' */}
  //         <BlogPostList posts={posts} />
  //       </Route>
  //       <Route path="/blog/posts/:postDate">
  //         <BlogPost />
  //       </Route>
  //     </div>
  //   </BrowserRouter>
  // );

  // // Slide 18 Switch
  // return (
  //   <BrowserRouter>
  //   <div className="container">
  //     <h1>My Blog</h1>
  //     <nav>
  //       <ul className="nav">
  //         <li>
  //           <a href='/' className="nav-link">Home</a>
  //         </li>
  //         <li>
  //           <a href='/about' className="nav-link">About</a>
  //         </li>
  //         <li>
  //           <a href='/blog' className="nav-link">Blog</a>
  //         </li>
  //         {postLinks}
  //       </ul>
  //     </nav>
  //     <Switch>
  //           <Route exact path="/"> {/* with exact, now it has to begin and end with '/' */}
  //             <WelcomePage />
  //           </Route>
  //           <Route path="/post"> {/* this is basically an if statement*/}
  //             <NewPostPage postCallback={addPost} />
  //           </Route>
  //           <Route path="/about">
  //             <AboutPage />
  //           </Route>
  //           <Route exact path="/blog">
  //             <BlogPostList posts={posts} />
  //           </Route>
  //           <Route path="/blog/posts/:postDate">
  //             <BlogPost />
  //           </Route>

  //         </Switch>
  //   </div>
  //   </BrowserRouter>
  // );

  // // Slide 19 Link
  // return (
  //   <BrowserRouter>
  //   <div className="container">
  //     <h1>My Blog</h1>
  //     <nav>
  //       <ul className="nav">
  //         <li>
  //           <NavLink exact to='/' className="nav-link" activeClassName="myActiveLink">Home</NavLink>
  //           {/* <NavLink to='/' className="nav-link" activeClassName="myActiveLink">Home</NavLink> */}
  //         </li>
  //         <li>
  //           <NavLink to='/about' className="nav-link" activeClassName="myActiveLink">About</NavLink>
  //         </li>
  //         <li>
  //           <NavLink exact to='/blog' className="nav-link" activeClassName="myActiveLink">Blog</NavLink>
  //           {/* <NavLink to='/blog' className="nav-link" activeClassName="myActiveLink">Blog</NavLink> */}
  //         </li>
  //         {postLinks}
  //       </ul>
  //     </nav>
  //     <Switch>
  //       <Route exact path="/"> {/* with exact, now it has to begin and end with '/' */}
  //         <WelcomePage />
  //       </Route>
  //       <Route path="/post"> {/* this is basically an if statement*/}
  //         <NewPostPage postCallback={addPost} />
  //       </Route>
  //       <Route path="/about">
  //         <AboutPage />
  //       </Route>
  //       <Route exact path="/blog">
  //         <BlogPostList posts={posts} />
  //       </Route>
  //       <Route path="/blog/posts/:postDate">
  //         <BlogPost />
  //       </Route>

  //     </Switch>

  //   </div>
  // </BrowserRouter>
  // );

  // Slide 23 Redirect
  return (
    <BrowserRouter>
    <div className="container">
      <h1>My Blog</h1>
      <nav>
        <ul className="nav">
          <li>
            {/* <NavLink exact to='/' className="nav-link" activeClassName="myActiveLink">Home</NavLink> */}
            <NavLink exact to='/' className="nav-link" activeClassName="myActiveLink">Home</NavLink>
          </li>
          <li>
            <NavLink to='/about' className="nav-link" activeClassName="myActiveLink">About</NavLink>
          </li>
          <li>
            {/* <NavLink exact to='/blog' className="nav-link" activeClassName="myActiveLink">Blog</NavLink> */}
            <NavLink exact to='/blog' className="nav-link" activeClassName="myActiveLink">Blog</NavLink>
          </li>
          {postLinks}
        </ul>
      </nav>
      <Switch>
            <Route exact path="/"> {/* with exact, now it has to begin and end with '/' */}
              <WelcomePage />
            </Route>
            <Route path="/post"> {/* this is basically an if statement*/}
              <NewPostPage postCallback={addPost} />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route exact path="/blog">
              <BlogPostList posts={posts} />
            </Route>
            <Route path="/blog/posts/:postDate">
              <BlogPost />
            </Route>
            <Route path="/">
              {/* match to everything */}
              {/* <ErrorPage/> */}
              <Redirect to="/" />
            </Route>

          </Switch>

    </div>
  </BrowserRouter>
  );

}


function NewPostPage(props) {

  const [text, setText] = useState('');
  const [date, setDate] = useState('2020-05-19');

  const handleChange = (event) => {
    // console.log(event.target.type);
    if (event.target.type === "text") {
      setText(event.target.value)
    } else {
      setDate(event.target.value)
    }
  }

  const handleClick = (event) => {
    event.preventDefault();
    props.postCallback(text, date);
  }


  return (
    <form>
      <input type="date"
        className="form-control"
        onChange={handleChange}
        value={date}
      />
      <input
        className="form-control mb-3"
        placeholder="What did you do today?"
        onChange={handleChange}
        value={text}
      />

      <Button color="danger" className="mb-3" onClick={handleClick}>
        Post!
      </Button>

      {/* <button className="btn btn-primary mb-3" onClick={handleClick}>
        Post!
        </button> */}
    </form>
  );
}

function AboutPage(props) {

  return (
    <div>
      <h2>About</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Nulla, amet cumque. Quasi esse facilis quisquam recusandae quam deleniti suscipit,
           libero dolore tenetur dignissimos expedita neque repellendus accusantium mollitia, dicta id.</p>
    </div>
  );
}


function BlogPostList(props) {

  let postDates = Object.keys(props.posts).sort().reverse();
  let postItems = postDates.map((date) => {
    return <BlogPost key={date} date={date} post={props.posts[date]} />
  })

  return <div>{postItems}</div>
}

// // Original
// function BlogPost(props) {

//   let date = props.date;
//   let post = props.post;

//   return (
//     <div>
//       <h2>Post on {date}</h2>
//       <p>{post}</p>
//     </div>
//   );
// }

// Slide 21

const BLOG_POSTS = { //model for demoing
  '2019-02-12': "So much snow........",
  '2019-02-11': "Ugh, more snow...",
  '2019-02-05': "More snow! Yay!",
  '2019-02-04': "It snowed today!! Awesome!",
};


function BlogPost(props) {

  const urlParams = useParams();
  console.log(urlParams)
  let date = props.postDate;
  let post = props.post;
  

  if (props.date === undefined) {

    // date = //thing from url
    // post = //thing from url

    date = urlParams.postDate;
    post = BLOG_POSTS[date]; //pretend database access -- in real life we'd make an ajax request to pull
    console.log("no Blog specified")
  };

  return (
    <div>
      <h2>Post on {date}</h2>
      <p>{post}</p>
    </div>
  );
}

function WelcomePage(props) {
  return (
    <div>
      <h2>Welcome to my blog!</h2>
    </div>
  );
}

function ErrorPage(props) {
  return (
    <div>
      <h2>No such page found</h2>
    </div>
  );
}


export default App;