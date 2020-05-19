import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from './src/components/Header';
import Planets from './src/components/Planets';
import People from './src/components/People';

export default function App() {

  /* demonstrate useState, useMemo, useCallback
  Render components based on what button is clicked in the nav bar
  use a memoized if or switch statement
  use a custom hook
  */

  // find a place to use enums as well

  // const [isSelected, setIsSelected] = React.useState("people");

  // const viewSelected = React.useCallback(() => {

  // }, [setSelected])

  // const renderList = React.useMemo(() => {
  //   switch (isSelected) {
  //     case "people":
  //       return <People />
  //     case "planets":
  //       return <Planets />
  //     default:
  //       return <People />
  //   }
  // }, [isSelected])



  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <View style={styles.body}>
          {/* {renderList} */}
          <People />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: "#f0ebeb"
  },
  body: {
    flexDirection: 'row',
  }
});
