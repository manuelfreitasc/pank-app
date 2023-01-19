import React, { Component } from 'react'
import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';

import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

function Home() {
    const [type, setType] = useState(CameraType.back);
    let [zoom, setzoom] = useState<number>(0);

    const [permission, requestPermission] = Camera.useCameraPermissions();

    function toggleCameraType() {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
        console.log(type, zoom);
        setzoom(100)
    }

    return (
        <Container>
            <Camera style={{ flex: 1, height: 100 }} type={type} zoom={zoom}>
              
                <Menu>
                    <TouchableOpacity style={{ backgroundColor: "#FFF", width: 60,  height: 60, borderRadius: 50}} onPress={toggleCameraType}>
                        <Title>Press</Title>
                    </TouchableOpacity>

                </Menu>
            </Camera>
           
        </Container>
    )
}

export { Home }


const Container = styled.View`
  flex: 1;
  background-color:  #000 ;
  justify-content: space-between;
`;

const Header = styled.View`
display: flex;
 width: 100%;
  height: 100px;
  padding-top: 15%;
  background-color:  #804f00;
  justify-content: space-between;

  align-items:center;
`;
const Title = styled.Text`
 font-size: 18px;
 font-weight: bold;
`;

const Button = styled.TouchableOpacity`
 width: 60px;
  height: 60px;
  background-color:  #DDDD;
  border-radius: 50px;
  border: 5px solid #a07e07dd;

`;

const Menu = styled.View`
 width: 100%;
 margin: 0 auto;
  height: 100px;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;