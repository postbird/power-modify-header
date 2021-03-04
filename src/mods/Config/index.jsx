import React from 'react';
import { Form, Select, Input, Switch, Button, Popconfirm, Divider } from 'antd';
import { DeleteOutlined, MenuOutlined } from '@ant-design/icons';
import { ACTION_ENUM, APPLY_ENUM } from '../../constants/';
import styles from './index.module.css';
import { useConfig, useConfigList } from '../../hooks';

const { useForm } = Form;

const Config = ({ id }) => {
	const [form] = useForm();
	const [ids, setIds] = useConfigList();
	const [config, setConfig] = useConfig(id);

	if (!id || !config) {
		return null;
	}

	const handleDeleteConfig = () => {
		setIds(ids.filter(item => item !== id));
	};

	return (
		<Form form={form} layout="vertical" className={styles.formWrap} initialValues={config}>
			<Form.Item name="urlContain" label="URL Contains">
				<Input />
			</Form.Item>
			<Form.Item name="action" label="Action">
				<Select style={{ width: '120px' }}>
					{ACTION_ENUM.map(item => (
						<Select.Option value={item.value} key={item.value}>
							{item.label}
						</Select.Option>
					))}
				</Select>
			</Form.Item>
			<Form.Item name="headerName" label="Header Field Name">
				<Input />
			</Form.Item>
			<Form.Item name="headerValue" label="Header Field Value">
				<Input />
			</Form.Item>
			<Form.Item name="apply" label="Apply On">
				<Select style={{ width: '120px' }}>
					{APPLY_ENUM.map(item => (
						<Select.Option value={item.value} key={item.value}>
							{item.label}
						</Select.Option>
					))}
				</Select>
			</Form.Item>
			<Form.Item name="status" label="Status" valuePropName="checked">
				<Switch />
			</Form.Item>
			<Popconfirm title="Confirm to delete?" onConfirm={handleDeleteConfig}>
				<Button type="danger">
					<DeleteOutlined />
				</Button>
			</Popconfirm>
			<div>
				<MenuOutlined style={{ cursor: 'move' }} />
			</div>
		</Form>
	);
};

export default Config;
