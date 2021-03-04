import React from 'react';
import { PageHeader, Row, Col } from 'antd';
import styles from './index.module.css';

const ListPage = () => {
	return (
		<Row>
			<Col span={4}></Col>
			<Col span={16}>
				<PageHeader title="Power Modify Header" className={styles.header} />
			</Col>
			<Col span={4}></Col>
		</Row>
	);
};

export default ListPage;
