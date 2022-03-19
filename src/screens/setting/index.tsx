import React from 'react';
import {Pressable, StyleProp, TextStyle, View} from 'react-native';
import {Avatar, Text} from 'react-native-paper';
import {SafeAreaView, Divider} from '../../components';
import {useLoggedInUser} from '../../hooks';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather';
import useSetting from './container';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AppStackParamList} from '../../navigation/AppStackParamsList';
import * as Routes from '../../navigation/routes';

interface SettingItem {
  title: string;
  icon: string;
  endIcon?: string;
  onPress: () => void;
  titleStyle?: StyleProp<TextStyle>;
}
const SettingItem: React.FC<SettingItem> = ({
  title,
  icon,
  endIcon = '',
  onPress,
  titleStyle,
}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.settingItem}>
        <View style={styles.iconAndTitle}>
          <Feather style={styles.endIcon} name={icon} size={25} />
          <Text style={[styles.title, titleStyle]}>{title}</Text>
        </View>
        {endIcon ? (
          <Feather style={styles.endIcon} name={endIcon} size={20} />
        ) : null}
      </View>
    </Pressable>
  );
};

interface IProps {}
const Setting: React.FC<IProps> = () => {
  const {handleLogout} = useSetting();
  const {user} = useLoggedInUser();
  const navigation =
    useNavigation<NativeStackNavigationProp<AppStackParamList>>();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <Avatar.Image
            size={70}
            source={require('../../assets/images/user.jpg')}
          />
          <Text style={styles.profileName}>Hello, {user?.firstName}</Text>
        </View>
        <Divider />
        <SettingItem
          onPress={() => {
            navigation.navigate(Routes.ABOUT);
          }}
          title="About"
          icon="info"
          endIcon="chevron-right"
        />
        <Divider />
        <SettingItem
          titleStyle={{color: 'tomato'}}
          onPress={() => {
            handleLogout();
          }}
          title="Logout"
          icon="log-out"
        />
      </View>
    </SafeAreaView>
  );
};

export default Setting;
