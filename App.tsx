import {View, Text, SafeAreaView, Pressable} from 'react-native';
import React, {useState} from 'react';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [key, setKey] = useState(0);

  const IsPlayingButton = () => {
    if (isPlaying === false) {
      return (
        <Pressable
          style={{margin: 50, backgroundColor: 'green', padding: 20}}
          onPress={() => {
            setIsPlaying(!isPlaying);
          }}>
          <Text>Başlat</Text>
        </Pressable>
      );
    } else {
      return (
        <Pressable
          style={{margin: 50, backgroundColor: 'red', padding: 20}}
          onPress={() => {
            setIsPlaying(!isPlaying);
          }}>
          <Text>Durdur</Text>
        </Pressable>
      );
    }
  };
  console.warn(isPlaying);
  return (
    <SafeAreaView
      style={{justifyContent: 'center', alignItems: 'center', marginTop: 150}}>
      <CountdownCircleTimer
        key={key}
        isPlaying={isPlaying}
        onComplete={() => {
          setKey(prevKey => prevKey + 1);
          setIsPlaying(!isPlaying);
        }}
        duration={5}
        colors={['#004777', '#F7B801', '#A30000', '#A30000']}
        colorsTime={[7, 5, 2, 0]}>
        {({remainingTime}) => (
          <Text style={{fontSize: 20, color: 'red'}}>{remainingTime}</Text>
        )}
      </CountdownCircleTimer>
      <IsPlayingButton />
      <Pressable
        style={{marginTop: 30}}
        onPress={() => {
          setKey(prevKey => prevKey + 1);
          setIsPlaying(false);
        }}>
        <Text>SIFIRLA</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default App;
