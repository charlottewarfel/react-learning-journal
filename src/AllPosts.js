import React, { Component } from "react";
import { BlogPost } from "./BlogPost";
import { data } from "./data.js";

export class AllPosts extends Component {
  state = {
    posts: [],
    postsToBeRendered: [],
    filteredAuthorName: null,
    filteredTagName: null
  };

  componentDidMount() {
    this.setState({ posts: data, postsToBeRendered: data });
  }

  onFilterByAuthor = authName => {
    const filteredPosts = this.state.posts.filter(post => {
      return authName === post.author;
    });
    this.setState({
      postsToBeRendered: filteredPosts,
      filteredAuthorName: authName,
      filteredTagName: null
    });
  };

  onFilterByTag = tagName => {
    const filteredPosts = this.state.posts.filter(post => {
      return post.tags.includes(tagName);
    });

    this.setState({
      postsToBeRendered: filteredPosts,
      filteredTagName: tagName,
      filteredAuthorName: null
    });
  };

  render() {
    return (
      <div className="AllPosts">
        {this.state.filteredAuthorName != null && (
          <div className="authAndTagDiv">
            {`Showing all posts by: ${this.state.filteredAuthorName}`}
          </div>
        )}
        {this.state.filteredTagName != null && (
          <div className="authAndTagDiv">
            {`Showing all posts by Key Word: ${this.state.filteredTagName}`}
          </div>
        )}

        {this.state.postsToBeRendered.map(post => {
          return (
            <BlogPost
              onFilterByAuthor={this.onFilterByAuthor}
              onFilterByTag={this.onFilterByTag}
              post={post}
              key={post.id}
            />
          );
        })}
      </div>
    );
  }
}
