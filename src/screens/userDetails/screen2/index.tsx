import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {getImage} from '../../../assets';
import ImageTag from '../../../assets/images';
import {Button, Input, SafeAreaView} from '../../../components';
import useContainer from './container';
import styles from './styles';

interface Props {}

const UserDetails: React.FC<Props> = () => {
  const {userState, handleOnChange, handleFormSubmit, loader} = useContainer();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text style={styles.title}>Basic info</Text>
          <Text style={styles.subTitle}>
            Below information will use while booking ambulance for sharing
            driver and passenger information to each other
          </Text>
        </View>
        <View style={styles.form}>
          <Image style={styles.profileImage} source={getImage(ImageTag.USER)} />
          <Input
            value={userState.firstName}
            style={styles.inputs}
            errorMessage=""
            label="First Name"
            placeholder="Enter first name"
            onChangeText={(text: string) => {
              handleOnChange('firstName', text);
            }}
          />
          <Input
            value={userState.lastName}
            style={styles.inputs}
            errorMessage=""
            label="Last Name"
            placeholder="Enter last name"
            onChangeText={(text: string) => {
              handleOnChange('lastName', text);
            }}
          />
          {/* <DropDown
            style={styles.inputs}
            label="Gender"
            placeholder="Select gender"
            onSelect={value => handleOnChange('gender', value)}
            selectedValue={userState.gender}
            options={[
              {label: 'Male', value: 'male'},
              {label: 'Female', value: 'female'},
            ]}
          /> */}
        </View>
      </ScrollView>
      <Button
        loading={loader}
        disabled={loader}
        onPress={handleFormSubmit}
        style={styles.submitBtn}>
        Submit
      </Button>
    </SafeAreaView>
  );
};

export default UserDetails;
