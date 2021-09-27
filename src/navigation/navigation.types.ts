import {Hello} from './routes';

export type RootStackParamList = {
  [Hello.ROOT]: null;
  [Hello.HELLO_CHILD]: {title: string};
};
