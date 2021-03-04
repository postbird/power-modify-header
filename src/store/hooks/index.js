import { useRecoilCallback, useRecoilState, useSetRecoilState } from 'recoil';
import { listState, configState } from '../atoms';
import { v4 as uuidv4 } from 'uuid';

const generateConfig = id => {
	return {
		id,
		urlPatterns: [],
		action: '', // add/modify/delete
		headerName: '',
		headerValue: '',
		apply: '', // request/response
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
