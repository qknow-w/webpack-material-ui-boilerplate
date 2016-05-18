import fetch from 'isomorphic-fetch'

export function add(){
  return {
    type: "ADD"
  }
}
function requestPosts(reddit) {
  return {
    type : "REQUEST_POSTS",
    reddit
  }
}

function receivePosts(reddit ,json ){
  console.log("receivePosts",reddit);
  console.log("receivePosts",json);
  return {
    type : "RECEIVE_POSTS" ,
    reddit,
    posts: json.data.children.map(child => child.data),
    receiveDaAt: Date.now()
  }
}


function fetchPosts(reddit){
  return dispatch => {
    dispatch(requestPosts(reddit))
    return fetch(`https://www.reddit.com/r/${reddit}.json`)
    .then(response => response.json())
    .then(json => dispatch(receivePosts(reddit,json)))
  }
}



export function fetchPostsIfNeeded(reddit) {
  console.log("fetchPostsIfNeeded",reddit);
  return (dispatch, getState) => {
      return dispatch(fetchPosts(reddit))
  }
}
