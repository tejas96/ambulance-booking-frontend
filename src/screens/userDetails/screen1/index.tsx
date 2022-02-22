import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styles from './styles';
import {Chip} from '../../../components';
import useContainer from './container';
import {UserRole as Roles} from '../../../model';
const UserRole = () => {
  const {handleRoleSelect} = useContainer();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Select Role</Text>
        <Text style={styles.description}>select role you want to be</Text>
      </View>
      <View style={styles.body}>
        <Chip
          selectedColor={'red'}
          style={styles.chip}
          onPress={() => {
            handleRoleSelect(Roles.DRIVER);
          }}>
          Driver
        </Chip>
        <Chip
          selectedColor="green"
          style={styles.chip}
          onPress={() => {
            handleRoleSelect(Roles.PASSENGER);
          }}>
          Passenger
        </Chip>
      </View>
    </SafeAreaView>
  );
};

export default UserRole;
