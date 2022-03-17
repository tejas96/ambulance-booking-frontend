import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import {List, Searchbar, useTheme} from 'react-native-paper';
import {useRecoilValueLoadable} from 'recoil';
import {Button, CheckBox, Typography} from '../../components';
import {HospitalRegistration} from '../../model';
import {fetchHospitalsByCityName} from '../../redux/atoms';
import {HealthAssessmentModel} from './const';
import useAmbulanceContainer from './container';
import styles from './styles';

interface IProps {}

const BottomSheetComponent: React.FC<IProps> = () => {
  const {bottomSheetForm, setBottomSheetForm, handleConfirmBooking} =
    useAmbulanceContainer();
  const [searchQuery, setSearchQuery] = useState('');
  const [hospitalRecords, setHospitalRecords] = useState<
    HospitalRegistration[]
  >([]);
  const [showSearchResult, setShowSearchResult] = useState(false);
  const hospitalsAtom = useRecoilValueLoadable(
    fetchHospitalsByCityName('sangli'),
  );
  const onChangeSearch = (query: string) => {
    setShowSearchResult(true);
    const filterRecords = hospitalsAtom.contents.filter(
      (item: HospitalRegistration) => {
        if (item.hospitalName.toLowerCase().includes(query.toLowerCase())) {
          return true;
        } else false;
      },
    );
    setHospitalRecords(filterRecords);
    setSearchQuery(query);
  };
  const theme = useTheme();

  useEffect(() => {
    switch (hospitalsAtom.state) {
      case 'hasValue':
        setHospitalRecords(hospitalsAtom.contents);
        break;
    }
  }, [hospitalsAtom]);
  return (
    <ScrollView style={styles.bottomSheet}>
      <View style={styles.searchContainer}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          onIconPress={() => {
            console.log('click');
            setShowSearchResult(false);
          }}
        />
        {showSearchResult ? (
          <View style={styles.searchResultView}>
            {hospitalRecords?.map((item, index) => {
              return (
                <List.Item
                  key={index}
                  title={item.hospitalName}
                  description={item.description}
                  onPress={() => {
                    setShowSearchResult(false);
                    setSearchQuery(item.hospitalName);
                    setBottomSheetForm({
                      ...bottomSheetForm,
                      hospitalRecord: item,
                    });
                  }}
                />
              );
            })}
          </View>
        ) : null}
      </View>
      <Typography type="title">Any emergency equipment you need?</Typography>
      <View>
        {bottomSheetForm.healthAssessment.map(item => (
          <CheckBox
            key={item.id}
            label={item.label}
            align="right"
            uncheckedColor={theme.colors.accent}
            color={theme.colors.primary}
            onPress={() => {
              const bottomSheetFormClone = JSON.parse(
                JSON.stringify(bottomSheetForm),
              );
              bottomSheetFormClone.healthAssessment.map(
                (assessment: HealthAssessmentModel) => {
                  if (item.id === assessment.id) {
                    assessment.status = !assessment.status;
                  }
                  return assessment;
                },
              );
              setBottomSheetForm(bottomSheetFormClone);
            }}
            status={item.status ? 'checked' : 'unchecked'}
          />
        ))}
      </View>
      <View style={styles.bottomShitFooter}>
        <Button onPress={handleConfirmBooking} style={styles.bottomShitBtn}>
          Confirm
        </Button>
      </View>
    </ScrollView>
  );
};

export default BottomSheetComponent;
