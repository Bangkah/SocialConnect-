import { v4 as uuidv4 } from 'react-native-uuid';
import { User, Post, Comment } from '@/types';

const avatars = [
  'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
  'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
  'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
  'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150',
  'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
];

const postImages = [
  'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400',
];

const usernames = ['alex_dev', 'sarah_design', 'mike_photo', 'emma_travel', 'john_fitness'];
const fullNames = ['Alex Johnson', 'Sarah Wilson', 'Mike Chen', 'Emma Davis', 'John Smith'];
const bios = [
  'Software developer passionate about mobile apps 📱',
  'UI/UX Designer creating beautiful experiences ✨',
  'Photographer capturing life moments 📸',
  'Travel enthusiast exploring the world 🌍',
  'Fitness coach helping you stay healthy 💪',
];

const postContents = [
  'Just finished an amazing workout session! Feeling energized and ready to take on the day 💪 #fitness #motivation',
  'Beautiful sunset from my balcony tonight 🌅 Sometimes the best moments are right at home',
  'Working on a new mobile app design. The user experience is everything! What do you think? 🎨 #design #ux',
  'Coffee and code - the perfect combination for a productive morning ☕️ #developer #coding',
  'Exploring the local farmers market. Fresh ingredients make all the difference! 🥕🍅 #healthy #local',
  'Just launched my new project! Excited to share it with the world 🚀 #launch #excited',
  'Weekend hiking adventure in the mountains. Nature is the best therapy 🏔️ #hiking #nature',
  'Trying out a new recipe today. Cooking is my creative outlet 👨‍🍳 #cooking #creative',
];

export function generateMockUser(): User {
  const index = Math.floor(Math.random() * usernames.length);
  return {
    id: uuidv4() as string,
    username: usernames[index],
    email: `${usernames[index]}@example.com`,
    fullName: fullNames[index],
    avatar: avatars[index],
    bio: bios[index],
    followers: Math.floor(Math.random() * 1000) + 50,
    following: Math.floor(Math.random() * 500) + 20,
    posts: Math.floor(Math.random() * 50) + 5,
    createdAt: new Date().toISOString(),
  };
}

export function generateMockPosts(count: number = 10): Post[] {
  const posts: Post[] = [];
  
  for (let i = 0; i < count; i++) {
    const user = generateMockUser();
    const hasImage = Math.random() > 0.4;
    
    posts.push({
      id: uuidv4() as string,
      userId: user.id,
      user,
      content: postContents[Math.floor(Math.random() * postContents.length)],
      image: hasImage ? postImages[Math.floor(Math.random() * postImages.length)] : undefined,
      likes: Math.floor(Math.random() * 200) + 5,
      comments: Math.floor(Math.random() * 50) + 1,
      isLiked: Math.random() > 0.5,
      createdAt: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString(),
    });
  }
  
  return posts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export function generateMockComments(postId: string, count: number = 5): Comment[] {
  const comments: Comment[] = [];
  const commentTexts = [
    'Great post! Thanks for sharing 👍',
    'Love this! Keep it up 🔥',
    'Amazing work as always',
    'This is so inspiring!',
    'Totally agree with you on this',
    'Beautiful shot! 📸',
    'Thanks for the motivation 💪',
    'Can\'t wait to try this myself',
  ];
  
  for (let i = 0; i < count; i++) {
    const user = generateMockUser();
    
    comments.push({
      id: uuidv4() as string,
      postId,
      userId: user.id,
      user,
      content: commentTexts[Math.floor(Math.random() * commentTexts.length)],
      createdAt: new Date(Date.now() - Math.random() * 24 * 60 * 60 * 1000).toISOString(),
    });
  }
  
  return comments.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}