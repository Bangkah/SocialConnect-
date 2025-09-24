import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CreatePostModal from '@/components/CreatePostModal';
import { v4 as uuidv4 } from 'react-native-uuid';
import { useAuth } from '@/contexts/AuthContext';

export default function CreateScreen() {
  const { user } = useAuth();
  const [modalVisible, setModalVisible] = useState(true);

  const handleCreatePost = async (content: string, image?: string) => {
    try {
      // Simulate API call to create post
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newPost = {
        id: uuidv4() as string,
        userId: user!.id,
        user: user!,
        content,
        image,
        likes: 0,
        comments: 0,
        isLiked: false,
        createdAt: new Date().toISOString(),
      };

      Alert.alert('Success', 'Post created successfully!');
      console.log('New post created:', newPost);
    } catch (error) {
      throw new Error('Failed to create post');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <CreatePostModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onPost={handleCreatePost}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
  },
});