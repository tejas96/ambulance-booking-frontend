import {useContext} from 'react';
import {SocketContext} from '../providers';

const useSocket = () => {
  const socketContext = useContext(SocketContext);
  return socketContext;
};
export default useSocket;
