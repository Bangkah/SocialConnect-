import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Heart, MessageCircle, UserPlus } from 'lucide-react-native';
import { formatTimeAgo } from '@/utils/dateUtils';
import { generateMockUser } from '@/utils/mockData';

interface Activity {
  id: string;
  type: 'like' | 'comment' | 'follow';
  user: any;
  content?: string;
  createdAt: string;
}

export default function ActivityScreen() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    loadActivities();
  }, []);

  const loadActivities = () => {
    const mockActivities: Activity[] = [
      {
        id: '1',
        type: 'like',
        user: generateMockUser(),
        content: 'liked your photo',
        createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      },
      {
        id: '2',
        type: 'comment',
        user: generateMockUser(),
        content: 'commented: "Great shot! 📸"',
        createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
      },
      {
        id: '3',
        type: 'follow',
        user: generateMockUser(),
        content: 'started following you',
        createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
      },
      {
        id: '4',
        type: 'like',
        user: generateMockUser(),
        content: 'liked your post',
        createdAt: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
      },
      {
        id: '5',
        type: 'comment',
        user: generateMockUser(),
        content: 'commented: "Amazing work! 🔥"',
        createdAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
      },
    ];
    setActivities(mockActivities);
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'like':
        return <Heart size={20} color="#FF3040" fill="#FF3040" />;
      case 'comment':
        return <MessageCircle size={20} color="#007AFF" />;
      case 'follow':
        return <UserPlus size={20} color="#34C759" />;
      default:
        return <Heart size={20} color="#666" />;
    }
  };

  const renderActivity = ({ item }: { item: Activity }) => (
    <TouchableOpacity style={styles.activityItem}>
      <Image source={{ uri: item.user.avatar }} style={styles.avatar} />
      <View style={styles.activityContent}>
        <View style={styles.activityHeader}>
          <Text style={styles.username}>{item.user.username}</Text>
          <Text style={styles.activityText}> {item.content}</Text>
        </View>
        <Text style={styles.timeAgo}>{formatTimeAgo(item.createdAt)}</Text>
      </View>
      <View style={styles.activityIcon}>
        {getActivityIcon(item.type)}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Activity</Text>
      </View>
      
      <FlatList
        data={activities}
        renderItem={renderActivity}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        style={styles.list}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  list: {
    flex: 1,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  activityContent: {
    flex: 1,
  },
  activityHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  username: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  activityText: {
    fontSize: 14,
    color: '#666',
  },
  timeAgo: {
    fontSize: 12,
    color: '#999',
  },
  activityIcon: {
    marginLeft: 12,
  },
});