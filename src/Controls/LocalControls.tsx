import React, {useContext} from 'react';
import {View} from 'react-native';
import styles from '../Style';
import EndCall from './Local/EndCall';
import LocalAudioMute from './Local/LocalAudioMute';
import LocalVideoMute from './Local/LocalVideoMute';
import SwitchCamera from './Local/SwitchCamera';
import RemoteControls from './RemoteControls';
import {MaxUidConsumer} from '../MaxUidContext';
import PropsContext, {role} from '../PropsContext';
import LocalUserContextComponent from '../LocalUserContext';
import SwitchLayout from './Local/SwitchLayout';

function Controls(props: {showButton: Boolean}) {
  const {styleProps, rtcProps} = useContext(PropsContext);
  const {localBtnContainer, maxViewRemoteBtnContainer} = styleProps || {};
  const showButton = props.showButton !== undefined ? props.showButton : true;
  return (
    <LocalUserContextComponent>
      <View style={{...styles.Controls, ...(localBtnContainer as object)}}>
        {rtcProps.role === role.Audience ? (
          <EndCall />
        ) : (
          <>
            <LocalAudioMute />
            <LocalVideoMute />
            <SwitchCamera />
            <SwitchLayout />
            <EndCall />
          </>
        )}
      </View>
      {showButton ? (
        <MaxUidConsumer>
          {(users) => (
            <View
              style={{
                ...styles.Controls,
                bottom: styles.Controls.bottom + 70,
                ...(maxViewRemoteBtnContainer as object),
              }}>
              <RemoteControls user={users[0]} showRemoteSwap={false} />
            </View>
          )}
        </MaxUidConsumer>
      ) : (
        <></>
      )}
    </LocalUserContextComponent>
  );
}

export default Controls;
