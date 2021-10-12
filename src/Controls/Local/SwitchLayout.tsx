import React, {useContext} from 'react';
import PropsContext from '../../PropsContext';
import RtcContext, {DispatchType} from '../../RtcContext';
import BtnTemplate from '../BtnTemplate';
import styles from '../../Style';

function SwitchLayout() {
  const {styleProps} = useContext(PropsContext);
  const {localBtnStyles} = styleProps || {};
  const {endCall} = localBtnStyles || {};
  const {dispatch} = useContext(RtcContext);

  return (
    <BtnTemplate
      name={'switchLayout'}
      style={{...styles.localBtn, ...(endCall as object)}}
      onPress={() =>
        (dispatch as DispatchType<'SwitchLayout'>)({
          type: 'SwitchLayout',
          value: [],
        })
      }
    />
  );
}

export default SwitchLayout;
