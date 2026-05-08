export interface Article {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  comments: Comment[];
  content?: string;
}

export interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
}

export interface Comment {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  text: string;
  timestamp: string;
}

export interface Post {
  id: string;
  authorId: string;
  authorName: string;
  authorAvatar: string;
  title: string;
  content: string;
  media: {
    type: 'image' | 'video';
    url: string;
  }[];
  tags: string[];
  likes: number;
  comments: Comment[];
  timestamp: string;
}

export interface Story {
  id: string;
  userId: string;
  userAvatar: string;
  userName: string;
  media: string;
  viewed: boolean;
}
