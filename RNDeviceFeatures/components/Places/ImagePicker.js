import {
  launchCameraAsync,
  PermissionStatus,
  useCameraPermissions,
} from "expo-image-picker";
import { useState } from "react";
import { Alert, Button, Image, StyleSheet, View, Text } from "react-native";
import { Colors } from "../../constants/Colors";

function ImagePicker({ onPickImage }) {
  const [pickedImage, setPickedImage] = useState(null);

  const [cameraPermissionLocation, requestPermission] = useCameraPermissions();

  async function verifyPermission() {
    if (cameraPermissionLocation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }
    if (cameraPermissionLocation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions!",
        "You new to allow access to use this app.",
      );

      return false;
    }
    return true;
  }

  async function takeImagehandler() {
    const hasPermission = await verifyPermission();

    if (!hasPermission) {
      return;
    }
    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });

    setPickedImage(image.assets[0].uri);

    onPickImage(image.assets[0].uri);
  }

  return (
    <View>
      <View style={styles.imagePreview}>
        {pickedImage ? (
          <Image style={styles.image} source={{ uri: pickedImage }} />
        ) : (
          <Text>No image taken yet.</Text>
        )}
      </View>
      <Button title="Take Image" onPress={takeImagehandler}></Button>
    </View>
  );
}

export default ImagePicker;

const styles = StyleSheet.create({
  imagePreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },

  image: {
    width: "100%",
    height: "100%",
  },
});
