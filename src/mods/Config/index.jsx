import React from 'react';
import { Row, Col, Form, Select, Input } from 'antd';
import { ACTION_ENUM, APPLY_ENUM } from '../../constants/';

const { useForm } = Form;

const Config = () => {
	const [form] = useForm();

	return (
		<Form form={form} layout="vertical">
			<Row>
				<Col>
					<Form.Item name="action" label="Action">
						<Select style={{ width: '90px' }}>
							{ACTION_ENUM.map(item => (
								<Select.Option value={item.value} key={item.value}>
									{item.label}
								</Select.Option>
							))}
						</Select>
					</Form.Item>
				</Col>
				<Col>
					<Form.Item name="headerName" label="Header Field Name">
						<Input />
					</Form.Item>
				</Col>
				<Col>
					<Form.Item name="headerValue" label="Header Field Value">
						<Input />
					</Form.Item>
				</Col>
				<Col>
					<Form.Item name="apply" label="Action">
						<Select style={{ width: '90px' }}>
							{APPLY_ENUM.map(item => (
								<Select.Option value={item.value} key={item.value}>
									{item.label}
								</Select.Option>
							))}
						</Select>
					</Form.Item>
				</Col>
                <Col>
					<Form.Item name="apply" label="Action">
						<Select style={{ width: '90px' }}>
							{APPLY_ENUM.map(item => (
								<Select.Option value={item.value} key={item.value}>
									{item.label}
								</Select.Option>
							))}
						</Select>
					</Form.Item>
				</Col>
			</Row>
		</Form>
	);
};

export default Config;
