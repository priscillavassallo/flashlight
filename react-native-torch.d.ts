declare module 'react-native-torch' {
  const Torch: {
    switchState(on: boolean): Promise<void>;
  };

  export default Torch;
}
