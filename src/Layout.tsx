import React, { useEffect, useMemo } from 'react'
import { Outlet, Link } from "react-router-dom";
import { VStack, Flex, useDisclosure, useEventListenerMap } from '@chakra-ui/react';
import * as nearAPI from "near-api-js";
import axios from 'axios';

import { useWallet,  useStore,  ActionKind, useNear } from './store';
import { REQUEST_ENDPOINT } from './constants';
import { toast } from 'react-toastify';

import { successOption, errorOption } from './constants';
import {getConfig} from "./config";
import Navbar from './Pages/Navbar'
import Footer from "./Pages/Footer";
import DepositModal from './Pages/DepositModal'
import WithdrawModal from './Pages/WithdrawModal'
import WaitingModal from './Pages/WaitingModal';
import { fetchData } from './Util';

declare let window: any;
const nearConfig = getConfig("testnet");

const Layout = () => {

  const { isOpen: isOpenDeposit, onOpen: onOpenDeposit, onClose: onCloseDeposit } = useDisclosure();
  const { isOpen: isOpenWithdraw, onOpen: onOpenWithdraw, onClose: onCloseWithdraw } = useDisclosure();
  const { isOpen: isOpenWaiting, onOpen: onOpenWaiting, onClose: onCloseWaiting } = useDisclosure();

  const { state, dispatch } = useStore();
  const wallet = useWallet();
  const near = useNear();

  const initialize = () => {
    window.localStorage.removeItem('action');
  }
  const checkTransaction = async () => {

  }

  useEffect(() => {
    dispatch({ type: ActionKind.setOpenDepositModal, payload: onOpenDeposit });
    dispatch({ type: ActionKind.setOpenWithdrawModal, payload: onOpenWithdraw });
    dispatch({ type: ActionKind.setOpenWaitingModal, payload: onOpenWaiting });
    dispatch({ type: ActionKind.setCloseWaitingModal, payload: onCloseWaiting });
  }, [dispatch, onOpenDeposit, onOpenWithdraw, onOpenWaiting, onCloseWaiting])

  useEffect(() => {
    const fetchAll = async () => {
      fetchData(state, dispatch)
    }
    // if (checkNetwork(wallet, state))
    if(near && wallet)
      fetchAll()
  }, [wallet, near])

  useEffect(() => {
    setTimeout(()=> {
      checkTransaction()
    }, 1000);
  }, [])
  return (
    <Flex
      background={'black'}
      justify={'center'}
      w={'100%'}
    >
      <VStack
        fontFamily={'SF UI Text'}
        fontStyle={'normal'}
        letterSpacing={'-0.06em'}
        spacing={'10px'}
        color={'white'}
        maxWidth={'1440px'}
        w = {'100%'}
      >
        <Navbar />
        <Outlet />
        <Footer />
        <DepositModal isOpen={isOpenDeposit} onClose={onCloseDeposit} />
        <WithdrawModal isOpen={isOpenWithdraw} onClose={onCloseWithdraw} />
        <WaitingModal isOpen={isOpenWaiting} onClose={onCloseWaiting} />
      </VStack>
    </Flex>
  )
};
export default Layout;
