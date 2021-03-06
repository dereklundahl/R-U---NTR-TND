import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from './src/components/Header';
import Planets from './src/components/Planets';
import People from './src/components/People';
import Films from './src/components/Films';
import Species from './src/components/Species';
import Vehicles from './src/components/Vehicles';
import Starships from './src/components/Starships';
import QuoteGenerator from './src/components/QuoteGenerator';
import { useRandomQuote, useRandomIndex } from './src/hooks/generateQuote';
import { quotes } from './src/components/QuoteGenerator';

export default function App() {

  /* demonstrate:
  install jest
  add some unit tests to components
  if time, test hooks as well
  */

  // Maybe when I hook up navigation or refactor api to be DRY

  // Turn strings into enum for the navigation buttons

  const [isSelected, setIsSelected] = React.useState("people");

  // use callback example
  const setCategory = React.useCallback((category: string) => {
    setIsSelected(category)
  }, [setIsSelected])

  // use memo example
  const renderList = React.useMemo(() => {
    switch (isSelected) {
      case "People":
        return <People />
      case "Planets":
        return <Planets />
      case "Films":
        return <Films />
      case "Species":
        return <Species />
      case "Vehicles":
        return <Vehicles />
      case "Starships":
        return <Starships />
      default:
        return <People />
    }
  }, [isSelected])

  // const [quote, generateQuote] = useRandomQuote();

  const [index, createRandomIndex] = useRandomIndex();

  React.useEffect(() => {
    // generateQuote(quotes)
    createRandomIndex()
  }, [renderList])

  return (
    <View style={styles.container}>
      <Header setCategory={setCategory} isSelected={isSelected} />
      <ScrollView>
        <View style={styles.body}>
          {renderList}
        </View>
        <QuoteGenerator quote={quotes[index]} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: "#000000"
  },
  body: {
    flexDirection: 'row',
  }
});
