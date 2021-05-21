import React, { useState } from 'react';

function App(props) {

  const [posts, setPosts] = useState(props.initialPosts);
  const [isCurrentlyOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isCurrentlyOpen);
  }

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

  return (
    <div className="container">
      <h1>My Blog</h1>
      <nav>
        <ul className="nav">
          <li>
            <a href='/' className="nav-link">Home</a>
          </li>
          <li>
            <a href='/about' className="nav-link">About</a>
          </li>
          <li>
            <a href='/blog' className="nav-link">Blog</a>
          </li>
          {postLinks}
        </ul>
      </nav>
      <NewPostPage postCallback={addPost} />
      <AboutPage />
      <BlogPostList posts={posts} />
    </div>
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


function BlogPost(props) {

  let date = props.date;
  let post = props.post;

  return (
    <div>
      <h2>Post on {date}</h2>
      <p>{post}</p>
    </div>
  );
}


export default App;