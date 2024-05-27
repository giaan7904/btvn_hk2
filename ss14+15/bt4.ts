class Comment {
    constructor(public id: number, public userId: number, public content: string, public replies: Comment[] = []) {}
}

class Post {
    constructor(
        public id: number,
        public userId: number,
        public content: string,
        public likes: number[] = [],
        public comments: Comment[] = []
    ) {}

    addLike(userId: number): void {
        if (!this.likes.includes(userId)) {
            this.likes.push(userId);
        }
    }

    addComment(comment: Comment): void {
        this.comments.push(comment);
    }
}

class User {
    constructor(public id: number, public posts: Post[] = [], public followers: number[] = []) {}

    createPost(postId: number, content: string): void {
        const post = new Post(postId, this.id, content);
        this.posts.push(post);
    }

    comment(postId: number, commentId: number, content: string, parentId?: number): void {
        const post = this.posts.find(post => post.id === postId);
        if (post) {
            const comment = new Comment(commentId, this.id, content);
            if (parentId !== undefined) {
                const parentComment = this.findComment(post.comments, parentId);
                if (parentComment) {
                    parentComment.replies.push(comment);
                } else {
                    console.log("Parent comment not found.");
                }
            } else {
                post.comments.push(comment);
            }
        } else {
            console.log("Post not found.");
        }
    }

    follow(userId: number): void {
        if (!this.followers.includes(userId)) {
            this.followers.push(userId);
        }
    }

    likePost(postId: number): void {
        const post = this.posts.find(post => post.id === postId);
        if (post) {
            post.addLike(this.id);
        } else {
            console.log("Post not found.");
        }
    }

    viewFeed(users: User[]): Post[] {
        const feed: Post[] = [];
        this.followers.forEach(userId => {
            const user = users.find(user => user.id === userId);
            if (user) {
                user.posts.forEach(post => feed.push(post));
            }
        });
        return feed;
    }

    private findComment(comments: Comment[], commentId: number): Comment | undefined {
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
