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

interface Iattachment {
  data?: string,
  alternative?: boolean,
  path?: string,
  type?: string,
  name?: string
}

export interface email {
	sendEmail(title: string, info: string, reciver: string, attachment?: Array<Iattachment>): Promise<IReturnData>;
}
