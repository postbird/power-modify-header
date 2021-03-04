import React from 'react';
import Config from '../Config';
import { useConfigList } from '../../hooks';

const ListPage = () => {
	const [ids] = useConfigList();
	return ids.map(id => <Config key={id} id={id} />);
};

export default ListPage;
