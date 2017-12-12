/*
* @Description 声明文件
* @Copyright zhouzhi073859@outlook.com
* */

interface IReturnData {
	code: number;
	msg: string;
}
interface IOption {
	host: string;
	password: string;
	sender: string;
	username: string;
}

// export function sendEmail(title: string, info: string, reciver: string): Promise<IReturnData>;
export interface email {
	sendEmail(title: string, info: string, reciver: string): Promise<IReturnData>;
}
