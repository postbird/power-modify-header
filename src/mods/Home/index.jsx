import React, { useEffect } from 'react';
import { PageHeader, Row, Col, Tag, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import styles from './index.module.css';
import List from '../List';
import { useConfigList, useAddConfig } from '../../hooks';

const ListPage = () => {
	const [ids] = useConfigList();
	const addConfig = useAddConfig();

	useEffect(() => {
		if (ids.length === 0) {
			addConfig();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleAddClick = () => {
		addConfig()
	};

	return (
		<Row>
			<Col span={4}></Col>
			<Col span={16}>
				<PageHeader
					title="Power Modify Header"
					subTitle={<Tag color="#2db7f5">v0.0.1-alpha</Tag>}
					className={styles.header}
				/>
				<Button type="primary" onClick={handleAddClick}>
					<PlusOutlined /> Add New
				</Button>
				<List />
			</Col>
			<Col span={4}></Col>
		</Row>
	);
};

export default ListPage;
