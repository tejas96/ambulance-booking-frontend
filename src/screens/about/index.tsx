import React from 'react';
import {View} from 'react-native';
import {Avatar} from 'react-native-paper';
import {SafeAreaView, Typography} from '../../components';
import styles from './styles';
import {developerDetails} from './const';
const About: React.FC<{}> = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Typography type="title">Ambulance Booking App</Typography>
        <Typography type="paragraph">
          This is an app for booking emergency ambulance.
        </Typography>
        <View style={styles.developersDetailsContainer}>
          {developerDetails.map((developer, index) => (
            <View key={index} style={styles.developerDetails}>
              <Avatar.Image size={50} source={developer.avatar} />
              <Typography type="paragraph">{developer.name}</Typography>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default About;
