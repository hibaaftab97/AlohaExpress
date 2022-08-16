import React, { Component, useState } from "react";
import { View, Modal, TouchableOpacity, Image, Platform } from "react-native";
import { Icons } from "../../assets/images";


import { BlurView } from "@react-native-community/blur";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { check, request, PERMISSIONS, RESULTS } from "react-native-permissions";
import styles from "./styles";
import {vh, vw} from '../../units';
import TextWrapper from "../TextWrapper";


export default function Index({
  focused = false,
  modalVisible,
  setModalVisible,
  text = "",
  imagesShown = false,
  profilepicture,
}) {
  const [visible, setVisible] = useState(false);

  const show = (data) => {
    setVisible(true);
  };
  const hide = () => {
    setModalVisible(false);
  };
  const onCross = () => {
    hide();
  };

  const requestPermission = (permission) => {
    request(permission)
      .then((result) => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
            console.log(
              "This feature is not available (on this device / in this context)"
            );
            break;
          case RESULTS.DENIED:
            console.log(
              "The permission has not been requested / is denied but requestable"
            );
            break;
          case RESULTS.LIMITED:
            console.log("The permission is limited: some actions are possible");
            break;
          case RESULTS.GRANTED:
            if (
              permission === PERMISSIONS.IOS.CAMERA ||
              permission === PERMISSIONS.ANDROID.CAMERA
            ) {
              handleOnSelectCamera();
            } else {
              handleOnSelectPhoto();
            }
            break;
          case RESULTS.BLOCKED:
            console.log("The permission is denied and not requestable anymore");
            break;
        }
      })
      .catch((error) => {});
  };

  const checkPermission = (permission) => {
    check(permission)
      .then((result) => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
            console.log(
              "This feature is not available (on this device / in this context)"
            );
            break;
          case RESULTS.DENIED:
            requestPermission(permission);
            break;
          case RESULTS.LIMITED:
            console.log("The permission is limited: some actions are possible");
            break;
          case RESULTS.GRANTED:
            if (
              permission === PERMISSIONS.IOS.CAMERA ||
              permission === PERMISSIONS.ANDROID.CAMERA
            ) {
              handleOnSelectCamera();
            } else {
              handleOnSelectPhoto();
            }

            break;
          case RESULTS.BLOCKED:
            console.log("The permission is denied and not requestable anymore");
            break;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const removePicture = () => {
    profilepicture("");
    hide();
  };
  const handleOnSelectCamera = () => {
    setTimeout(() => {
      launchCamera(
        {
        },
        (response) => {
          console.log("resonsee canera", response.assets[0]);
          if (response?.didCancel) {
          } else {
            profilepicture(response.assets[0]);
          }

          // console.log('handleOnSelectCamera response', response);
          //   if (this.props.handleOnSelectImage && response?.assets) {
          //     this.props.handleOnSelectImage(response.assets);
          //   }
        }
      );
    }, 500);
    hide();
  };

  const handleOnSelectPhoto = () => {
    setTimeout(() => {
      launchImageLibrary(
        {
        },
        (response) => {
          console.log("resonsee canera", response);
          if (response?.didCancel) {
          } else {
            profilepicture(response.assets[0]);
          }
          // console.log('handleOnSelectPhoto response', response);
          //   if (handleOnSelectImage && response?.assets) {
          //     handleOnSelectImage(response.assets);
          //   }
        }
      );
    }, 500);
    hide();
  };

  return (
    <Modal
      key={"cbdfdfczcxzt"}
      visible={modalVisible}
      transparent={true}
      animationType="fade"
    >
      <BlurView
        style={{
          position: "absolute",
          width: 100*vw,
          height:100*vh
        }}
        blurType="light"
        blurAmount={5}
        reducedTransparencyFallbackColor="white"
      />
      <TouchableOpacity
        style={styles.modalTouchable}
        onPress={() => {
          hide();
        }}
      ></TouchableOpacity>
      <View style={styles.imageBg}>
        <TouchableOpacity style={styles.crossContainer} onPress={onCross}>
          <Image
            source={Icons.close}
            style={styles.cross}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View style={styles.container}>
          {/* <Text style={styles.text}>{text}</Text> */}
        </View>
        <View
          style={{
            // backgroundColor: "rgba(52, 52, 52, 0.15)",
            height: 5*vh,
            width: 100*vw,
            // marginTop: 2*vh,
            // marginBottom: 4*vh,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: 100*vw,

            justifyContent: "space-evenly",
          }}
        >
          <TouchableOpacity
            style={{ alignItems: "center" }}
            onPress={() =>
              checkPermission(
                Platform.OS === "android"
                  ? PERMISSIONS.ANDROID.CAMERA
                  : PERMISSIONS.IOS.CAMERA
              )
            }
          >
            <Image
              source={Icons.profilecamera}
              style={{
                resizeMode: "contain",
                width: 8*vw,
                height: 8*vw,
              }}
            />
            <TextWrapper    style={styles.text}>Camera</TextWrapper>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ alignItems: "center" }}
            onPress={() =>
              checkPermission(
                Platform.OS === "android"
                  ? PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE
                  : PERMISSIONS.IOS.PHOTO_LIBRARY
              )
            }
          >
            <Image
              source={Icons.gallery}
              style={{
                resizeMode: "contain",
                width: 8*vw,
                height: 8*vw,
                //   marginTop: vh * 1,
              }}
            />
            <TextWrapper    style={styles.text}>Photo</TextWrapper>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ alignItems: "center" }}
            onPress={() => removePicture()}
          >
            <Image
              source={Icons.removepicture}
              style={{
                resizeMode: "contain",
                width: 8*vw,
                height:8*vw,
                //   marginTop: vh * 1,
              }}
            />
            <TextWrapper    style={styles.text}>Remove</TextWrapper>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}