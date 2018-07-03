/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import firebase from 'firebase';
import { width, height } from 'react-native-dimension';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import DeviceInfo from 'react-native-device-info';
import { EventRegister } from 'react-native-event-listeners';
import Communications from 'react-native-communications';
import moment from 'moment';

import { colors } from './config/styles';
import images from './config/images';

firebase.initializeApp({
  apiKey: "AIzaSyBo-KUxwO1Cjc-sGp5tfmIzFhTDMqarzWM",
  authDomain: "kyatexchange.firebaseapp.com",
  databaseURL: "https://kyatexchange.firebaseio.com",
  projectId: "kyatexchange",
  storageBucket: "kyatexchange.appspot.com",
  messagingSenderId: "970278529948"
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    padding: 20
  },
  textInputStyle: {
    height: height(4),
    borderRadius: 3,
    backgroundColor: colors.white,
    textAlign: "right",
    paddingLeft: 5,
    paddingRight: 5
  },
  imageStyle1: {
    height: height(4),
    width: height(4) * 5 / 4,
    alignSelf: "flex-start"
  },
  imageStyle2: {
    height: height(4),
    width: height(4) * 9 / 5,
    alignSelf: "flex-start"
  }
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      currentPage: 0,
      isLoading: false,
      logged: false,
      kyat: 1,
      chineseRate: 1,
      dollarRate: 1,
      ringgitRate: 1,
      singaporeRate: 1,
      thaibahtRate: 1,
      chineseVal: 1,
      dollarVal: 1,
      ringgitVal: 1,
      singaporeVal: 1,
      thaibahtVal: 1,
      kyatChinese: 1,
      kyatDollar: 1,
      kyatRinggit: 1,
      kyatSingapore: 1,
      kyatThaibaht: 1,
      kyatTempVal: 1,
      bahtTempVal: 1,
      bahtTempValCalc: 1,
      kyatTempValCalc: 1,
    };
    this.state = this.initialState;
    this.currentUser = null;
  }

  async componentDidMount() {
    this.timer = setInterval(() => {
      this.forceUpdate();
    }, 60000);
    firebase
      .auth()
      .signInAnonymously()
      .then((user) => {
        console.log(user.isAnonymous);
      });
    firebase
      .database()
      .ref('rates')
      .on("value", snapshot => 
        this.reloadRates(snapshot)
      );
      let texxt = 'For more service inquiry, please contact us';
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  reloadRates(temp) {
    const rates = temp.val();
    this.setState({
      chineseRate: rates.chinese,
      dollarRate: rates.dollar,
      singaporeRate: rates.singapore,
      ringgitRate: rates.ringgit,
      thaibahtRate: rates.thaibaht,
      kyatChinese: rates.chinese * this.state.chineseVal,
      kyatDollar: rates.dollar * this.state.dollarVal,
      kyatSingapore: rates.singapore * this.state.singaporeVal,
      kyatRinggit: rates.ringgit * this.state.ringgitVal,
      kyatThaibaht: rates.thaibaht * this.state.thaibahtVal,
      bahtTempValCalc: this.state.bahtTempVal * rates.thaibaht,
      kyatTempValCalc: this.state.kyatTempVal / rates.thaibaht
    });
  }

  render() {
    return <View style={styles.container}>
        <KeyboardAwareScrollView scrollEnabled={false} style={{ flex: 1 }}>
          <View style={{ height: Platform.OS === 'android' ? height(100) - 60 : height(100) - 40, width: width(100) - 40 }}>
            <View style={{ flex: 1, justifyContent: "center", flexDirection: "row" }}>
              <Image source={images.logoLeft} style={{ width: (height(10) - 22) * 10 / 9, height: height(10) - 22, marginTop: 5, marginRight: 20, alignSelf: "center" }} resizeMode="stretch" />
              <Text style={{ color: colors.second, fontSize: height(10) - 12, fontWeight: "900" }}>
                KET
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <View style={{ flex: 1, justifyContent: "center" }}>
                <Text style={{ color: colors.white, textAlign: "center", fontSize: 20 }} >
                  {"Kyat Exchange & Transfer"}
                </Text>
              </View>
              <View style={{ flex: 1, justifyContent: "center" }}>
                <Text style={{ color: colors.white, textAlign: "center", fontSize: 16 }}>
                  {moment().format("DD MMM YYYY, hh:mm A")}
                </Text>
              </View>
            </View>
            <View style={{ flex: 0.8, flexDirection: "row", justifyContent: "center" }}>
              <View style={{ justifyContent: "center" }}>
                <Text style={{ color: colors.white, fontSize: 16, marginRight: 10 }}>
                  Exchange Rate
                </Text>
              </View>
              <View style={{ justifyContent: "center" }}>
                <Image source={images.exchangeRate} style={{ width: height(18) - 6, height: height(6) - 2 }} resizeMode="contain" />
              </View>
              <View style={{ flex: 1 }} />
            </View>
            <View style={{ flex: 3.3 }}>
              <View style={{ flex: 1, marginTop: 3, marginBottom: 7, flexDirection: "row" }}>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <View style={{ flex: 1, justifyContent: "center" }}>
                    <TextInput
                      onChangeText={(text) => {this.setState({ dollarVal: Number(text), kyatDollar: this.state.dollarRate * Number(text) })}}
                      value={this.state.dollarVal.toString()}
                      keyboardType="number-pad"
                      style={styles.textInputStyle} />
                  </View>
                  <View style={{ flex: 1, justifyContent: "center", marginLeft: 5 }}>
                    <Image source={images.dollarSymbol} style={styles.imageStyle2} resizeMode="contain" />
                  </View>
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <View style={{ flex: 2, justifyContent: "center" }}>
                    <TextInput value={this.state.kyatDollar === 1 ? '1' : this.state.kyatDollar.toFixed(2)} keyboardType="number-pad" style={styles.textInputStyle} />
                  </View>
                  <View style={{ flex: 1, justifyContent: "center", marginLeft: 5 }}>
                    <Image source={images.kyatSymbol} style={styles.imageStyle1} resizeMode="contain" />
                  </View>
                </View>
              </View>
              <View style={{ flex: 1, marginTop: 3, marginBottom: 7, flexDirection: "row" }}>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <View style={{ flex: 1, justifyContent: "center" }}>
                    <TextInput
                      onChangeText={(text) => {this.setState({ singaporeVal: Number(text), kyatSingapore: this.state.singaporeRate * Number(text) })}}
                      value={this.state.singaporeVal.toString()}
                      keyboardType="number-pad"
                      style={styles.textInputStyle} />
                  </View>
                  <View style={{ flex: 1, justifyContent: "center", marginLeft: 5 }}>
                    <Image source={images.singaporeSymbol} style={{ height: height(4), width: height(4) * 13 / 5, alignSelf: "flex-start" }} resizeMode="contain" />
                  </View>
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <View style={{ flex: 2, justifyContent: "center" }}>
                    <TextInput value={this.state.kyatSingapore === 1 ? '1' : this.state.kyatSingapore.toFixed(2)} keyboardType="number-pad" style={styles.textInputStyle} />
                  </View>
                  <View style={{ flex: 1, justifyContent: "center", marginLeft: 5 }}>
                    <Image source={images.kyatSymbol} style={styles.imageStyle1} resizeMode="contain" />
                  </View>
                </View>
              </View>
              <View style={{ flex: 1, marginTop: 3, marginBottom: 7, flexDirection: "row" }}>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <View style={{ flex: 1, justifyContent: "center" }}>
                    <TextInput
                      onChangeText={(text) => {this.setState({ thaibahtVal: Number(text), kyatThaibaht: this.state.thaibahtRate * Number(text) })}}
                      value={this.state.thaibahtVal.toString()}
                      keyboardType="number-pad"
                      style={styles.textInputStyle} />
                  </View>
                  <View style={{ flex: 1, justifyContent: "center", marginLeft: 5 }}>
                    <Image source={images.thaibahtSymbol} style={{ height: height(4), width: height(4) * 12.5 / 5, alignSelf: "flex-start" }} resizeMode="contain" />
                  </View>
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <View style={{ flex: 2, justifyContent: "center" }}>
                    <TextInput
                      value={this.state.kyatThaibaht === 1 ? '1' : this.state.kyatThaibaht.toFixed(2)}
                      keyboardType="number-pad"
                      style={styles.textInputStyle} />
                  </View>
                  <View style={{ flex: 1, justifyContent: "center", marginLeft: 5 }}>
                    <Image source={images.kyatSymbol} style={styles.imageStyle1} resizeMode="contain" />
                  </View>
                </View>
              </View>
              <View style={{ flex: 1, marginTop: 3, marginBottom: 7, flexDirection: "row" }}>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <View style={{ flex: 1, justifyContent: "center" }}>
                    <TextInput
                      onChangeText={(text) => {this.setState({ ringgitVal: Number(text), kyatRinggit: this.state.ringgitRate * Number(text) })}}
                      value={this.state.ringgitVal.toString()}
                      keyboardType="number-pad"
                      style={styles.textInputStyle} />
                  </View>
                  <View style={{ flex: 1, justifyContent: "center", marginLeft: 5 }}>
                    <Image source={images.ringgitSymbol} style={{ height: height(4), width: height(4) * 9.5 / 5, alignSelf: "flex-start" }} resizeMode="contain" />
                  </View>
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <View style={{ flex: 2, justifyContent: "center" }}>
                    <TextInput value={this.state.kyatRinggit === 1 ? '1' : this.state.kyatRinggit.toFixed(2)} keyboardType="number-pad" style={styles.textInputStyle} />
                  </View>
                  <View style={{ flex: 1, justifyContent: "center", marginLeft: 5 }}>
                    <Image source={images.kyatSymbol} style={styles.imageStyle1} resizeMode="contain" />
                  </View>
                </View>
              </View>
              <View style={{ flex: 1, marginTop: 3, marginBottom: 7, flexDirection: "row" }}>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <View style={{ flex: 1, justifyContent: "center" }}>
                    <TextInput
                      onChangeText={(text) => {this.setState({ chineseVal: Number(text), kyatChinese: this.state.chineseRate * Number(text) })}}
                      value={this.state.chineseVal.toString()}
                      keyboardType="number-pad"
                      style={styles.textInputStyle} />
                  </View>
                  <View style={{ flex: 1, justifyContent: "center", marginLeft: 5 }}>
                    <Image source={images.chineseSymbol} style={styles.imageStyle2} resizeMode="contain" />
                  </View>
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <View style={{ flex: 2, justifyContent: "center" }}>
                    <TextInput value={this.state.kyatChinese === 1 ? '1' : this.state.kyatChinese.toFixed(2)} keyboardType="number-pad" style={styles.textInputStyle} />
                  </View>
                  <View style={{ flex: 1, justifyContent: "center", marginLeft: 5 }}>
                    <Image source={images.kyatSymbol} style={styles.imageStyle1} resizeMode="contain" />
                  </View>
                </View>
              </View>
            </View>
            <View style={{ flex: 0.8, flexDirection: "row", justifyContent: "center" }} >
              <View style={{ justifyContent: "center" }}>
                <Text style={{ color: colors.white, fontSize: 16, marginRight: 10 }}>
                  Transfer Rate
                </Text>
              </View>
              <View style={{ justifyContent: "center" }}>
                <Image source={images.transferRate} style={{ width: height(13.2) - 4.4, height: height(6) - 2 }} resizeMode="contain" />
              </View>
              <View style={{ flex: 1 }} />
            </View>
            <View style={{ flex: 1.3 }} >
              <View style={{ flex: 1, marginTop: 3, marginBottom: 7, flexDirection: "row" }}>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <View style={{ flex: 1, justifyContent: "center" }}>
                    <TextInput
                      onChangeText={(text) => {this.setState({ kyatTempVal: Number(text), kyatTempValCalc: Number(text) / this.state.thaibahtRate })}}
                      value={this.state.kyatTempVal.toString()}
                      keyboardType="number-pad"
                      style={styles.textInputStyle} />
                  </View>
                  <View style={{ flex: 1, justifyContent: "center", paddingLeft: 5, paddingRight: 5, flexDirection: 'row' }}>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                      <Image source={images.kyatSymbol} style={styles.imageStyle1} resizeMode="contain" />
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                      <Image source={images.rightSymbol} style={{ height: height(3.5), width: height(4) * 5 / 4, alignSelf: "flex-start" }} resizeMode="stretch" />
                    </View>
                  </View>
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <View style={{ flex: 2, justifyContent: "center" }}>
                    <TextInput value={this.state.kyatTempValCalc === 1 ? '1' : this.state.kyatTempValCalc.toFixed(2)} keyboardType="number-pad" style={styles.textInputStyle} />
                  </View>
                  <View style={{ flex: 1, justifyContent: "center", marginLeft: 5 }}>
                    <Image source={images.bahtSmallSymbol} style={{ height: height(4), width: height(4) * 7 / 5, alignSelf: "flex-start" }} resizeMode="contain" />
                  </View>
                </View>
              </View>
              <View style={{ flex: 1, marginTop: 3, marginBottom: 7, flexDirection: "row" }}>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <View style={{ flex: 1, justifyContent: "center" }}>
                    <TextInput
                      onChangeText={(text) => {this.setState({ bahtTempVal: Number(text), bahtTempValCalc: Number(text) * this.state.thaibahtRate })}}
                      value={this.state.bahtTempVal.toString()}
                      keyboardType="number-pad"
                      style={styles.textInputStyle} />
                  </View>
                  <View style={{ flex: 1, justifyContent: "center", paddingLeft: 5, paddingRight: 5, flexDirection: 'row' }}>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                      <Image source={images.bahtSmallSymbol} style={{ height: height(4), width: height(4) * 7 / 5, alignSelf: "flex-start" }} resizeMode="contain" />
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                      <Image source={images.rightSymbol} style={{ height: height(3.5), width: height(4) * 5 / 4, alignSelf: "flex-start" }} resizeMode="stretch" />
                    </View>
                  </View>
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <View style={{ flex: 2, justifyContent: "center" }}>
                    <TextInput value={this.state.bahtTempValCalc === 1 ? '1' : this.state.bahtTempValCalc.toFixed(2)} keyboardType="number-pad" style={styles.textInputStyle} />
                  </View>
                  <View style={{ flex: 1, justifyContent: "center", marginLeft: 5 }}>
                    <Image source={images.kyatSymbol} style={styles.imageStyle1} resizeMode="contain" />
                  </View>
                </View>
              </View>
            </View>
            <View style={{ flex: 0.7, justifyContent: "center", justifyContent: 'center' }} >
              <View style={{ justifyContent: "center" }}>
                <Image source={images.moreInfo} style={{ width: height(45) - 18, height: height(5) - 2 }} resizeMode="contain" />
              </View>
              <View style={{ flex: 1 }} />
            </View>
            <View style={{ flex: 1.1, paddingLeft: 20, paddingRight: 20 }} >
              <View style={{ height: height(4), justifyContent: 'center', flexDirection: 'row' }}>
                <View style={{ justifyContent: "center" }}>
                  <Image source={images.thaiPhone} style={{ width: height(9.6) - 4.8, height: height(4) - 2 }} resizeMode="contain" />
                </View>
                <TouchableOpacity onPress={() => Communications.phonecall('+66854065553', true)} style={{ justifyContent: "center", flex: 1 }}>
                  <Text style={{ color: colors.white, fontSize: 12, marginRight: 10 }}>
                    +66-854065553
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Communications.phonecall('0854067772', true)} style={{ justifyContent: "center", flex: 1 }}>
                  <Text style={{ color: colors.white, fontSize: 12, marginRight: 10 }}>
                    0854067772
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{ height: height(4), justifyContent: 'center', flexDirection: 'row' }}>
                <View style={{ justifyContent: "center" }}>
                  <Image source={images.myanmarPhone} style={{ width: height(9.6) - 4.8, height: height(4) - 2 }} resizeMode="contain" />
                </View>
                <TouchableOpacity onPress={() => Communications.phonecall('+959785534298', true)} style={{ justifyContent: "center", flex: 1 }}>
                  <Text style={{ color: colors.white, fontSize: 12, marginRight: 10 }}>
                    +95-9785534298
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Communications.phonecall('09400036760', true)} style={{ justifyContent: "center", flex: 1 }}>
                  <Text style={{ color: colors.white, fontSize: 12, marginRight: 10 }}>
                    09400036760
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{ flex: 1 }}></View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>;
  }
}