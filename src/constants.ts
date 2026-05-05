import { Post, Story, Article } from "./types";

export const MOCK_STORIES: Story[] = [
  {
    id: "s1",
    userId: "u1",
    userName: "Engine Labs",
    userAvatar: "https://images.unsplash.com/photo-1614728263952-84ea206f99b6?w=100&h=100&fit=crop",
    media: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&h=800&fit=crop",
    viewed: false,
  },
  {
    id: "s2",
    userId: "u2",
    userName: "Neural Dev",
    userAvatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop",
    media: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=800&fit=crop",
    viewed: false,
  },
  {
    id: "s3",
    userId: "u3",
    userName: "Conrad Admin",
    userAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
    media: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=800&fit=crop",
    viewed: true,
  },
  {
    id: "s4",
    userId: "u4",
    userName: "Deep Ops",
    userAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    media: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&h=800&fit=crop",
    viewed: false,
  }
];

export const MOCK_POSTS: Post[] = [
  {
    id: "p1",
    authorId: "u1",
    authorName: "Deep Conrad Labs",
    authorAvatar: "https://images.unsplash.com/photo-1614728263952-84ea206f99b6?w=100&h=100&fit=crop",
    title: "Introducing Neural-Engine v2.4",
    content: "The latest iteration of the Deep Conrad Neural-Engine features a 40% increase in tensor throughput. We've optimized the synaptic pathways for better real-time inference.",
    media: [
      {
        type: 'image',
        url: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&h=500&fit=crop"
      }
    ],
    tags: ["architecture", "neural-engine", "v2.4"],
    likes: 1245,
    comments: [
      {
        id: "c1",
        userId: "ux",
        userName: "tech_enthusiast",
        userAvatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=50&h=50&fit=crop",
        text: "The latency improvements are absolutely insane!",
        timestamp: "2h ago"
      }
    ],
    timestamp: "12 hours ago"
  },
  {
    id: "p2",
    authorId: "u3",
    authorName: "Conrad Admin",
    authorAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
    title: "Visualizing Hyper-Parameters",
    content: "A deep dive into how our new visualization tool helps developers understand weight distribution in the neural-engine during live training sessions.",
    media: [
      {
        type: 'image',
        url: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&h=500&fit=crop"
      }
    ],
    tags: ["visualization", "training", "deep-learning"],
    likes: 890,
    comments: [],
    timestamp: "Yesterday"
  },
  {
    id: "p3",
    authorId: "u1",
    authorName: "Deep Conrad Labs",
    authorAvatar: "https://images.unsplash.com/photo-1614728263952-84ea206f99b6?w=100&h=100&fit=crop",
    title: "Edge Deployment Success",
    content: "Our neural-engine is now running on lightweight edge devices with sub-10ms response times. This opens up new possibilities for robotics.",
    media: [
      {
        type: 'image',
        url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=500&fit=crop"
      }
    ],
    tags: ["robotics", "edge-computing", "iot"],
    likes: 2100,
    comments: [],
    timestamp: "3 days ago"
  },
  {
    id: "p4",
    authorId: "u2",
    authorName: "Neural Dev",
    authorAvatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop",
    title: "Real-time Synaptic Routing",
    content: "Watch the neural-engine dynamically re-route weights to optimize for a sudden spike in sequential data processing. The efficiency gains are visible in the heat-map.",
    media: [
      {
        type: 'video',
        url: "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-circuit-board-8588-large.mp4"
      }
    ],
    tags: ["real-time", "optimization", "demo"],
    likes: 3400,
    comments: [],
    timestamp: "5 hours ago"
  }
];

export const MOCK_ARTICLES: Article[] = [
  {
    id: "a1",
    title: "Optimizing Synaptic Routing for Edge Devices",
    excerpt: "A comprehensive guide on reducing latency in decentralized neural networks using the Deep Conrad V4.2 architecture...",
    author: "Dr. Aris Conrad",
    date: "May 12, 2024",
    readTime: "8 min read",
    category: "Architecture"
  },
  {
    id: "a2",
    title: "The Future of Liquid Dynamic Meshes",
    excerpt: "Exploring the theoretical limits of dynamic weight re-routing in massive-scale parallel inference engines...",
    author: "Neural Dev Team",
    date: "May 10, 2024",
    readTime: "12 min read",
    category: "Research"
  },
  {
    id: "a3",
    title: "Quantum-Resistant Encryption in Neural-Engines",
    excerpt: "How we implemented air-gapped security layers that protect neural transactions against future quantum compute attacks...",
    author: "Security Ops",
    date: "May 05, 2024",
    readTime: "15 min read",
    category: "Security"
  }
];
