"use strict";
class Comment {
    constructor(id, userId, content, replies = []) {
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.replies = replies;
    }
}
class Post {
    constructor(id, userId, content, likes = [], comments = []) {
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.likes = likes;
        this.comments = comments;
    }
    addLike(userId) {
        if (!this.likes.includes(userId)) {
            this.likes.push(userId);
        }
    }
    addComment(comment) {
        this.comments.push(comment);
    }
}
class User {
    constructor(id, posts = [], followers = []) {
        this.id = id;
        this.posts = posts;
        this.followers = followers;
    }
    createPost(postId, content) {
        const post = new Post(postId, this.id, content);
        this.posts.push(post);
    }
    comment(postId, commentId, content, parentId) {
        const post = this.posts.find(post => post.id === postId);
        if (post) {
            const comment = new Comment(commentId, this.id, content);
            if (parentId !== undefined) {
                const parentComment = this.findComment(post.comments, parentId);
                if (parentComment) {
                    parentComment.replies.push(comment);
                }
                else {
                    console.log("Parent comment not found.");
                }
            }
            else {
                post.comments.push(comment);
            }
        }
        else {
            console.log("Post not found.");
        }
    }
    follow(userId) {
        if (!this.followers.includes(userId)) {
            this.followers.push(userId);
        }
    }
    likePost(postId) {
        const post = this.posts.find(post => post.id === postId);
        if (post) {
            post.addLike(this.id);
        }
        else {
            console.log("Post not found.");
        }
    }
    viewFeed(users) {
        const feed = [];
        this.followers.forEach(userId => {
            const user = users.find(user => user.id === userId);
            if (user) {
                user.posts.forEach(post => feed.push(post));
            }
        });
        return feed;
    }
    findComment(comments, commentId) {
        for (const comment of comments) {
            if (comment.id === commentId) {
                return comment;
            }
            const foundComment = this.findComment(comment.replies, commentId);
            if (foundComment) {
                return foundComment;
            }
        }
        return undefined;
    }
}
// Example usage:
const user1 = new User(1);
const user2 = new User(2);
const user3 = new User(3);
user1.createPost(1, "First post!");
user2.createPost(2, "Second post!");
user1.follow(2);
user2.likePost(1);
user2.comment(1, 1, "Nice post!");
user1.comment(1, 2, "Thanks!");
console.log("User 1's feed:");
console.log(user1.viewFeed([user1, user2, user3]));
