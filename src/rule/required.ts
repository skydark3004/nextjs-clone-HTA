import { Rule } from 'antd/es/form';

export function requiredRule(message: string): Rule {
  const rule = { required: true, message: message };
  return rule;
}
