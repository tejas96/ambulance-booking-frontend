import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect, useRef, useState} from 'react';
import {Animated, FlatList, SafeAreaView, View, ViewToken} from 'react-native';
import {Button} from '../../components';
import {Routes} from '../../navigation';
import {LoginStackParamList} from '../../navigation/authStack';
import {Storage} from '../../utils';
import data from './data';
import OnBoardingItem from './onBoardingItem';
import Paginator from './paginator';
import styles from './styles';

interface ViewableItemsChangedModel {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

const Onboarding = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<LoginStackParamList>>();
  const [currentIndex, setCurrentIndex] = useState<number | null>(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const viewableItemsChanged = useRef(
    (viewableItems: ViewableItemsChangedModel) => {
      setCurrentIndex(viewableItems.viewableItems[0].index);
    },
  ).current;
  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;
  const slidesRef = useRef<FlatList | null>(null);

  /**
   * @description This function is used to navigate to the next screen
   */
  const handleNextButtonPress = () => {
    if (currentIndex && currentIndex < data.length - 1) {
      slidesRef?.current?.scrollToIndex({index: currentIndex + 1});
    } else {
      navigation.replace(Routes.LOGIN);
    }
  };

  /**
   * @description This function is used to navigate to the login screen
   */
  const handleSkipButtonPress = () => {
    navigation.replace(Routes.LOGIN);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      Storage.getStorage('onboarding').then(isOnboard => {
        if (isOnboard) {
          navigation.replace(Routes.LOGIN);
        }
      });
    });
    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flatView}>
        <FlatList
          data={data}
          renderItem={({item}) => <OnBoardingItem item={item} />}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          bounces={false}
          keyExtractor={item => item.id}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: false,
            },
          )}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          scrollEventThrottle={32}
          ref={slidesRef}
        />
      </View>
      <Paginator slides={data} scrollX={scrollX} />
      <View style={styles.buttons}>
        <Button onPress={handleSkipButtonPress} mode={'text'}>
          Skip
        </Button>
        <Button onPress={handleNextButtonPress} mode={'text'}>
          {currentIndex === data.length - 1 ? 'Done' : 'Next'}
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;
