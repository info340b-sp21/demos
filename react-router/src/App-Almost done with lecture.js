import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { BrowserRouter, Route, Switch, Link, NavLink, useParams, Redirect } from 'react-router-dom'; // two base classes we need to make router work

function App(props) {

  const [posts, setPosts] = useState(props.initialPosts);
  // const [isCurrentlyOpen, setIsOpen] = useState(false);

  // const handleToggle = () => {
  //   setIsOpen(!isCurrentlyOpen);
  // }

  const addPost = (text, date) => {
    console.log("adding post");
    let postsCopy = { ...posts } //make copy
    postsCopy[date] = text; //add new element
    setPosts(postsCopy);

  }

  let postLinks = Object.keys(posts).map((date) => {
    return (
      <li key={date}>
        {/* <a href={'/blog/posts/' + date} className="nav-link">{date}</a> */}
        <NavLink to={'/blog/posts/' + date} className="nav-link" activeClassName="myActiveLink">{date}</NavLink>
      </li>
    )
  });

  return (
    <BrowserRouter>
      <div className="container">
        <h1>My Blog</h1>
        <nav>
          <ul className="nav">
            <li>
              {/* <a href='/' className="nav-link">Home</a> */}
              <NavLink exact to='/' className="nav-link" activeClassName="myActiveLink">Home</NavLink>
            </li>
            <li>
              {/* <a href='/about' className="nav-link">About</a> */}
              <NavLink to='/about' className="nav-link" activeClassName="myActiveLink">About</NavLink>
            </li>
            <li>
              {/* <a href='/blog' className="nav-link">Blog</a> */}
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
      <button className="btn btn-primary mb-3" onClick={handleClick}>
        Post!
        </button>

      {/* <Button color="danger" className="mb-3" onClick={handleClick}> */}
      {/* Post! */}
      {/* </Button> */}
    </form>
  );
}

function AboutPage(props) {

  // if(true) {
  //   //render the redirect
  //   return <Redirect to="/" />
  // }
  return (
    <div>
      <h2>About</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, amet cumque. Quasi esse facilis quisquam recusandae quam deleniti suscipit, libero dolore tenetur dignissimos expedita neque repellendus accusantium mollitia, dicta id.</p>
    </div>
  );
}


function BlogPostList(props) {

  let postDates = Object.keys(props.posts).sort().reverse();
  let postItems = postDates.map((date) => {
    return <BlogPost key={date} date={date} post={props.posts[date]} />
  });

  return <div>{postItems}</div>
}

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