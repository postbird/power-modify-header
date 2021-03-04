import { useRecoilCallback, useRecoilState, useSetRecoilState } from 'recoil';
import { listState, configState } from '../atoms';
import { v4 as uuidv4 } from 'uuid';
import { ACTIONS, APPLY } from '../constants';

export const generateConfig = id => {
	return {
		id,
		urlPatterns: [],
		urlContain: [],
		action: ACTIONS.ADD, // add/modify/delete
		headerName: '',
		headerValue: '',
		apply: APPLY.REQUEST, // request/response
		status: false, // true/false
	};
};

export const useAddConfig = () => {
	const setIds = useSetRecoilState(listState);
	return useRecoilCallback(({ set }) => {
		return () => {
			const id = uuidv4();
			set(configState(id), generateConfig(id));
			setIds(ids => [...ids, id]);
		};
	}, []);
};

export const useConfigList = () => {
	return useRecoilState(listState);
};

export const useConfig = id => {
	return useRecoilState(configState(id));
};
