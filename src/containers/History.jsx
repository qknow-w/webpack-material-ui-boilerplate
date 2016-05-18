import React, {Component} from "react"
import {connect} from "react-redux"
import {fetchPostsIfNeeded} from '../actions'

class History extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log("componentDidMount");
    const {dispatch} = this.props
    dispatch(fetchPostsIfNeeded("reactjs"))
  }

  render() {
    console.log("render", this.props.posts.length);
    return (
      <div>
        <ul>

          {this.props.posts.length === 0
            ? <li >not data</li>
            : this.props.posts.map((post, i) => {
              return <li key={i}>{post.title}</li>
            })
}

        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log("mapStateToProps", state.posts.items);
  return {posts: state.posts.items}
}

export default connect(mapStateToProps)(History)
