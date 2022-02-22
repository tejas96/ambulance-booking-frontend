import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {UserRole} from '../../../model';
import {Routes} from '../../../navigation';
import {RegisterStackParamList} from '../../../navigation/registerNavigationStack';

const useContainer = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RegisterStackParamList>>();
  const handleRoleSelect = (role: UserRole): void => {
    navigation.navigate(Routes.USER_DETAILS_INFO, {
      role,
    });
  };
  return {
    handleRoleSelect,
  };
};

export default useContainer;
