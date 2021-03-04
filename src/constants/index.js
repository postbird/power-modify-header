export const ACTIONS = {
	ADD: 'Add',
	MODIFY: 'Modify',
	DELETE: 'Delete',
};

export const APPLY = {
	RESPONSE: 'Response',
	REQUEST: 'Request',
};

export const ACTION_ENUM = [
	{
		label: ACTIONS.ADD,
		value: ACTIONS.ADD,
	},
	{
		label: ACTIONS.MODIFY,
		value: ACTIONS.MODIFY,
	},
	{
		label: ACTIONS.DELETE,
		value: ACTIONS.DELETE,
	},
];

export const APPLY_ENUM = [
	{
		label: APPLY.REQUEST,
		value: APPLY.REQUEST,
	},
	{
		label: APPLY.RESPONSE,
		value: APPLY.RESPONSE,
	},
];
